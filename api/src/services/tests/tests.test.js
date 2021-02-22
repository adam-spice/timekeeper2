import { tests, test, createTest, updateTest, deleteTest } from './tests'

describe('tests', () => {
  scenario('returns all tests', async (scenario) => {
    const result = await tests()

    expect(result.length).toEqual(Object.keys(scenario.test).length)
  })

  scenario('returns a single test', async (scenario) => {
    const result = await test({ id: scenario.test.one.id })

    expect(result).toEqual(scenario.test.one)
  })

  scenario('creates a test', async (scenario) => {
    const result = await createTest({
      input: { description: 'String' },
    })

    expect(result.description).toEqual('String')
  })

  scenario('updates a test', async (scenario) => {
    const original = await test({ id: scenario.test.one.id })
    const result = await updateTest({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a test', async (scenario) => {
    const original = await deleteTest({ id: scenario.test.one.id })
    const result = await test({ id: original.id })

    expect(result).toEqual(null)
  })
})
