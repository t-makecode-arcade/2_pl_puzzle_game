scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
	
})
function gun_ammo_equility () {
    if (privious_gun_ammo < gun_ammo) {
        privious_gun_ammo = gun_ammo
        info.player1.changeScoreBy(-1)
        privious_gun_ammo += -1
    }
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    gun_ammo += -1
    if (gun_ammo == 0) {
        game.splash("i don't have any ammo!")
    } else if (mySprite.image == assets.image`army man left`) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 50)
    }
    if (gun_ammo > privious_gun_ammo) {
        gun_ammo_equility()
    }
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`army man left`)
})
let projectile: Sprite = null
let gun_ammo = 0
let privious_gun_ammo = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`army man`, SpriteKind.Player)
controller.player1.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
privious_gun_ammo = 2
gun_ammo = 1
info.setScore(gun_ammo)
