function Button(x,y,width,height, name) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.name = name;
}

Button.prototype.collision= function(e) {
	//Compare to this.x, this.y, etc.
	return (e.clientX >= this.x && e.clientX <= (this.x + this.width) &&
		e.clientY >= this.y && e.clientY <= (this.y + this.height));
}

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