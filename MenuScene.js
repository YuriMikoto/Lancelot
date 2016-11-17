
document.addEventListener("mousedown", onMouseClick);

/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function MenuScene(title) {
	this.title = title;
}
MenuScene.prototype = new Scene();

/** 
 * Altered Render function. Draws a different colour and font style.
 */
MenuScene.prototype.render = function() {
	console.log("Main Menu");
}

/**
 * Handles the event of a mouse click.
 * @param {MouseEvent} e - Event handled by the method.
 */
function onMouseClick(e) {
	console.log(e);
	
}