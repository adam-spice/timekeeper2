import { db } from 'src/lib/db'

export const priorities = () => {
  return db.priority.findMany()
}

export const priority = ({ id }) => {
  return db.priority.findUnique({
    where: { id },
  })
}

export const createPriority = ({ input }) => {
  return db.priority.create({
    data: input,
  })
}

export const updatePriority = ({ id, input }) => {
  return db.priority.update({
    data: input,
    where: { id },
  })
}

export const deletePriority = ({ id }) => {
  return db.priority.delete({
    where: { id },
  })
}

export const Priority = {
  projects: (_obj, { root }) =>
    db.priority.findUnique({ where: { id: root.id } }).projects(),
}
