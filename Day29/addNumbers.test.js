const addNumbers = require('./addNumbers');

// Test case 1
test('adds 1 + 2 to equal 3', () => {
  expect(addNumbers(1, 2)).toBe(3);
});

// Test case 2
test('adds -1 + 1 to equal 0', () => {
  expect(addNumbers(-1, 1)).toBe(0);
});

// Test case 3
test('adds 0 + 0 to equal 0', () => {
  expect(addNumbers(0, 0)).toBe(0);
});
// we need to make sure we have Jest installed: npm install --save-dev jest
// Run : npx jest