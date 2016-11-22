setInterval(update, 420); // 42 milliseconds = ~ 24 frames per sec

/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function GameScene(title) {
	this.title = title;
	
	this.flicker = 0;
}
GameScene.prototype = new Scene();

/** 
 * Altered Render function. Draws a different colour and font style.
 */
GameScene.prototype.render = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	console.log("Play");
}

function update() {
	if (sm.getScene().title === "Game")
	{
    	if (flicker == 1)
    	{
    		document.body.style.background = '#ADD8E6';
    		flicker = 0;
    	} 
    	else
    	{
    		document.body.style.background = '#b698ff';
    		flicker = 1;
    	}
	+}
}

/**
 * Altered Click function. Detects where the click was.
 */
GameScene.prototype.click = function(e) {
	console.log("Click detected on game.");
}