var drawBall = function (ball, color) {
	ctx.fillStyle = color;
	ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
	ctx.beginPath();
	ctx.arc(ball.x + ball.width / 2, ball.y + ball.height / 2, 10, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
};

var drawPlayer = function (player, color){
	ctx.fillStyle = color;
	ctx.fillRect(player.x, player.y, player.width, player.height);
};

var drawBlock = function (block_array, color){	
	for(var i = 0; i < block_array.length; i++){
		if(block_array[i].status){			
			ctx.fillStyle = color;
			ctx.fillRect(block_array[i].x, block_array[i].y, block_array[i].width, block_array[i].height);
		}
	}	
};

var drawGameOver = function(){
	ctx.font = "40px Arial";
	ctx.fillStyle = "#000066";
	ctx.fillText("GAME OVER ",canvas.width/2-120,canvas.height/2);
	ctx.fillText("Your score:"+score.score,canvas.width/2-120,canvas.height/2+50);
	ctx.fillText("Press A to play again",canvas.width/2-190,canvas.height/2+100);
};

var drawLevelComplete = function(){
	ctx.fillStyle = "#0099FF";
	ctx.font = "40px Arial";
	ctx.fillText("You WIN!",canvas.width/2-90,canvas.height/2);
	ctx.fillText("Your score:"+score.score,canvas.width/2-130,canvas.height/2+50);
	ctx.fillText("Press A to play again",canvas.width/2-190,canvas.height/2+100);	
};

var drawScore = function(score){
	ctx.fillStyle = "Black";
	ctx.font = "18px Arial";
	ctx.fillText("Score:" + score.score, score.x, score.y);
};

var drawGameStart = function(){
	ctx.font = "40px Arial";
	ctx.fillStyle = "#000066";
	ctx.fillText("Press P to play",canvas.width/2-140,canvas.height/2);
	ctx.fillText("Press Spacebar to pause",canvas.width/2-220,canvas.height/2+50);
	
};
