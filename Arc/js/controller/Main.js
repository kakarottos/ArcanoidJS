var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var ball = new Ball(canvas.width / 2 -5, canvas.height - 35, 7, 7, 2);
var player = new Player(canvas.width / 2 - 50, canvas.height - 20, 10, 100, 5);
var score = new Score(10, 25, 0);

var game = new Game(ball, player, score, 3);

setInterval(game.play, 10);