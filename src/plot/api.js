import { defineOptions, useOptions } from './options';
import { plot } from './plot';
import {
  Linear, Polar, Scale, Transpose, Encode, Chart, Band, Ordinal, Stack, AxisX, AxisY,
} from './types';

export function cell() {
  return chart().element('cell');
}

export function rect() {
  return chart().element('rect');
}

export function area() {
  return chart().element('area');
}

export function word() {
  return chart().element('text');
}

export function interval() {
  return chart().element('interval');
}

export function line() {
  return chart().element('line');
}

export function point() {
  return chart().element('point');
}

function chart() {
  const options = defineOptions(Chart);
  options.plot = () => plot(useOptions(options));
  return options;
}

export function text() {
  return defineOptions(Encode).channel('text');
}

export function fontSize() {
  return defineOptions(Encode).channel('fontSize');
}

export function r() {
  return defineOptions(Encode).channel('r');
}

export function x() {
  return defineOptions(Encode).channel('x');
}

export function x1() {
  return defineOptions(Encode).channel('x1');
}

export function y() {
  return defineOptions(Encode).channel('y');
}

export function z() {
  return defineOptions(Encode).channel('z');
}

export function y1() {
  return defineOptions(Encode).channel('y1');
}

export function fill() {
  return defineOptions(Encode).channel('fill');
}

export function stroke() {
  return defineOptions(Encode).channel('stroke');
}

export function label() {
  return defineOptions(Encode).channel('label');
}

export function polar() {
  return defineOptions(Polar);
}

export function transpose() {
  return defineOptions(Transpose);
}

export function scale() {
  return defineOptions(Scale);
}

export function linear() {
  return defineOptions(Linear);
}

export function band() {
  return defineOptions(Band);
}

export function ordinal() {
  return defineOptions(Ordinal);
}

export function stack() {
  return defineOptions(Stack);
}

export function axisX() {
  return defineOptions(AxisX);
}

export function axisY() {
  return defineOptions(AxisY);
}
