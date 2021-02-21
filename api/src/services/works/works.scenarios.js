export const standard = defineScenario({
  work: {
    one: {
      description: 'String',
      date: '2021-02-20T12:51:11Z',
      hoursWorked: 3258745,
      client: { create: { name: 'String', location: 'String' } },
      project: {
        create: {
          name: 'String',
          client: { create: { name: 'String', location: 'String' } },
        },
      },
    },

    two: {
      description: 'String',
      date: '2021-02-20T12:51:11Z',
      hoursWorked: 965847,
      client: { create: { name: 'String', location: 'String' } },
      project: {
        create: {
          name: 'String',
          client: { create: { name: 'String', location: 'String' } },
        },
      },
    },
  },
})
