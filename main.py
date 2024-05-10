def Faire_my_spirite_2():
    controller.player2.move_sprite(mySprite2, 0, 100)
    mySprite2.set_position(150, 60)
    mySprite2.set_stay_in_screen(True)
def Faire_my_spirite_1():
    controller.move_sprite(mySprite, 0, 100)
    mySprite.set_stay_in_screen(True)
    mySprite.set_position(10, 60)

def on_on_overlap(sprite, otherSprite):
    otherSprite.vx = 0 - otherSprite.vx
    if sprite == mySprite:
        otherSprite.left = sprite.right
    else:
        otherSprite.right = sprite.left
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def Faire_balle():
    Ball.set_bounce_on_wall(True)
    Ball.set_stay_in_screen(True)
    Ball.set_velocity(75, 75)

def on_hit_wall(sprite2, location):
    if Ball.is_hitting_tile(CollisionDirection.LEFT):
        info.player2.change_score_by(1)
        Ball.set_position(75, randint(0, 100))
    elif Ball.is_hitting_tile(CollisionDirection.RIGHT):
        info.player1.change_score_by(1)
        Ball.set_position(75, randint(0, 100))
        Ball.set_position(75, 60)
scene.on_hit_wall(SpriteKind.projectile, on_hit_wall)

def on_on_score():
    game.game_over(True)
info.on_score(5, on_on_score)

mySprite2: Sprite = None
mySprite: Sprite = None
Ball: Sprite = None
info.player2.set_score(0)
info.player1.set_score(0)
Ball = sprites.create(img("""
        . . . 1 1 1 1 . . . 
            . . 1 4 4 4 4 1 . . 
            . 1 4 4 4 4 4 4 1 . 
            1 4 4 4 4 4 4 4 4 1 
            1 4 4 4 4 4 4 4 4 1 
            1 4 4 4 4 4 4 4 4 1 
            1 4 4 4 4 4 4 4 4 1 
            . 1 4 4 4 4 4 4 1 . 
            . . 1 4 4 4 4 1 . . 
            . . . 1 1 1 1 . . .
    """),
    SpriteKind.projectile)
mySprite = sprites.create(img("""
        1 1 1 1 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 2 2 2 1 
            1 1 1 1 1
    """),
    SpriteKind.player)
mySprite2 = sprites.create(img("""
        1 1 1 1 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 8 8 8 1 
            1 1 1 1 1
    """),
    SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    niveau6
"""))
scene.set_background_color(15)
Faire_my_spirite_1()
Faire_my_spirite_2()
Faire_balle()
effects.confetti.start_screen_effect()