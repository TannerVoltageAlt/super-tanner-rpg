let mySprite = sprites.create(assets.image`playerSprite`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level2`)
