export const code = `
import * as PIXI from 'pixi.js';


const width = 200;
const height = 200;
const app = new PIXI.Application(width, height);
document.body.appendChild(app.view);

const bunnies = [];
for (let i = 0; i < 10000; i += 1) {
  const bunny = new PIXI.Sprite.fromImage('bunny.png');

  bunny.x = width * Math.random() * 10;
  bunny.y = height * Math.random() * 10;

  bunnies.push(bunny);
}

app.stage.removeChildren();

for (let j = 0; j < bunnies.count; j += 1) {
  const bunny = bunnies[j];
  if (isInViewport(bunny)) {
    app.stage.addChild(bunny);
  }
}

function isInViewport(bunny) {
  return bunny.x + bunny.width > 0 
    && bunny.x < width
    && bunny.y + bunny.height > 0
    && bunny.y < height;
}
`;