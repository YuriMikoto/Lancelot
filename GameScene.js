setInterval(update, 42); // 42 milliseconds = ~ 24 frames per sec

/** 
 * Inherits from Scene.
 * @constructor
 * @param {string} title - Title of the scene, used to identify it.
 */
function GameScene(title) {
	this.title = title;

	this.p1 = new Player(1);
	this.p2 = new Player(2);

	this.speedUpButton = new Button(5, 5, 100, 100, "^");
	this.speedDownButton = new Button(5, 105, 100, 100, "v");
	this.lightAttackButton = new Button(850, 105, 100, 100, "Wk");
	this.medAttackButton = new Button(850, 5, 100, 100, "Med");
	this.heavyAttackButton = new Button(950, 5, 100, 100, "Hvy");
	this.defendButton = new Button(950, 105, 100, 100, "Grd");
}
GameScene.prototype = new Scene();

/**
 * Admittedly strange Update function that calls Render. I've tried many ways of doing this, but this one doesn't break things, so...
 */
function update() {
	if (sm.getScene().title === "Game")
	{
		sm.currentScene.render(); //Bit of a roundabout way of doing things, but whatever. I'll probably improve this somehow later.
		console.log("Updating");
	}
	
}

/** 
 * Altered Render function. Draws a different colour and font style.
 */
GameScene.prototype.render = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (this.p1.isStopped() && this.p2.isStopped())
	{
		this.p1.getMoving();
		this.p2.getMoving();
	}

	if (!this.p1.isStopped())
	{//Unless both players are ready to move, neither can move.
		this.p1.move(); //Because for some reason, if I put this in Update, it's undefined. I don't fuggin' know.
	}
	
	if (!this.p2.isStopped())
	{//Unless both players are ready to move, neither can move.
		this.p2.move(); //Because for some reason, if I put this in Update, it's undefined. I don't fuggin' know.
	}

	if (this.p1.curAttacking)
	{
		this.collision(this.p1, this.p2);
	}

	if (this.p2.curAttacking)
	{
		this.collision(this.p2, this.p1);
	}

	this.p1.draw();
	this.p2.draw();	

	this.speedUpButton.draw();
	this.speedDownButton.draw();
	this.lightAttackButton.draw();
	this.medAttackButton.draw();
	this.heavyAttackButton.draw();
	this.defendButton.draw();

	//this.update();
}

/** 
 * Used when a player is currently attacking to determine if their attack hits.
 */
GameScene.prototype.collision = function(attacker, defender) {
	if (attacker.dir === 1)
	{
		if (attacker.atkType === 1)
		{
			if (defender.x < attacker.x + 140 && defender.x > attacker.x + 100)
			{
				var damage = 20;
				if (defender.isGuarding())
				{
					damage = damage / 2;
				}
				defender.life = defender.life - damage;
				console.log(defender.life);
				if (attacker.id === 1)
				{
					this.p1.curAttacking = false;
				}
				else
				{
					this.p2.curAttacking = false;
				}
			}
		}

		else if (attacker.atkType === 2)
		{
			if (defender.x < attacker.x + 180 && defender.x > attacker.x + 100)
			{
				var damage = 50;
				if (defender.isGuarding())
				{
					damage = damage / 2;
				}
				defender.life = defender.life - damage;
				console.log(defender.life);
				if (attacker.id === 1)
				{
					this.p1.curAttacking = false;
				}
				else
				{
					this.p2.curAttacking = false;
				}
			}
		}

		else if (attacker.atkType === 3)
		{
			if (defender.x < attacker.x + 260 && defender.x > attacker.x + 100)
			{
				var damage = 75;
				if (defender.isGuarding())
				{
					damage = damage / 2;
				}
				defender.life = defender.life - damage;
				console.log(defender.life);
				if (attacker.id === 1)
				{
					this.p1.curAttacking = false;
				}
				else
				{
					this.p2.curAttacking = false;
				}
			}
		}
		
	}

	else if (attacker.dir === 2)
	{
		if (attacker.atkType === 1)
		{
			if (defender.x < attacker.x && defender.x > attacker.x - 40)
			{
				var damage = 20;
				if (defender.isGuarding())
				{
					damage = damage / 2;
				}
				defender.life = defender.life - damage;
				console.log(defender.life);
				if (attacker.id === 1)
				{
					this.p1.curAttacking = false;
				}
				else
				{
					this.p2.curAttacking = false;
				}
			}
		}

		else if (attacker.atkType === 2)
		{
			if (defender.x < attacker.x && defender.x > attacker.x - 80)
			{
				var damage = 50;
				if (defender.isGuarding())
				{
					damage = damage / 2;
				}
				defender.life = defender.life - damage;
				console.log(defender.life);
				if (attacker.id === 1)
				{
					this.p1.curAttacking = false;
				}
				else
				{
					this.p2.curAttacking = false;
				}
			}
		}

		else if (attacker.atkType === 3)
		{
			if (defender.x < attacker.x && defender.x > attacker.x - 160)
			{
				var damage = 75;
				if (defender.isGuarding())
				{
					damage = damage / 2;
				}
				defender.life = defender.life - damage;
				console.log(defender.life);
				if (attacker.id === 1)
				{
					this.p1.curAttacking = false;
				}
				else
				{
					this.p2.curAttacking = false;
				}
			}
		}
	}
}

/**
 * Altered Click function. Detects where the click was and handles collision with buttons.
 */
GameScene.prototype.click = function(e) {
	console.log("Click detected on game.");

	if (e.button === 2)
	{//Right click to have the opponent guard.
		this.p2.guard();
		console.log("P2: Guard");
	}
	else if (this.speedUpButton.collision(e))
	{//Speed Up clicked.
		this.p1.changeSpeed("up");
	}
	else if (this.speedDownButton.collision(e))
	{//Slow Down clicked.
		this.p1.changeSpeed("down");
	}
	
	if (this.lightAttackButton.collision(e))
	{//Light Attack clicked.
		//To do.
		this.p1.attack(1);
	}
	else if (this.medAttackButton.collision(e))
	{//Medium Attack clicked.
		//To do.
		this.p1.attack(2);
	}
	else if (this.heavyAttackButton.collision(e))
	{//Heavy Attack clicked.
		//To do.
		this.p1.attack(3);
	}
	else if (this.defendButton.collision(e))
	{//Guard clicked.
		this.p1.guard();
	}
}
