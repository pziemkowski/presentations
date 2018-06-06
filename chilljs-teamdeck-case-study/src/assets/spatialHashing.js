export const code = `
import SpatialHash from 'spatial-hash';
const hash = new SpatialHash({
  x: 0,
  y: 0,
  width: 10 * width,
  height: 10 * height
}, 20);

for (let i = 0; i < 10000; i += 1) {
  const bunny = new PIXI.Sprite.fromImage('bunny.png');

  bunny.x = width * Math.random() * 10;
  bunny.y = height * Math.random() * 10;
  
  hash.insert({
    range: {
      x: bunny.x,
      y: bunny.y,
      width: bunny.width,
      height: bunny.height
    },
    data: bunny
  });
}

app.stage.removeChildren();

const visible = hash.query({
  x: 0,
  y: 0,
  height: height,
  width: width
});

for (let j = 0; j < visible.count; j += 1) {
  const bunny = visible[j].data;
  app.stage.addChild(bunny);
}
`;