var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

document.addEventListener("mousedown", onMouseClick);
document.addEventListener("keydown", onKeyPress);

var sceneManager;

function main() {
	var game = new Game();

	document.body.appendChild(canvas);
	canvas.height = 720;
	canvas.width = 1280;

	sm = new SceneManager();
	sm.addScene(new MenuScene("Menu"));
	sm.addScene(new GameScene("Game"));
	sm.addScene(new PauseScene("Pause"));
	sm.addScene(new OptionsScene("Options"));
	console.log("Scenes Added");

	sm.goToScene("Menu");
}

/**
 * Handles the event of a mouse click.
 * @param {MouseEvent} e - Event handled by the method.
 */
function onMouseClick(e) {
	console.log(e);
	sm.getScene().click(e);
}

/**
 * Handles the event of a mouse click.
 * @param {KeyboardEvent} e - Event handled by the method.
 */
function onKeyPress(e) {
	console.log(e);
}