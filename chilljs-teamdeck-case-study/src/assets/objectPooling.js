export const code = `
import SpatialHash from 'spatial-hash';

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

const hash = new SpatialHash({
  x: 0,
  y: 0,
  width: 10 * width,
  height: 10 * height
}, 20);

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

const oldBunnies = app.stage.removeChildren();
oldBunnies.forEach((bunny) => {
  bunnyPool.release(bunny)
});

const visible = hash.query({
  x: 0,
  y: 0,
  height: height,
  width: width
});
visible.forEach((bunnyData) => {
  const bunny = bunnyPool.getInstance();
  
  bunny.x = bunnyData.range.x;
  bunny.y = bunnyData.range.y;
  
  app.stage.addChild(bunny);
});
`;
