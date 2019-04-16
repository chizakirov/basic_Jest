const functions = require('./functions');

test('Adds 2+2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
});

test('Adds 2+2 to not equal 5', () => {
  expect(functions.add(2,2)).not.toBe(5);
});

//Check for TRUTHY or FALSY VALUES
test('should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

//ToBe for primitive type like string or number, to working on Object (to be is comparing both value & type)
//ToEqual: compare for reference type like array or object (same looking but stored in different memory location). ToBe not working for reference type ( to equal compares only value)
test('user should be Chi Zakirov', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Chi',
    lastName: 'Zakirov'
  });
})

test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})

