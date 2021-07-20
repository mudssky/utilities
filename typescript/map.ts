/**
 *
 * @param category - Array
 * @param array - input Array<T>
 * @param iteratee function deal with single T variables from array
 * @returns - outpur new Array<T>
 */
function map<T>(
  iteratee: (arg0: T, arg1: number, arg2: T[]) => T,
  array: Array<T>
): Array<T> {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array(length)
  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

export default map
