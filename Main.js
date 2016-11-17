var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");


var sceneManager;

function main() {
	var game = new Game();

	document.body.appendChild(canvas);
	canvas.height = 720;
	canvas.width = 1280

	sm = new SceneManager();
	sm.addScene(new MenuScene("Menu"));
	sm.addScene(new GameScene("Game"));
	sm.addScene(new PauseScene("Pause"));
	console.log("Scenes Added");

	sm.goToScene("Menu");
}



