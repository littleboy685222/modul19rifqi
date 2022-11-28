const functions = require('./functions');
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });

  test('User is Admin', () => {
    const user = 'Admin';
    expect(user).toBe('Admin');
  });
});

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 5 + 9 to equal 14', () => {
  expect(functions.add(5, 9)).toBe(14);
});
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Adds 9 + 8 to NOT equal 15', () => {
  expect(functions.add(9, 8)).not.toBe(15);
});
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  });
});
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('Should be under 1600', () => {
  const load1 = 700;
  const load2 = 900;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});


test('There is no I in team', () => {
  expect('team').not.toMatch('/I/i');
});

test('There is no J in team', () => {
  expect('team').not.toMatch('/J/j');
});

test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

test('UI should be in usernames', () => {
  usernames = ['john', 'karen', 'ui'];
  expect(usernames).toContain('ui');

});
