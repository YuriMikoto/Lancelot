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
 * Altered Render function. Draws the buttons that a player can click to navigate.
 */
MenuScene.prototype.render = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	document.body.style.backgroundColor = "#EDC9AF";

	//Draw button backgrounds.
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
	ctx.fillText("Arcade", 255, 55);
	ctx.fillText("Versus", 255, 221);
	ctx.fillText("Options", 255, 388);
	ctx.fillText("Quit Game", 255, 555);
}

/**
 * Altered Click function. Detects where the click was.
 */
MenuScene.prototype.click = function(e) {
	console.log("Click detected on menu.");

	if (e.clientX >= 5 && e.clientX <= 505 &&
		e.clientY >= 5 && e.clientY <= 105) 
	{//Go to Game Scene.
		console.log("Initiate Arcade Mode");
	}

	else if (e.clientX >= 5 && e.clientX <= 505 &&
			 e.clientY >= 171 && e.clientY <= 271) 
	{//Go to Game Scene.
		console.log("Initiate Versus Mode");
	}

	else if (e.clientX >= 5 && e.clientX <= 505 &&
			 e.clientY >= 338 && e.clientY <= 438) 
	{//Go to Options Scene.
		sm.goToScene("Options");
	}

	else if (e.clientX >= 5 && e.clientX <= 505 &&
			 e.clientY >= 505 && e.clientY <= 605) 
	{//Close tab.
		window.close();
	}
}