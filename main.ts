info.player2.onScore(6, function () {
    game.gameOver(true)
})
function Faire_ball_2 () {
    Ball_2 = sprites.create(img`
        . . . 1 1 1 1 . . . 
        . . 1 7 7 7 7 1 . . 
        . 1 7 7 7 7 7 7 1 . 
        1 7 7 1 7 7 1 7 7 1 
        1 7 7 7 7 7 7 7 7 1 
        1 7 1 7 7 7 7 1 7 1 
        1 7 7 1 1 1 1 7 7 1 
        . 1 7 7 7 7 7 7 1 . 
        . . 1 7 7 7 7 1 . . 
        . . . 1 1 1 1 . . . 
        `, SpriteKind.Projectile)
    Ball_2.setPosition(90, 90)
    Ball_2.setVelocity(75, 75)
    Ball_2.setBounceOnWall(true)
    Ball_2.setStayInScreen(true)
}
info.player1.onScore(6, function () {
    game.gameOver(true)
})
info.player2.onScore(3, function () {
    Faire_ball_2()
    if (Ball_2.isHittingTile(CollisionDirection.Left)) {
        info.player2.changeScoreBy(1)
        Ball_2.setPosition(75, randint(0, 100))
    } else if (Ball_2.isHittingTile(CollisionDirection.Right)) {
        info.player1.changeScoreBy(1)
        Ball_2.setPosition(75, randint(0, 100))
    }
})
function Faire_balle () {
    Ball.setBounceOnWall(true)
    Ball.setStayInScreen(true)
    Ball.setVelocity(90, 90)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.vx = 0 - otherSprite.vx
    if (sprite == mySprite) {
        otherSprite.left = sprite.right
    } else {
        otherSprite.right = sprite.left
    }
})
function Faire_my_spirite_1 () {
    controller.moveSprite(mySprite, 0, 100)
    mySprite.setStayInScreen(true)
    mySprite.setPosition(10, 60)
}
function Faire_my_spirite_2 () {
    controller.player2.moveSprite(mySprite2, 0, 100)
    mySprite2.setPosition(150, 60)
    mySprite2.setStayInScreen(true)
}
scene.onHitWall(SpriteKind.Projectile, function (sprite2, location) {
    if (Ball.isHittingTile(CollisionDirection.Left)) {
        info.player2.changeScoreBy(1)
        Ball.setPosition(75, randint(0, 100))
    } else if (Ball.isHittingTile(CollisionDirection.Right)) {
        info.player1.changeScoreBy(1)
        Ball.setPosition(75, randint(0, 100))
        Ball.setPosition(75, 60)
    }
})
info.player1.onScore(3, function () {
    Faire_ball_2()
    if (Ball_2.isHittingTile(CollisionDirection.Left)) {
        info.player2.changeScoreBy(1)
        Ball_2.setPosition(75, randint(0, 100))
    } else if (Ball_2.isHittingTile(CollisionDirection.Right)) {
        info.player1.changeScoreBy(1)
        Ball_2.setPosition(75, randint(0, 100))
    }
})
let Ball_2: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let Ball: Sprite = null
info.player2.setScore(0)
info.player1.setScore(0)
Ball = sprites.create(img`
    . . . 1 1 1 1 . . . 
    . . 1 4 4 4 4 1 . . 
    . 1 4 4 4 4 4 4 1 . 
    1 4 4 1 4 4 1 4 4 1 
    1 4 4 4 4 4 4 4 4 1 
    1 4 1 4 4 4 4 1 4 1 
    1 4 4 1 1 1 1 4 4 1 
    . 1 4 4 4 4 4 4 1 . 
    . . 1 4 4 4 4 1 . . 
    . . . 1 1 1 1 . . . 
    `, SpriteKind.Projectile)
mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
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
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`niveau6`)
scene.setBackgroundColor(15)
Faire_my_spirite_1()
Faire_my_spirite_2()
Faire_balle()
effects.confetti.startScreenEffect()
game.showLongText("6 Point For Win", DialogLayout.Bottom)
game.showLongText("At 3 Point New Ball", DialogLayout.Top)
