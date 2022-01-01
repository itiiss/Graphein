import { createInterval, createLine } from '../geometry';

export function fromGeometry(type) {
  if (type === 'interval') return createInterval();
  if (type === 'line') return createLine();
  throw new Error(`unknown interval type: ${type}`);
}
