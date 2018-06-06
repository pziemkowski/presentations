export const code = `
import SpatialHash from 'spatial-hash';
const hash = new SpatialHash({
  x: 0,
  y: 0,
  width: 10 * width,
  height: 10 * height
}, 20);

class BunnyPool {
  instances = [];

  getInstance() {
    const instance = this.instances.pop();
    if (instance) {
      return instance;
    }

    return new PIXI.Sprite.fromImage('bunny.png');
  }
  
  release(instance) {
    this.instances.push(instance);
  }
}

const bunnyPool = new BunnyPool();

for (let i = 0; i < 10000; i += 1) {
  hash.insert({
    range: {
      x: width * Math.random() * 10,
      y: height * Math.random() * 10,
      width: bunny.width,
      height: bunny.height
    }
  });
}

const removedBunnies = app.stage.removeChildren();
for (let k = 0; k < removedBunnies.count; k += 1) {
  const bunny = removedBunnies[k];
  bunnyPool.release(bunny)
}

const visible = hash.query({
  x: 0,
  y: 0,
  height: height,
  width: width
});
for (let j = 0; j < visible.count; j += 1) {
  const bunnyData = visible[j];
  const bunny = bunnyPool.getInstance();
  
  bunny.x = bunnyData.range.x;
  bunny.y = bunnyData.range.y;
  
  app.stage.addChild(bunny);
}
`;
