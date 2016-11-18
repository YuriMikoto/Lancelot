/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function OptionsScene(title) {
	this.title = title;
}
OptionsScene.prototype = new Scene();

/** 
 * Altered Render function. Draws a different colour and font style.
 */
OptionsScene.prototype.render = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	document.body.style.backgroundColor = "#CCCCCC";

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
	ctx.fillText("Mute BGM", 255, 55);
	ctx.fillText("Mute SFX", 255, 221);
	ctx.fillText("Resolution", 255, 388);
	ctx.fillText("Back", 255, 555);
}

/**
 * Altered Click function. Detects where the click was.
 */
OptionsScene.prototype.click = function(e) {
	if (e.clientX >= 5 && e.clientX <= 505 &&
		e.clientY >= 5 && e.clientY <= 105) 
	{//Go to Game Scene.
		console.log("Mute Music");
	}

	else if (e.clientX >= 5 && e.clientX <= 505 &&
			 e.clientY >= 171 && e.clientY <= 271) 
	{//Go to Game Scene.
		console.log("Mute Sound");
	}

	else if (e.clientX >= 5 && e.clientX <= 505 &&
			 e.clientY >= 338 && e.clientY <= 438) 
	{//Go to Options Scene.
		console.log("Resolution Change");
	}

	else if (e.clientX >= 5 && e.clientX <= 505 &&
			 e.clientY >= 505 && e.clientY <= 605) 
	{//Close tab.
		sm.goToScene("Menu");
	}
}