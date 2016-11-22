/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function OptionsScene(title) {
	this.title = title;
	
	this.button1 = new Button(5, 5, 500, 100, "Mute BGM");
	this.button2 = new Button(5, 171, 500, 100, "Mute SFX");
	this.button3 = new Button(5, 338, 500, 100, "Resolution");
	this.button4 = new Button(5, 505, 500, 100, "Back");
}
OptionsScene.prototype = new Scene();

/** 
 * Altered Render function. Draws a different colour and font style.
 */
OptionsScene.prototype.render = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	document.body.style.backgroundColor = "#CCCCCC";

	this.button1.draw();
	this.button2.draw();
	this.button3.draw();
	this.button4.draw();

	/*//Draw button backgrounds.
	ctx.fillStyle = "#D2B4AC";
	ctx.fillRect(5, 5, 500, 100);
	ctx.fillRect(5, 171, 500, 100);
	ctx.fillRect(5, 338, 500, 100);
	ctx.fillRect(5, 505, 500, 100);

	//Draw button borders.
	ctx.fillStyle = "#80461B";
	ctx.strokeRect(5, 5, 500, 100);
	ctx.strokeRect(5, 171, 500, 100);
	ctx.strokeRect(5, 338, 500, 100);
	ctx.strokeRect(5, 505, 500, 100);

	ctx.font = "48pt Centaur";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	//Draw button text.
	ctx.fillText("Mute BGM", 255, 55);
	ctx.fillText("Mute SFX", 255, 221);
	ctx.fillText("Resolution", 255, 388);
	ctx.fillText("Back", 255, 555);*/
}

/**
 * Altered Click function. Detects where the click was.
 */
OptionsScene.prototype.click = function(e) {
	console.log("Click detected on menu.");

	if (this.button1.collision(e))
	{//Arcade button clicked.
		console.log("Music Mute");
	}
	else if (this.button2.collision(e))
	{//VS button clicked.
		console.log("Sound Mute");
	}
	else if (this.button3.collision(e))
	{//Options button clicked.
		console.log("Resolution Options");
	}
	else if (this.button4.collision(e))
	{//Quit button clicked.
		sm.goToScene("Menu");
	}
}