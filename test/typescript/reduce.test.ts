import reduce from '../../typescript/reduce'
test('normal test', () => {
  const testFn = (x, y) => x + y
  const inputArr = [1, 2, 3]
  const expected = 6
  expect(reduce(testFn, inputArr)).toEqual(expected)
})
test('null', () => {
  const testFn = (x, y) => x + y
  const inputArr = null
  const expected = undefined
  expect(reduce(testFn, inputArr)).toBeFalsy()
})
