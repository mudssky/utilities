import map from '../../typescript/map'

test('map', () => {
  const testFn = (x: number) => x * x
  const input = [1, 2, 3]
  const expected = [1, 4, 9]
  expect(map(testFn, input)).toEqual(expected)
})
test('null', () => {
  const testFn = (x: number) => x * x
  const input = null
  const expected = []
  expect(map(testFn, input)).toEqual(expected)
})
