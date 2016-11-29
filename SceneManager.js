var scenes = {};

/**
 * Adds a scene to the manager.
 * @param {Scene} scene - The scene object that you wish to add.
 */
SceneManager.prototype.addScene = function(scene) {
	scenes[scene.title] = scene;
	console.log(scenes);
}

/**
 * Immediately transfers to the indicated scene.
 * @param {string} title - Used to check for the existence of the listed scene.
 */
 SceneManager.prototype.goToScene = function(title) {
 	this.currentScene = scenes[title];
 	this.currentScene.render();
 	console.log(this.currentScene.title);
 }

/**
 * Returns a reference to the current scene.
 */
 SceneManager.prototype.getScene = function() {
 	return this.currentScene;
 }

/**
 * Manages the advancement of scenes.
 * @constructor
 */
function SceneManager() {
	this.currentScene = {};
}