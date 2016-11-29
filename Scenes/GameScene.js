setInterval(update, 420); // 42 milliseconds = ~ 24 frames per sec

/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function GameScene(title) {
	this.title = title;

	this.p1 = new Player();
	this.p2 = new Player();
}
GameScene.prototype = new Scene();

function update() {
	if (sm.getScene().title === "Game")
	{//Only runs when in the game scene. Without this, the following code would run even on the menu.
    	sm.currentScene.render(); //Bit of a roundabout way of doing things, but whatever. I'll probably improve this somehow later.
	}
}

/** 
 * Altered Render function. Draws a different colour and font style.
 */
GameScene.prototype.render = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	console.log("Play");

	p1.draw();
	p2.draw();	
}



/**
 * Altered Click function. Detects where the click was.
 */
GameScene.prototype.click = function(e) {
	console.log("Click detected on game.");
}