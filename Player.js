/**
 * Class for the player characters. Holds data on the player such as HP and Speed.
 * @constructor
 */
function Player(playerID) {
	//Saves the player's ID number (i.e. Player 1/Player 2).
	this.id = playerID;
	//ID determines initial direction. This will be swapped between runs, but ID will not.
	this.dir = playerID;

	this.curAttacking = false; //used to see if the player is attacking for the collision detection
	this.curGuarding = false; //Used to see if the player is guarding for the collision detection.

	if (playerID === 1) //If Player 1
	{
		this.x = window.innerWidth * 0.2;
		this.y = 485;
		console.log(playerID);
	}
	if (playerID === 2)// - Player 2
	{
		this.x = window.innerWidth * 0.8;
		this.y = 515;
		console.log(playerID);
	}

	this.speed = 20;
	this.life = 100;
	this.atkTimer = 0; //used for the delay before attacks
	this.atkType = 0; //used to know which attack to use
	this.defTimer = 0; //Used to determine how long the player can defend for.
	this.roundEnd = false; //Used to determine when a player has stopped, so they re-run simultaneously.
	
}

/**
 * Player object automatically moves towards the other side of the screen.
 */
Player.prototype.move = function() {
	//To be completed.
	if (this.dir === 1)
	{//Moving right.
		this.x = this.x + this.speed;
		if (this.x > window.innerWidth * 0.8)
		{
			this.x = window.innerWidth * 0.8;
			this.dir = 2;
			this.speed = 20;
			this.roundEnd = true;
		}
	}
	else if (this.dir === 2)
	{//Moving left.
		this.x = this.x - this.speed;
		if (this.x < window.innerWidth * 0.2)
		{
			this.x = window.innerWidth * 0.2;
			this.dir = 1;
			this.speed = 20;
			this.roundEnd = true;
		}
	}

	if (this.atkTimer > 0) //while 0 this is inert
	{
		this.atkTimer--;
	}
	if (this.atkTimer <= 6 && this.atkTimer > 0)
	{
		this.atkDraw();
	}
	if (this.atkTimer === 0)
	{
		this.curAttacking = false;
	}

	if (this.defTimer > 0)
	{
		this.defTimer--;
	}
	if (this.defTimer === 0)
	{
		this.curGuarding = false;
	}
}

Player.prototype.isStopped = function() {
	return this.roundEnd;
}

Player.prototype.getMoving = function() {
	this.roundEnd = false;
}

/** 
 * Draws the player character on the screen.
 */
Player.prototype.draw = function() {
	ctx.fillRect(this.x, this.y, 100, 20);
}

/**
 * Returns the value of the player's health. Used to draw it on screen.
 */
Player.prototype.getHealth = function() {
	return this.life;
}

/**
 * Begins the player attack when called. Sets a timer based on which atk
 * @param {byte} - takes number 1 2 or 3, determines which attack to use
 */
Player.prototype.attack = function(atk) {
	this.atkType = atk;
	if (atk === 1)
	{
		this.atkTimer = 7; //just over 1ms charge time
		this.curAttacking = true;
	}
	else if (atk === 2)
	{
		this.atkTimer = 12; //just over 1ms charge time
		this.curAttacking = true;
	}
	else if (atk === 3)
	{
		this.atkTimer = 18; //just over 1ms charge time
		this.curAttacking = true;
	}
}

Player.prototype.guard = function() {
	this.defTimer = 10;
	this.curGuarding = true;
}

Player.prototype.isGuarding = function() {
	return this.curGuarding;
}

/** 
 * Draws the player character on the screen.
 */
Player.prototype.atkDraw = function() {
	
	if (this.dir === 1)
	{
		if (this.atkType === 1)
		{
			ctx.fillRect(this.x + 100, this.y, 40, 20);
		}
		if (this.atkType === 2)
		{
			ctx.fillRect(this.x + 100, this.y, 80, 20);
		}
		if (this.atkType === 3)
		{
			ctx.fillRect(this.x + 100, this.y, 160, 20);
		}
	}
	else if (this.dir === 2)
	{
		if (this.atkType === 1)
		{
			ctx.fillRect(this.x - 40, this.y, 40, 20);
		}
		if (this.atkType === 2)
		{
			ctx.fillRect(this.x - 80, this.y, 80, 20);
		}
		if (this.atkType === 3)
		{
			ctx.fillRect(this.x - 160, this.y, 160, 20);
		}
	}
}

/**
 * Changes the player's movement speed. Used when a move button is pressed.
 * @param {string} dir - Either "up" or "down", determines which button exactly was pressed.
 */
Player.prototype.changeSpeed = function(dir) {
	if (dir === "up" && this.speed < 50)
	{//When accelerating, cannot speed up above a Speed rating of 50.
		this.speed = this.speed + 15;
	}
	else if (dir === "down" && this.speed > 5)
	{//When slowing, cannot slow below a Speed rating of 5.
		this.speed = this.speed - 15;
	}
	//Otherwise, nothing happens; it's at the bounds of min/max speed.
}
