import { works, work, createWork, updateWork, deleteWork } from './works'

describe('works', () => {
  scenario('returns all works', async (scenario) => {
    const result = await works()

    expect(result.length).toEqual(Object.keys(scenario.work).length)
  })

  scenario('returns a single work', async (scenario) => {
    const result = await work({ id: scenario.work.one.id })

    expect(result).toEqual(scenario.work.one)
  })

  scenario('creates a work', async (scenario) => {
    const result = await createWork({
      input: {
        description: 'String',
        date: '2021-02-20T12:51:10Z',
        hoursWorked: 7305248,
        clientId: 'scenario.work.two.clientId',
        projectId: 'scenario.work.two.projectId',
      },
    })

    expect(result.description).toEqual('String')
    expect(result.date).toEqual('2021-02-20T12:51:10Z')
    expect(result.hoursWorked).toEqual(7305248)
    expect(result.clientId).toEqual('scenario.work.two.clientId')
    expect(result.projectId).toEqual('scenario.work.two.projectId')
  })

  scenario('updates a work', async (scenario) => {
    const original = await work({ id: scenario.work.one.id })
    const result = await updateWork({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a work', async (scenario) => {
    const original = await deleteWork({ id: scenario.work.one.id })
    const result = await work({ id: original.id })

    expect(result).toEqual(null)
  })
})
