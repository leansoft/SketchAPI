/* globals expect, test */

import { Style } from '../Style'

test('should change the opacity', () => {
  const style = new Style()
  expect(style.opacity).toBe(1)
  style.opacity = 0.5
  expect(style.opacity).toBe(0.5)

  style.opacity = 2
  expect(style.opacity).toBe(1)

  style.opacity = -1
  expect(style.opacity).toBe(0)
})

test('should change the blending mode', () => {
  const style = new Style()
  expect(style.blendingMode).toBe(Style.BlendingMode.Normal)
  style.blendingMode = Style.BlendingMode.Multiply
  expect(style.blendingMode).toBe('Multiply')
})

test('default style should not have any fills', () => {
  // setting the fills after creation
  const style = new Style()
  expect(style.sketchObject.fills().count()).toBe(0)
})
