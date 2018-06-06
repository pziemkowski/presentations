export const code = `
import yoga from 'yoga-layout';

const rootNode = yoga.Node.create();

rootNode.setHeight(100);
rootNode.setWidth(100);

rootNode.setPadding(yoga.EDGE_TOP, 10);
rootNode.setPadding(yoga.EDGE_BOTTOM, 10);

rootNode.setDisplay(yoga.DISPLAY_FLEX);
rootNode.setFlexWrap(yoga.WRAP_NO_WRAP);
rootNode.setFlexDirection(
  yoga.FLEX_DIRECTION_COLUMN
);

const rows = [];
for (let i = 0; i < 10; i += 1) {
  const rowNode = yoga.Node.create();
  rowNode.setFlexGrow(1);
  rootNode.insertChild(rowNode, i);
  rows.push(rowNode);
}

rootNode.calculateLayout();

rows.forEach((row, i) => {
  console.log(\`Row \${i} y: \${row.getComputedTop()}, h: \${row.getComputedHeight()}, w: \${row.getComputedWidth()} \`);
});

/*
Row 0 y: 10, h: 8, w: 100
Row 1 y: 18, h: 8, w: 100
Row 2 y: 26, h: 8, w: 100
Row 3 y: 34, h: 8, w: 100
Row 4 y: 42, h: 8, w: 100
Row 5 y: 50, h: 8, w: 100
Row 6 y: 58, h: 8, w: 100
Row 7 y: 66, h: 8, w: 100
Row 8 y: 74, h: 8, w: 100
Row 9 y: 82, h: 8, w: 100
 */
 `;