import { format } from 'date-fns/esm'

export const formateDateForHtmlInput = (date) => {
  return format(new Date(date), 'yyy-MM-dd')
}


export const formatDateAsGBFormat = (date)=>{
  return new Intl.DateTimeFormat('en-GB').format(new Date(date))
}
