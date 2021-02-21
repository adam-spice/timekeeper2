import {
  priorities,
  priority,
  createPriority,
  updatePriority,
  deletePriority,
} from './priorities'

describe('priorities', () => {
  scenario('returns all priorities', async (scenario) => {
    const result = await priorities()

    expect(result.length).toEqual(Object.keys(scenario.priority).length)
  })

  scenario('returns a single priority', async (scenario) => {
    const result = await priority({ id: scenario.priority.one.id })

    expect(result).toEqual(scenario.priority.one)
  })

  scenario('creates a priority', async (scenario) => {
    const result = await createPriority({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a priority', async (scenario) => {
    const original = await priority({ id: scenario.priority.one.id })
    const result = await updatePriority({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a priority', async (scenario) => {
    const original = await deletePriority({ id: scenario.priority.one.id })
    const result = await priority({ id: original.id })

    expect(result).toEqual(null)
  })
})
