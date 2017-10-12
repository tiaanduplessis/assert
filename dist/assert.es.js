function getType (value) {
  var type = Object.prototype.toString.apply(value).slice(8, -1);
  return type.toLowerCase()
}

function ok (condition, message) {
  if ( message === void 0 ) message = '';

  if (!condition) {
    throw new Error(message | ((condition.toString()) + " assertion failed!"))
  }

  return true
}

function type (val, expected, message) {
  ok(val, 'Value is required');
  ok(
    expected && getType(expected) === 'string',
    'Expected result is a required string. Possible values are: array, object, string, date, regexp, function, boolean, number, null or undefined'
  );
  var result = getType(val);
  if (result !== expected.toLowerCase()) {
    throw new TypeError(
      message || ("Expected a " + expected + ", but got a " + result)
    )
  }

  return true
}

export { ok, type };
