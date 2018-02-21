import { compose, add } from 'ramda'

import { log } from '..'

describe(`log()`, () => {
  it(`it logs value  with prefix`, () => {
    const mock = jest.fn()

    const f = log(mock, `abc`)
    const result = f(1)

    expect(result).toEqual(1)
    expect(mock).toBeCalledWith(`abc:1`)
  })

  it(`it is curried`, () => {
    const mock = jest.fn()

    const f = log(mock)(`abc`)
    const result = f(1)

    expect(result).toEqual(1)
    expect(mock).toBeCalledWith(`abc:1`)
  })

  it(`works in compose`, () => {
    const mock = jest.fn()

    const f = log(mock)

    const result = compose(
      f(`D`),
      add(1),
      f(`C`),
      add(1),
      f(`B`),
      add(1),
      f(`A`)
    )(0)

    expect(result).toEqual(3)
    expect(mock.mock.calls).toEqual([[`A:0`], [`B:1`], [`C:2`], [`D:3`]])
  })
})
