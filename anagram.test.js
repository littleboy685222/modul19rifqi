const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"dessert" is an anagram of "stressed"', () => {
  expect(isAnagram('dessert', 'stressed')).toBeFalsy();
  
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});

test('"Indonesia" is NOT an anagram of "Malaysia"', () => {
  expect(isAnagram('Indonesia', 'Malaysia')).toBeFalsy();
});

test('"Soccer" is NOT an anagram of "Tennis"', () => {
  expect(isAnagram('Soccer', 'Tennis')).toBeFalsy();
});
