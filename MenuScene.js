/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function MenuScene(title) {
	this.title = title;

<<<<<<< HEAD
	/*this.button1 = new Button(5, 5, 500, 100, "Arcade");
	this.button2 = new Button(5, 171, 500, 100, "[VS Unavailable]");
	this.button3 = new Button(5, 338, 500, 100, "Options");
	this.button4 = new Button(5, 505, 500, 100, "Quit Game");*/

	this.button1 = new Button(canvas.width * 0.6, canvas.height * 0.46, canvas.width * 0.3, canvas.height * 0.05, "Arcade");
	this.button2 = new Button(canvas.width * 0.6, canvas.height * 0.55, canvas.width * 0.3, canvas.height * 0.05, "[VS Locked]");
	this.button3 = new Button(canvas.width * 0.6, canvas.height * 0.65, canvas.width * 0.3, canvas.height * 0.05, "[Tutorial Locked]");
	this.button4 = new Button(canvas.width * 0.6, canvas.height * 0.73, canvas.width * 0.3, canvas.height * 0.05, "Options");
	this.button5 = new Button(canvas.width * 0.6, canvas.height * 0.81, canvas.width * 0.3, canvas.height * 0.05, "Quit Game");

	this.img = new Image();
	this.img.src = "menu.png";
	//this.img.src = document.getElementById("menu");
	
	
=======
	this.button1 = new Button(5, 5, 500, 100, "Arcade");
	this.button2 = new Button(5, 171, 500, 100, "VS");
	this.button3 = new Button(5, 338, 500, 100, "Options");
	this.button4 = new Button(5, 505, 500, 100, "Quit Game");
>>>>>>> 23b5bc2ccbe6dfb991d19e205d6dd38b1ec861b5
}
MenuScene.prototype = new Scene();

/** 
 * Altered Render function. Draws the buttons that a player can click to navigate.
 */
MenuScene.prototype.render = function() {
	//ctx.clearRect(0, 0, canvas.width, canvas.height);

	document.body.style.backgroundColor = "#EDC9AF";

<<<<<<< HEAD
	//this.button1.draw();
	//this.button2.draw();
	//this.button3.draw();
	//this.button4.draw();
	ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
	console.log(canvas.width + ", " + canvas.height);
=======
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
	ctx.fillText("Arcade", 255, 55);
	ctx.fillText("Versus", 255, 221);
	ctx.fillText("Options", 255, 388);
	ctx.fillText("Quit Game", 255, 555);*/
>>>>>>> 23b5bc2ccbe6dfb991d19e205d6dd38b1ec861b5
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
<<<<<<< HEAD
		console.log("Versus Mode Unavailable");
		//sm.goToScene("Game"); To be added later.
	}
	else if (this.button3.collision(e))
	{//Tutorial button clicked.
		console.log("Tutorial Mode Unavailable");
		//sm.goToScene("Game"); To be added later.
	}
	else if (this.button4.collision(e))
	{//Quit button clicked.
		sm.goToScene("Options");
	}
	else if (this.button5.collision(e))
=======
		console.log("Initiate Versus Mode");
		sm.goToScene("Game");
	}
	else if (this.button3.collision(e))
	{//Options button clicked.
		sm.goToScene("Options");
	}
	else if (this.button4.collision(e))
>>>>>>> 23b5bc2ccbe6dfb991d19e205d6dd38b1ec861b5
	{//Quit button clicked.
		window.close();
	}
}