import { format } from 'date-fns/esm'

export const formateDateForHtmlInput = (date) => {
  return format(new Date(date), 'yyy-MM-dd')
}
