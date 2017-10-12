import {ok, type} from '../src'

test('should be defined', () => {
  expect(ok).toBeDefined()
})

test('should assert', () => {
  expect(ok(true)).toBe(true)
  expect(() => ok(false)).toThrow()
})

test('should assert type', () => {
  expect(type(8, 'number')).toBe(true)
  expect(type(() => {}, 'function')).toBe(true)
})
