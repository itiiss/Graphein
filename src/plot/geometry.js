import { createInterval, createLine, createPoint } from '../geometry';

export function fromGeometry(type) {
  if (type === 'interval') return createInterval();
  if (type === 'line') return createLine();
  if (type === 'point') return createPoint();
  throw new Error(`unknown interval type: ${type}`);
}
