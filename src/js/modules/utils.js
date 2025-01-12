const { format } = require('date-fns')

export const convertUnixToTime = (time) => {
    return format(new Date(time), 'HH:mm')
  }

  