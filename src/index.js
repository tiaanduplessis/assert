function getType (value) {
  const type = Object.prototype.toString.apply(value).slice(8, -1)
  return type.toLowerCase()
}

export function ok (condition, message = '') {
  if (!condition) {
    throw new Error(message | `${condition.toString()} assertion failed!`)
  }

  return true
}

export function type (val, expected, message) {
  ok(val, 'Value is required')
  ok(
    expected && getType(expected) === 'string',
    'Expected result is a required string. Possible values are: array, object, string, date, regexp, function, boolean, number, null or undefined'
  )
  const result = getType(val)
  if (result !== expected.toLowerCase()) {
    throw new TypeError(
      message || `Expected a ${expected}, but got a ${result}`
    )
  }

  return true
}
