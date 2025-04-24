const app = new PIXI.Application();
await app.init({ width: 1000, height: 500 })
document.body.appendChild(app.canvas);

await PIXI.Assets.load('/assets/images/sample.png');
let sprite = PIXI.Sprite.from('/assets/images/sample.png');
app.stage.addChild(sprite);

let elapsed = 0.0;

app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    sprite.y = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});