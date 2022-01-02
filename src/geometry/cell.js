import {
  createChannel, createChannels, createColorChannel, createLabelChannel,
} from './channel';
import { fromStyles, rect, rectLabel } from './utils';
import { rect as shapeRect } from './shape';
import { colors } from '../plot/theme';

export function createCell() {
  const render = ({
    renderer, index, values, directStyles, scales, coordinate,
  }) => {
    const defaults = {};
    const { x, y } = scales;

    const { x: X, y: Y } = values;
    const width = 10; // x.bandWidth();
    const height = 10; // y.bandWidth();

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
        x1: X[I],
        y1: Y[I],
        x2: X[I] + width,
        y2: Y[I] + height,
      });

      return rect;
    });
  };

  render.channels = () => createChannels({
    x: createChannel({ name: 'x', scale: 'band', optional: false }),
    y: createChannel({ name: 'y', scale: 'band', optional: false }),
  });

  return render;
}
