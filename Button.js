/**
 * Creates the button object. Currently a rectangle, but will later be updated to use images instead.
 * @param {int} x - X coordinate of the top-left of the rectangle.
 * @param {int} y - Y coordinate of the top-left of the rectangle.
 * @param {int} width - X-axis length in pixels.
 * @param {int} height - Y-axis length in pixels.
 * @param {string} name - Name of the button, used to determine what should be written on it.
 */
function Button(x, y, width, height, name) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.name = name;
}

/**
 * Checks to see if a given mouse-click event is on top of the button.
 */
Button.prototype.collision= function(e) {
	//Compare to this.x, this.y, etc.
	return (e.clientX >= this.x && e.clientX <= (this.x + this.width) &&
		e.clientY >= this.y && e.clientY <= (this.y + this.height));
}

/**
 * Draws the button using given parameters.
 */
Button.prototype.draw = function() {
	//Later, change this to handle images instead of draw rectangles.

	ctx.fillStyle = "#D2B4AC";
	ctx.fillRect(this.x,this.y,this.width,this.height);
	ctx.fillStyle = "#80461B";
	ctx.strokeRect(this.x,this.y,this.width,this.height);
	ctx.font = "48pt Centaur";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	//Draw button text.
	ctx.fillText(this.name, this.x + (this.width / 2), this.y + (this.height / 2));
}