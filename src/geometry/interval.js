import {
  createColorChannel, createLabelChannel, createXChannel, createYChannel, createChannel,
} from './channel';
import { fromStyles, rectLabel } from './utils';
import { rect } from './shape';

// geometry(renderer, index, channels, styles, scales, coordinate);

export function createInterval() {
  const render = ({
    renderer, index, values, directStyles, scales, coordinate,
  }) => {
    const {
      fill: F, stroke: S, x: X, y: Y, y1: Y1, label: L, z: Z = [],
    } = values;
    const defaults = {
      z: 0,
      x: 0,
    };

    const { x, z } = scales;
    const groupWidth = x.bandWidth();
    const intervalWidth = z ? z.bandWidth() : 1;
    const width = groupWidth * intervalWidth;
    return Array.from(index, (i) => {
      const { z: dz, x: dx, ...restDefaults } = defaults;
      const offset = (Z[i] || dz) * groupWidth; // 计算偏移
      const x1 = (X[i] || dx) + offset;
      const vx = X[i] || 0;
      const label = L && L[i];
      const styles = {
        ...directStyles,
        ...(S && { stroke: S[i] }),
        ...(F && { fill: F[i] }),
      };
      const [geometryStyles, labelStyles] = fromStyles(styles);
      const v0 = [vx, Y[i]];
      const v1 = [v0[0] + width, v0[1]];
      const v2 = [v1[0], Y1[i]];
      const v3 = [v0[0], Y1[i]];
      const points = [v0, v1, v2, v3];
      const rects = rect(renderer, coordinate, {
        ...restDefaults,
        ...directStyles,
        ...geometryStyles,
        x1,
        y1: Y[i],
        x2: x1 + width,
        y2: Y1[i],
      });
      if (label !== undefined) rectLabel(renderer, label, points, coordinate, labelStyles);
      return rects;
    });
  };

  render.channels = () => ({
    x: createXChannel({ name: 'x', scaleType: 'band', optional: false }),
    z: createChannel({ name: 'z', scaleType: 'band' }),
    y: createYChannel({ name: 'y', optional: false }),
    y1: createYChannel({ name: 'y1', optional: false }),
    fill: createColorChannel({ name: 'fill' }),
    stroke: createColorChannel({ name: 'stroke' }),
    label: createLabelChannel({ name: 'label' }),
  });

  return render;
}
