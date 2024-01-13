function preload() {
  this.load.image("player", "assets/repl.png");
  this.load.image("fundo", "assets/sky.png");
  this.load.image("obstaculo", "assets/platform.png");
  this.load.image("personagem", "assets/dude.png");

}

function create() {

  this.add.image(300, 200, "fundo");

  var platform = this.physics.add.staticGroup();
  platform.create(300,400, "obstaculo"). setScale(1.5);
  platform.create(50,250, "obstaculo").setScale(0.90);
  platform.create(550,150, "obstaculo").setScale(0.90);

  var personagem = this.physics.add.sprite(100, 352, "personagem")




  this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

  this.player = this.physics.add
    .image(config.width / 2, config.height / 2, "player")
    .setScale(0.25, 0.25);
  this.player.setCollideWorldBounds(true);
}

function update() {
  let cursors = this.input.keyboard.createCursorKeys();
  if (
    cursors.left.isDown ||
    this.a.isDown ||
    cursors.right.isDown ||
    this.d.isDown
  )
    this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
  else this.player.setVelocityX(0);
  if (
    cursors.up.isDown ||
    this.w.isDown ||
    cursors.down.isDown ||
    this.s.isDown
  )
    this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
  else this.player.setVelocityY(0);
}

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  backgroundColor: "#f9f9f9",
  autoCenter: Phaser.Scale.CENTER_BOTH,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0,
      },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);
