var { rotateRover,
      currentDirection,
      compassCurrentIndex,
      posHor,
      posVert,
      rotateRoverRight,
      rotateRoverLeft,
      moveRoverUp,
      moveRoverDown,
      moveRoverLeft,
      moveRoverRight
    } = require('./rover')

beforeEach(() => {
  posHor = 0;
  posVert = 0;

  currentDirection = "N";
  compassCurrentIndex = 0;
});


test('moveRoverLeft should be defined', () => {
  expect(moveRoverLeft).toBeDefined()
});

test('moveRoverRight should be defined', () => {
  expect(moveRoverRight).toBeDefined()
});

test('moveRoverUp should be defined', () => {
  expect(moveRoverUp).toBeDefined()
});

test('moveRoverDown should be defined', () => {
  expect(moveRoverDown).toBeDefined()
});

test('moveRoverUp given vertical position 0', () => {
  expect(moveRoverUp()).toBe(1)
});

test('moveRoverDown given vertical position 0', () => {
  expect(moveRoverDown()).toBe(-1)
});

test('moveRoverLeft given horizontal position 0', () => {
  expect(moveRoverLeft()).toBe(-1)
});

test('moveRoverRight given horizontal position 0', () => {
  expect(moveRoverRight()).toBe(1)
});

test('rotateRoverLeft given direction North(N)', () => {
  expect(rotateRoverLeft()).toBe("W")
});
