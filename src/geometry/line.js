import {
  createChannel, createChannels,
} from './channel';
import { line as shapeLine } from './shape';
import { fromStyles, rect, rectLabel } from './utils';
import { group } from '../utils';

export function createLine() {
  const render = ({
    renderer, index, values, directStyles, scales, coordinate,
  }) => {
    const {
      fill: F, stroke: S, x: X, y: Y, y1: Y1, label: L, z: Z,
    } = values;

    const defaults = {};

    const series = Z ? group(index, (i) => Z[i]).values() : [index];
    // const { x } = scales;
    // const width = x ? x.bandWidth() : 1;

    return Array.from(series, (I) => {
      const styles = {
        ...directStyles,
        ...(S && { stroke: S[I] }),
        ...(F && { fill: F[I] }),
      };
      const [geometryStyles, labelStyles] = fromStyles(styles);

      const line = shapeLine(renderer, coordinate, {
        X: [0.2, 0.4, 0.6, 0.8, 1], Y, I, geometryStyles, fill: 'none', stroke: 'gray',
      });

      return line;
    });

    // return index.map((I) => {
    //   // const vx = X[I] || 0;
    //   // const label = L && L[I];
    //   const styles = {
    //     ...directStyles,
    //     ...(S && { stroke: S[I] }),
    //     ...(F && { fill: F[I] }),
    //   };
    //   const [geometryStyles, labelStyles] = fromStyles(styles);
    //   // const v0 = [vx, Y[I]];
    //   // const v1 = [v0[0] + width, v0[1]];
    //   // const v2 = [v1[0], Y1[I]];
    //   // const v3 = [v0[0], Y1[I]];
    //   // const points = [v0, v1, v2, v3];
    //   debugger;
    //   const line = shapeLine(renderer, coordinate, {
    //     X, Y, index, geometryStyles,
    //   });
    //   // const rects = rect(renderer, points, coordinate, geometryStyles);
    //   // if (label !== undefined) rectLabel(renderer, label, points, coordinate, labelStyles);
    //   // return rects;
    //   return line;
    // });
  };

  render.channels = () => createChannels({
    z: createChannel({ name: 'z' }),
  });

  return render;
}
