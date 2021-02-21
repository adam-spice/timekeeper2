import {
  clients,
  client,
  createClient,
  updateClient,
  deleteClient,
} from './clients'

describe('clients', () => {
  scenario('returns all clients', async (scenario) => {
    const result = await clients()

    expect(result.length).toEqual(Object.keys(scenario.client).length)
  })

  scenario('returns a single client', async (scenario) => {
    const result = await client({ id: scenario.client.one.id })

    expect(result).toEqual(scenario.client.one)
  })

  scenario('creates a client', async (scenario) => {
    const result = await createClient({
      input: { name: 'String', location: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.location).toEqual('String')
  })

  scenario('updates a client', async (scenario) => {
    const original = await client({ id: scenario.client.one.id })
    const result = await updateClient({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a client', async (scenario) => {
    const original = await deleteClient({ id: scenario.client.one.id })
    const result = await client({ id: original.id })

    expect(result).toEqual(null)
  })
})
