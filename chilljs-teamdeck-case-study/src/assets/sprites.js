export const code = `
function createBlockShape(width, height) {
  const shape = new PIXI.Graphics();

  shape.beginFill(0xffffff);
  shape.drawRoundedRect(
    0, 0, width, height, 3
  );
  shape.endFill();

  return shape;
}

const app = new PIXI.Application(200, 200);

const shape = createBlockShape(100, 24);
const texture = app.renderer.generateTexture(
  shape, PIXI.SCALE_MODES.LINEAR, 2
);

for (let i = 0; i < 10000; i += 1) {
  const sprite = new PIXI.Sprite(texture);
  
  app.stage.addChild(sprite);
}
`;
