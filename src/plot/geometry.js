import {
  createInterval, createLine, createPoint, createText, createArea, createRect, createCell,
} from '../geometry';

export function fromGeometry(type) {
  if (type === 'interval') return createInterval();
  if (type === 'line') return createLine();
  if (type === 'point') return createPoint();
  if (type === 'text') return createText();
  if (type === 'area') return createArea();
  if (type === 'rect') return createRect();
  if (type === 'cell') return createCell();
  throw new Error(`unknown interval type: ${type}`);
}
