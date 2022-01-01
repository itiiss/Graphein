import {
  createChannel, createChannels,
} from './channel';
import { line as shapeLine, circle } from './shape';
import { fromStyles, rect, rectLabel } from './utils';

export function createPoint() {
  const render = ({
    renderer, index, values, directStyles, scales, coordinate,
  }) => {
    const defaults = {
      r: 10,
      fill: 'none',
    };

    const {
      fill: F, stroke: S, x: X, y: Y, label: L, r: R = [],
    } = values;

    return Array.from(index, (I) => {
      const styles = {
        ...directStyles,
        ...(S && { stroke: S[I] }),
        ...(F && { fill: F[I] }),
      };
      const [geometryStyles, labelStyles] = fromStyles(styles);

      const r = R[I] * defaults.r || defaults.r;

      const point = circle(renderer, coordinate, {
        ...defaults,
        ...geometryStyles,
        ...labelStyles,
        cx: X[I],
        cy: Y[I],
        r,
      });

      return point;
    });
  };

  render.channels = () => createChannels({
    r: createChannel({ name: 'r' }),
  });

  return render;
}
