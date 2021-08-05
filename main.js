var canvas = new fabric.Canvas('minecraft');

var player_y = 200;
var player_x = 200;

var block_size = 30

var music1 = new Audio('mc.mp3')

var player_obj = ""
var block_obj = ""

console.log(fabric);

function music() {
    music1.play();
}

function stop() {
    music1.pause();
}

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(IMG) {
        player_obj = IMG;
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);

        player_obj.set({
            top:player_y,
            left:player_x,
        });

        canvas.add(player_obj);
    });

}

function blockUpdate(get_image) {
    fabric.Image.fromURL(get_image, function(IMG){
        block_obj = IMG;
        block_obj.scaleToWidth(block_size);
        block_obj.scaleToHeight(block_size);

        block_obj.set({
            top:player_y,
            left:player_x,
        })

        canvas.add(player_obj);
    })

}

window.addEventListener('keydown', myKeydown);

function myKeydown(e) {
    console.log(e.keyCode);

    if (e.keyCode == 37) {
        player_x -= 10;
        console.log("Move Left")
        console.log("New Coords: " + player_x + ", " + player_y);

        canvas.remove(player_obj);
        playerUpdate();
        
    }  if (e.keyCode == 39) {
        player_x += 10;
        console.log("Move Right")
        console.log("New Coords: " + player_x + ", " + player_y);
        canvas.remove(player_obj);
        playerUpdate();
    }  if (e.keyCode == 38) {
        player_y -= 10;
        console.log("Move Up")
        console.log("New Coords: " + player_x + ", " + player_y);
        canvas.remove(player_obj);
        playerUpdate();
    }  if (e.keyCode == 40) {
        player_y += 10;
        console.log("Move Down")
        console.log("New Coords: " + player_x + ", " + player_y);
        canvas.remove(player_obj);
        playerUpdate();
    }  if (e.keyCode == 71) {
        blockUpdate("grass.png");
        console.log("Grass Block");
    }  if (e.keyCode == 68) {
        blockUpdate('dirt.jpg');
        console.log("Dirt Block");
    }
     if (e.keyCode == 66) {
        blockUpdate('wall.jpg');
        console.log("Bricks");
    }  if (e.keyCode == 70) {
        blockUpdate('furnace.png');
        console.log("Furnace");
    }  if (e.keyCode == 67) {
        blockUpdate('workbench.png');
        console.log("Crafting Table");
    }
}