import {
  createChannel, createChannels, createColorChannel, createLabelChannel
} from './channel';
import { line as shapeLine } from './shape';
import { fromStyles, rect, rectLabel } from './utils';
import { group } from '../utils';
import { colors } from '../plot/theme';

export function createLine() {
  const render = ({
    renderer, index, values, directStyles, scales, coordinate,
  }) => {
    const { x: X, y: Y, z: Z } = values;

    const defaults = {
      stroke: '#5B8FF9',
    };

    const series = Z ? group(index, (i) => Z[i]).values() : [index];

    return Array.from(series, (I, index) => {
      const styles = {
        ...defaults,
        ...directStyles,
      };
      const [geometryStyles, labelStyles] = fromStyles(styles);

      const line = shapeLine(renderer, coordinate, {
        X, Y, I, geometryStyles, fill: 'none', stroke: colors[index],
      });

      return line;
    });
  };

  render.channels = () => createChannels({
    z: createChannel({ name: 'z' }),
  });

  return render;
}
