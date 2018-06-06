import yoga from 'yoga-layout';

const rootNode = yoga.Node.create();

rootNode.setPadding(yoga.EDGE_TOP, 10);
rootNode.setPadding(yoga.EDGE_BOTTOM, 10);

rootNode.setHeight(100);
rootNode.setWidth(100);

rootNode.setDisplay(yoga.DISPLAY_FLEX);
rootNode.setFlexWrap(yoga.WRAP_NO_WRAP);
rootNode.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN);

const rows = [];
for (let i = 0; i < 10; i += 1) {
  const rowNode = yoga.Node.create();
  rowNode.setFlexGrow(1);
  rootNode.insertChild(rowNode, i);
  rows.push(rowNode);
}

rootNode.calculateLayout();

rows.forEach((row, i) => {
  console.log(`Row ${i} y: ${row.getComputedTop()}, w: ${row.getComputedHeight()}, h: ${row.getComputedWidth()} `);
});

/*
Row 0 y: 10, w: 8, h: 100
Row 1 y: 18, w: 8, h: 100
Row 2 y: 26, w: 8, h: 100
Row 3 y: 34, w: 8, h: 100
Row 4 y: 42, w: 8, h: 100
Row 5 y: 50, w: 8, h: 100
Row 6 y: 58, w: 8, h: 100
Row 7 y: 66, w: 8, h: 100
Row 8 y: 74, w: 8, h: 100
Row 9 y: 82, w: 8, h: 100
 */