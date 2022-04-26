namespace SpriteKind {
    export const ammo = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ammo, function (sprite, otherSprite) {
    gun_ammo += 10
    army_man.destroy()
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    gun_ammo += -1
    if (gun_ammo == 0) {
        game.splash("i don't have any ammo!")
    } else if (army_man.image == assets.image`army man left`) {
        bullet = sprites.createProjectileFromSprite(img`
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
            `, army_man, 50, 50)
    }
})
function nextlevel () {
    level += 1
    if (level == 0) {
        game.showLongText("hi i am your android companion please procede to the next chamber and we can begin testingto see if you can become an army man", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level1`)
    }
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    army_man.setImage(assets.image`army man left`)
})
let bullet: Sprite = null
let gun_ammo = 0
let level = 0
let army_man: Sprite = null
army_man = sprites.create(assets.image`army man`, SpriteKind.Player)
controller.player1.moveSprite(army_man)
level = -1
nextlevel()
forever(function () {
    info.setScore(gun_ammo)
    if (gun_ammo < 0) {
        gun_ammo = 0
    }
})
