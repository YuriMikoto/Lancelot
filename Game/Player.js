/**
 * Class for the player characters. Holds data on the player such as HP and Speed.
 * @constructor
 */
function Player(playerID) {
	//Saves the player's ID number (i.e. Player 1/Player 2).
	this.id = playerID;
	//ID determines initial direction. This will be swapped between runs, but ID will not.
	this.dir = playerID;

	if (this.id === 0) //If Player 1
	{
		this.x = 0;
		this.y = 50;
	}
	else //playerID === 1 - Player 2
	{
		this.x = 100;
		this.y = 50;
	}

	this.speed = 15;
	this.life = 100;
}

/**
 * Player object automatically moves towards the other side of the screen.
 */
Player.prototype.move = function() {
	//To be completed.
}

/** 
 * Draws the player character on the screen.
 */
Player.prototype.draw = function() {
	
}

Player.prototype.getHealth = function() {
	return this.life;
}