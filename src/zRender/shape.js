import * as zrender from 'zrender';

export function line(context, attributes) {

  const {
    x1, y1, x2, y2, stroke, fill,
  } = attributes;
  const line = new zrender.Line({
    shape: {
      x1, y1, x2, y2,
    },
    style: {
      fill,
      stroke,
    },
  });
  context.render.add(line);
}

export function path(context, attributes) {
  const {
    stroke, d, canvasSector, fill,
  } = attributes;
  if (canvasSector) {
    sector(context, attributes);
  } else {
    const points = d.map((attribute) => attribute.slice(1, attribute.length));
    const path = new zrender.Polyline({
      shape: {
        points,
      },
      style: {
        fill,
        stroke,
      },
    });
    context.render.add(path);
  }
}

export function circle(context, attributes) {
  const {
    stroke, fill, r, cx, cy,
  } = attributes;
  const circle = new zrender.Circle({
    shape: {
      cx, cy, r,
    },
    style: {
      fill,
      stroke,
    },
  });
  context.render.add(circle);
}

export function ring(context, attributes) {
  console.log('shape: ring', context, attributes);
}

export function rect(context, attributes) {
  const {
    x, y, width, height, stroke, fill,
  } = attributes;
  const rect = new zrender.Rect({
    shape: {
      x, y, width, height,

    },
    style: {
      fill,
      stroke,
    },
  });
  context.render.add(rect);
}

export function text(context, attributes) {
  // {
  //     "text": "Rust",
  //     "x": 0,
  //     "y": 0,
  //     "fontSize": 40,
  //     "stroke": "black",
  //     "fontWeight": 600,
  //     "fill": "#5B8FF9"
  // }
  const {
    text, x, y, fontSize, stroke, fontWeight, fill,
  } = attributes;
  const textElement = new zrender.Text({

    style: {
      fill,
      stroke,
      text,
      x,
      y,
      fontSize,
      fontWeight,
    },
  });
  context.render.add(textElement);
}

export function sector(context, attributes) {
  const { fill, stroke, canvasSector } = attributes;
  const {
    cx, cy, r, r0, startAngle, endAngle,
  } = canvasSector;
  const sector = new zrender.Sector({
    shape: {
      cx, cy, r, r0, startAngle, endAngle,
    },
    style: {
      fill,
      stroke,
    },
  });
  context.render.add(sector);
}

// export function line(context, attributes) {
//   return shape('line', context, attributes);
// }

// export function rect(context, attributes) {
//   const {
//     width, height, x, y,
//   } = attributes;

//   return shape('rect', context, {
//     ...attributes,
//     width: Math.abs(width),
//     height: Math.abs(height),
//     x: width > 0 ? x : x + width,
//     y: height > 0 ? y : y + height,
//   });
// }

// export function path(context, attributes) {
//   const { d } = attributes;
//   return shape('path', context, { ...attributes, d: d.flat().join(' ') });
// }

// export function circle(context, attributes) {
//   return shape('circle', context, attributes);
// }

// export function text(context, attributes) {
//   const { text, ...rest } = attributes;
//   const textElement = shape('text', context, rest);
//   textElement.textContent = text;
//   return textElement;
// }

// export function ring(context, attributes) {
//   const {
//     cx, cy, r1, r2, ...styles
//   } = attributes;
//   const { stroke, strokeWidth, fill } = styles;
//   const defaultStrokeWidth = 1;
//   const innerStroke = circle(context, {
//     fill: 'transparent',
//     stroke: stroke || fill,
//     strokeWidth,
//     cx,
//     cy,
//     r: r1,
//   });
//   const ring = circle(context, {
//     ...styles,
//     strokeWidth: r2 - r1 - (strokeWidth || defaultStrokeWidth),
//     stroke: fill,
//     fill: 'transparent',
//     cx,
//     cy,
//     r: (r1 + r2) / 2,
//   });
//   const outerStroke = circle(context, {
//     fill: 'transparent',
//     stroke: stroke || fill,
//     strokeWidth,
//     cx,
//     cy,
//     r: r2,
//   });
//   return [innerStroke, ring, outerStroke];
// }

// export function shape(type, context, attributes) {
//   const { group } = context;
//   const el = createSVGElement(type);
//   applyAttributes(el, attributes);
//   mount(group, el);
//   return el;
// }
