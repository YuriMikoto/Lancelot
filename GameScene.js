/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function GameScene(title) {
	this.title = title;
}
GameScene.prototype = new Scene();

/** 
 * Altered Render function. Draws a different colour and font style.
 */
GameScene.prototype.render = function() {
	console.log("Play");
}

/**
 * Altered Click function. Detects where the click was.
 */
GameScene.prototype.click = function(e) {
	console.log("Click detected on game.");
}