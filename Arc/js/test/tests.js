QUnit.test('hello test', function(assert) {
  assert.ok(1 == '1', 'Passed!');
})

QUnit.test("Create ball", function(assert) {
  assert.ok( null != ball, "Passed!" );
})


QUnit.test("Create game",function(assert){
	assert.ok( null !=game , "Done");
})

QUnit.test("Show score",function(assert){
	assert.ok( null !=score , "Passed");
})

QUnit.test("How many rows",function(assert){
	assert.ok( game.row == 3 , "All rows were created");
})

QUnit.test('Ball model should have proper state', function(assert) {// sprawdza czy pola sie dobrze zainicjalizowały
  const x = 1, y = 1, height = 1, width = 1, speed = 1;

  const ball = new Ball(x, y, height, width, speed);

  assert.ok(ball.x === x && ball.y === y 
    && ball.height === height && ball.width === width && ball.speed === speed, 'Passed');
})

QUnit.test('Player model should have proper state', function(assert) {
  const x = 1, y = 1, height = 1, width = 1, speed = 1;

  const player = new Player(x, y, height, width, speed);
  assert.ok(player.x === x && player.y === y 
    && player.height === height && player.width === width && player.speed === speed, 'Passed');
})

QUnit.test('Player movement function should change x', function(assert) {
  const x = 1, y = 1, height = 1, width = 1, speed = 1;

  const player = new Player(x, y, height, width, speed);

  const canvas = {width: 720, height: 480}; // mock for canvas object
  const keyboardEvent = {37: true}; // mock for left arrow event

  player.movement(keyboardEvent);

  assert.ok(player.x === x-speed, 'Passed');
})

QUnit.test('#1 Player movement function should not change x', function(assert) {
  const x = 0, y = 1, height = 1, width = 100, speed = 1;

  const player = new Player(x, y, height, width, speed);

  const canvas = {width: 720, height: 480};
  const keyboardEvent = {37: true};

  player.movement(keyboardEvent);

  assert.ok(player.x === x, 'Passed')
})

QUnit.test('#2 Player movement function should not change x', function(assert) {
  const x = 666, y = 1, height = 1, width = 100, speed = 1;

  const player = new Player(x, y, height, width, speed);

  const canvas = {width: 720, height: 480};
  const keyboardEvent = {39: true};

  player.movement(keyboardEvent);

  assert.ok(player.x === x, 'Passed') 
})