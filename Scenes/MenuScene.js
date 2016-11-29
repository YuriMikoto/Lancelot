/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function MenuScene(title) {
	this.title = title;

	this.button1 = new Button(5, 5, 500, 100, "Arcade");
	this.button2 = new Button(5, 171, 500, 100, "[VS Unavailable]");
	this.button3 = new Button(5, 338, 500, 100, "Options");
	this.button4 = new Button(5, 505, 500, 100, "Quit Game");
}
MenuScene.prototype = new Scene();

/** 
 * Altered Render function. Draws the buttons that a player can click to navigate.
 */
MenuScene.prototype.render = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	document.body.style.backgroundColor = "#EDC9AF";

	this.button1.draw();
	this.button2.draw();
	this.button3.draw();
	this.button4.draw();
}

/**
 * Altered Click function. Detects where the click was.
 */
MenuScene.prototype.click = function(e) {
	console.log("Click detected on menu.");

	if (this.button1.collision(e))
	{//Arcade button clicked.
		console.log("Initiate Arcade Mode");
		sm.goToScene("Game");
	}
	else if (this.button2.collision(e))
	{//VS button clicked.
		console.log("Versus Mode Unavailable");
		//sm.goToScene("Game"); To be added later.
	}
	else if (this.button3.collision(e))
	{//Options button clicked.
		sm.goToScene("Options");
	}
	else if (this.button4.collision(e))
	{//Quit button clicked.
		window.close();
	}
}