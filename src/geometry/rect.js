import {
  createChannel, createChannels, createColorChannel, createLabelChannel,
} from './channel';
import { fromStyles, rect, rectLabel } from './utils';
import { rect as shapeRect } from './shape';
import { colors } from '../plot/theme';

export function createRect() {
  const render = ({
    renderer, index, values, directStyles, scales, coordinate,
  }) => {
    const defaults = {};
    const {
      x: X, y: Y, x1: X1, y1: Y1,
    } = values;

    return Array.from(index, (I, index) => {
      const styles = {
        ...defaults,
        ...directStyles,
        fill: colors[index],
      };
      const [geometryStyles, labelStyles] = fromStyles(styles);

      const rect = shapeRect(renderer, coordinate, {
        ...defaults,
        ...directStyles,
        ...geometryStyles,
        fill: colors[index],
        x1: X[I],
        y1: Y[I],
        x2: X1[I],
        y2: Y1[I],
      });

      return rect;
    });
  };

  render.channels = () => createChannels({
    x1: createChannel({ name: 'x1', optional: false }),
    y1: createChannel({ name: 'y1', optional: false }),
  });

  return render;
}
