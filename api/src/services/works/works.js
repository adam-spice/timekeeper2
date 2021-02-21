import { db } from 'src/lib/db'

export const works = () => {
  return db.work.findMany()
}

export const work = ({ id }) => {
  return db.work.findUnique({
    where: { id },
  })
}

export const createWork = ({ input }) => {
  return db.work.create({
    data: input,
  })
}

export const updateWork = ({ id, input }) => {
  return db.work.update({
    data: input,
    where: { id },
  })
}

export const deleteWork = ({ id }) => {
  return db.work.delete({
    where: { id },
  })
}

export const Work = {
  client: (_obj, { root }) =>
    db.work.findUnique({ where: { id: root.id } }).client(),
  project: (_obj, { root }) =>
    db.work.findUnique({ where: { id: root.id } }).project(),
}
