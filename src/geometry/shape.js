import {
  equal, dist, angleBetween, sub,
} from '../utils';
import { colline } from './utils';
import { line as pathLine } from './path';

export function arcPath(c, p0, p1, p2, p3) {
  const r = dist(c, p0);
  const r1 = dist(c, p2);
  const a = angleBetween(sub(p0, c), sub(p1, c));
  const l = a > Math.PI ? 1 : 0;
  const l1 = a > Math.PI ? 1 : 0;
  return [
    ['M', p0[0], p0[1]],
    ['A', r, r, 0, l, 1, p1[0], p1[1]],
    ['L', p2[0], p2[1]],
    ['A', r1, r1, 0, l1, 0, p3[0], p3[1]],
    ['Z'],
  ];
}

export function line(renderer, coordinate, {
  X, Y, I: I0, ...styles
}) {
  const I = coordinate.isPolar() ? [...I0, I0[0]] : I0;
  const points = I.map((i) => coordinate([X[i], Y[i]]));
  const d = pathLine(points);
  return renderer.path({ d, ...styles });
}

export function rect(renderer, [v0, v1, v2, v3], coordinate, styles) {
  if (!coordinate.isPolar()) {
    const [p0, p2] = [v0, v2].map(coordinate);
    const [w, h] = sub(p2, p0);
    return renderer.rect({
      ...styles,
      x: p0[0],
      y: p0[1],
      width: w,
      height: h,
    });
  }

  const center = coordinate.center();
  const vs = coordinate.isTranspose()
    ? [v3, v0, v1, v2]
    : [v0, v1, v2, v3];
  const ps = vs.map(coordinate);

  if (!colline(...ps)) {
    const d = arcPath(center, ...ps);
    return renderer.path({
      ...styles,
      d,
    });
  }

  const r1 = dist(center, ps[2]);
  const r2 = dist(center, ps[0]);
  return renderer.ring({
    cx: center[0],
    cy: center[1],
    r1,
    r2,
    ...styles,
  });
}
