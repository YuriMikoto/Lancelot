/** 
 * Draws the required objects of the scene on screen.
 */
Scene.prototype.render = function() {
	
}

/**
 * Handles mouse clicks in a scene-specific way.
 */
Scene.prototype.click = function() {

}

/** 
 * Scene.
 * @constructor
 * @param {string} title - The title of the scene, such as "Title", "Menu", "Game" or "Game Over".
 */
function Scene(title) {
	this.title = title;
}