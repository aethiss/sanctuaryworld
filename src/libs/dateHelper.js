const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export const dateToString = (date) => {
  const dateJs = new Date(date)
  return dateJs.toLocaleDateString("en-US", options)
}
