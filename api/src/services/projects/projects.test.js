import {
  projects,
  project,
  createProject,
  updateProject,
  deleteProject,
} from './projects'

describe('projects', () => {
  scenario('returns all projects', async (scenario) => {
    const result = await projects()

    expect(result.length).toEqual(Object.keys(scenario.project).length)
  })

  scenario('returns a single project', async (scenario) => {
    const result = await project({ id: scenario.project.one.id })

    expect(result).toEqual(scenario.project.one)
  })

  scenario('creates a project', async (scenario) => {
    const result = await createProject({
      input: {
        name: 'String',
        priorityId: 'scenario.project.two.priorityId',
        clientId: 'scenario.project.two.clientId',
        due: '2021-02-21T13:31:45Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.priorityId).toEqual('scenario.project.two.priorityId')
    expect(result.clientId).toEqual('scenario.project.two.clientId')
    expect(result.due).toEqual('2021-02-21T13:31:45Z')
  })

  scenario('updates a project', async (scenario) => {
    const original = await project({ id: scenario.project.one.id })
    const result = await updateProject({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a project', async (scenario) => {
    const original = await deleteProject({ id: scenario.project.one.id })
    const result = await project({ id: original.id })

    expect(result).toEqual(null)
  })
})
