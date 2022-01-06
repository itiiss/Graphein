export function rectLabel(renderer, label, [v0, , v2], coordinate, styles) {
  const vx = (v0[0] + v2[0]) / 2;
  const vy = (v0[1] + v2[1]) / 2;
  const [x, y] = coordinate([vx, vy]);
  const { formatter = (d) => `${d}`, ...rest } = styles;
  return renderer.text({
    x,
    y,
    text: formatter(label),
    textAnchor: 'middle',
    ...rest,
  });
}

export function fromStyles(styles) {
  const geometryStyles = {};
  const labelStyles = {};
  for (const [key, value] of Object.entries(styles)) {
    if (key.startsWith('label')) {
      const labelKey = toLowerCase(key.replace('label', ''));
      labelStyles[labelKey] = value;
    } else {
      geometryStyles[key] = value;
    }
  }
  return [geometryStyles, labelStyles];
}

export function toLowerCase(string) {
  const a = string.slice(0, 1);
  const b = string.slice(1);
  return a.toLowerCase() + b;
}
