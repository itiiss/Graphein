import { createContext } from './context';
import {
  circle, text, rect, path, ring, line,
} from './shape';

export function createZRenderer(width, height) {
  const context = createContext(width, height);
  return {
    line: (options) => line(context, options),
    circle: (options) => circle(context, options),
    text: (options) => text(context, options),
    rect: (options) => rect(context, options),
    path: (options) => path(context, options),
    ring: (options) => ring(context, options),
    node: () => context.node,
    context: () => context.render,
    type: () => 'ZRENDER',
  };
}
