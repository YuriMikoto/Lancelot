document.addEventListener("keydown", onKeyPress);

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
 * Handles the event of a mouse click.
 * @param {KeyboardEvent} e - Event handled by the method.
 */
function onKeyPress(e) {
	console.log(e);
}