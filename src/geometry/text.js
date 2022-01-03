import {
  createChannel, createChannels, createXChannel, createYChannel,
} from './channel';
import { text as shapeText } from './shape';
import { fromStyles } from './utils';

export function createText() {
  const render = ({
    renderer, index, values, directStyles, scales, coordinate,
  }) => {
    const defaults = {
      rotate: 0,
      fontSize: 14,
    };

    const {
      x: X, y: Y, text: T, rotate: R = [], fontSize: FS = [], fill: F, stroke: S,
    } = values;

    return Array.from(index, (I) => {
      const styles = {
        ...directStyles,
        ...(S && { stroke: S[I] }),
        ...(F && { fill: F[I] }),
      };
      const [geometryStyles, labelStyles] = fromStyles(styles);

      const point = shapeText(renderer, coordinate, {
        ...defaults,
        ...geometryStyles,
        ...labelStyles,
        x: X[I],
        y: Y[I],
        rotate: R[I] || defaults.rotate,
        fontSize: FS[I] * defaults.fontSize * index.length || defaults.fontSize,
        text: T[I],
      });

      return point;
    });
  };

  render.channels = () => createChannels({
    rotate: createChannel({ name: 'rotate' }),
    fontSize: createChannel({ name: 'fontSize' }),
    text: createChannel({ name: 'text', optional: false, scaleType: 'identity' }),
  });

  return render;
}
