var Game = function(ball, player, score,row){
	this.ball = ball;
	this.player = player;
	this.score = score;
	var start = false;
	var pause = false;
	var lose =	false;
	var levelComplete = false;
	var keyboard = {};
	var blocks = new Array();
	this.row = row;//ilosc 

	var generateBlocks = function(blocks){
		var insertX = 10;//odstep od krawedzi
		var columns = 20 * row;//ilosc wierszy 
		var insertY = canvas.height -420; //gdzie sie znajduja na planszy
		var distance = 35;
		var max = 700;

		blocks.push(new Block(insertX, insertY, 15, 30));	
		for(var count = 1; count < columns; count ++){					
			insertX += distance;
			if(insertX >= max){
				insertY += 20;
				insertX = 10;
				blocks.push(new Block(insertX, insertY, 15, 30));
			}else {
				blocks.push(new Block(insertX, insertY, 15, 30));			
	   		} 		
		}
	};	

	var stageClear = function(){
		console.log(blocks);
		if(blocks.length == 0){
			levelComplete = true;
			return
		}
		else{

		}		
	};
	eventKeyboard(keyboard);
	generateBlocks(blocks);

	var init = function(){
		drawBlock(blocks, "#0095DD");
		drawBall(this.ball, "gray");
		drawPlayer(this.player, "#0095DD");
		drawScore(this.score);
	};

	var startBall = function(keyboard) {
		if(80 in keyboard && !start){
			start = true;
			this.ball.x = this.player.x + 45;
			this.player.movement(keyboard);
		}
	};

	var pauseGame = function(keyboard) {
		if(32 in keyboard && start && !pause){//space
			pause = true;
		} 
	};

	var restartGame = function(keyboard){
		if(66 in keyboard && start && pause){//space
			pause = false;
		}
	};

	var gameOver = function(){
		if(this.ball.y > 480){
			lose = true;
			return lose;
		}		
	};	
	var gameAgain = function(){
		if((65 in keyboard)&& (lose == true || levelComplete)){
			window.location.reload();
		}		
	};

	this.play = function(){
		init();	
		ctx.clearRect(0, 0, canvas.width, canvas.height);		
		if(!start){
				
			ctx.fillStyle = "#0099FF";
			ctx.font = "80px Tahoma";
			ctx.fillText("ARCANOID",canvas.width/2-200,canvas.height/2-80);
			startBall(keyboard);
			drawGameStart();
		}else if(start && !pause && !lose && !levelComplete){
			var update = this.ball.moviment(this.player);
			var updatePlayer = this.player.movement(keyboard);
			this.ball.blockColision(blocks);
			this.score.incrementScore(blocks);
			drawBlock(blocks, "#0095DD");
			drawBall(this.ball, "gray");
			drawPlayer(this.player, "#0095DD");
			drawScore(this.score);
			stageClear();
			restartGame(keyboard);
			pauseGame(keyboard);
			gameOver();
			return 0;
		}else if(start && pause && !lose && !levelComplete){
			drawBlock(blocks, "#0095DD");
			drawBall(this.ball, "gray");
			drawPlayer(this.player, "#0095DD");
			drawScore(this.score);
			restartGame(keyboard);
			pauseGame(keyboard);
			ctx.fillText("PAUSE",canvas.width/2-30,canvas.height/2);
			ctx.fillText("Press B to resume",canvas.width/2-80,canvas.height/2+20);
		}else if(lose && !levelComplete){
			gameOver();
			drawGameOver();
			drawBlock(blocks, "#0095DD");
			drawBall(this.ball, "gray");
			drawPlayer(this.player, "#0095DD");
			drawScore(this.score);
			gameAgain();
		}else if(levelComplete){
			gameAgain();
			drawLevelComplete();
			drawBall(this.ball, "gray");
			drawPlayer(this.player, "#0095DD");
			drawScore(this.score);
			
		}
		
	};
};