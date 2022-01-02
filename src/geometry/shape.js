import {
  equal, dist, angleBetween, sub,
} from '../utils';
import { colline } from './utils';
import { contour, ring } from './primitive';
import { line as pathLine, area as pathArea, sector as pathSector } from './path';

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

export function circle(renderer, coordinate, {
  cx, cy, r, ...styles
}) {
  const [px, py] = coordinate([cx, cy]);
  return renderer.circle({
    cx: px, cy: py, r, ...styles,
  });
}

export function rect(renderer, coordinate, {
  x1, y1, x2, y2, ...styles
}) {
  const v0 = [x1, y1];
  const v1 = [x2, y1];
  const v2 = [x2, y2];
  const v3 = [x1, y2];
  const vs = coordinate.isTranspose() ? [v3, v0, v1, v2] : [v0, v1, v2, v3];
  const ps = vs.map(coordinate);
  const [p0, p1, p2, p3] = ps;

  if (!coordinate.isPolar()) {
    const [width, height] = sub(p2, p0);
    const [x, y] = p0;
    // console.log('geo_shape', x, y, width, height, styles);
    return renderer.rect({
      x, y, width: 40, height, ...styles,
    });
  }

  const center = coordinate.center();
  const [cx, cy] = center;

  if (!(equal(p0, p1) && equal(p2, p3))) {
    return renderer.path({ d: pathSector([center, ...ps]), ...styles });
  }

  const r1 = dist(center, p2);
  const r2 = dist(center, p0);
  return ring(renderer, {
    cx, cy, r1, r2, ...styles,
  });
}

export function text(renderer, coordinate, {
  x, y, rotate, text, ...styles
}) {
  const [px, py] = coordinate([x, y]);
  renderer.save();
  renderer.translate(px, py);
  renderer.rotate(rotate);
  const textElement = renderer.text({
    text, x: 0, y: 0, ...styles,
  });
  renderer.restore();
  return textElement;
}

export function area(renderer, coordinate, {
  X1, Y1, X2, Y2, I: I0, ...styles
}) {
  const I = coordinate.isPolar() ? [...I0, I0[0]] : I0;
  const points = [
    ...I.map((i) => [X1[i], Y1[i]]),
    ...I.map((i) => [X2[i], Y2[i]]).reverse(),
  ].map(coordinate);

  if (coordinate.isPolar()) {
    return contour(renderer, { points, ...styles });
  }
  return renderer.path({ d: pathArea(points), ...styles });
}
