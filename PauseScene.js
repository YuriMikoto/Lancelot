/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function PauseScene(title) {
	this.title = title;
}
PauseScene.prototype = new Scene();

/** 
 * Altered Render function. Draws a different colour and font style.
 */
PauseScene.prototype.render = function() {
	console.log("Paused");
}