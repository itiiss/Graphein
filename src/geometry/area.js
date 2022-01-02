import {
  createChannel, createChannels, createColorChannel, createLabelChannel,
} from './channel';
import { area as shapeArea } from './shape';
import { fromStyles } from './utils';
import { group } from '../utils';
import { colors } from '../plot/theme';

export function createArea() {
  const render = ({
    renderer, index, values, directStyles, scales, coordinate,
  }) => {
    const defaults = {};
    const {
      x: X, y: Y, z: Z, x1: X1, y1: Y1,
    } = values;
    const series = Z ? group(index, (i) => Z[i]).values() : [index];

    return Array.from(series, (I, index) => {
      const styles = {
        ...defaults,
        ...directStyles,
        fill: colors[index]
      };
      const [geometryStyles, labelStyles] = fromStyles(styles);

      const line = shapeArea(renderer, coordinate, {
        ...defaults,
        ...directStyles,
        ...geometryStyles,
        X1: X,
        Y1: Y,
        X2: X1,
        Y2: Y1,
        I,
      });

      return line;
    });
  };

  render.channels = () => createChannels({
    x1: createChannel({ name: 'x1', optional: false }),
    y1: createChannel({ name: 'y1', optional: false }),
    z: createChannel({ name: 'z' }),
  });

  return render;
}
