def gun_ammo_equility():
    global privious_gun_ammo
    if privious_gun_ammo < gun_ammo:
        privious_gun_ammo = gun_ammo
        info.change_score_by(-1)
        privious_gun_ammo += -1

def on_overlap_tile(sprite, location):
    pass
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

def on_player1_button_a_pressed():
    global gun_ammo, projectile
    gun_ammo += -1
    if gun_ammo == 0:
        game.splash("i don't have any ammo!")
    else:
        if mySprite.image == assets.image("""
            army man left
        """):
            projectile = sprites.create_projectile_from_sprite(img("""
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
                """),
                mySprite,
                50,
                50)
    if gun_ammo > privious_gun_ammo:
        gun_ammo_equility()
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def on_player1_button_left_pressed():
    mySprite.set_image(assets.image("""
        army man left
    """))
controller.player1.on_button_event(ControllerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_player1_button_left_pressed)

projectile: Sprite = None
gun_ammo = 0
privious_gun_ammo = 0
mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    army man
"""), SpriteKind.player)
controller.player1.move_sprite(mySprite)
tiles.set_current_tilemap(tilemap("""level1"""))
privious_gun_ammo = 2
gun_ammo = 1
info.set_score(gun_ammo)