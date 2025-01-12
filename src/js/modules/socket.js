import { cookie } from './storage.js'
import { UI_ELEMENTS } from './ui.js'
import { COLOR } from './config.js'
import { WEB_SOCKET } from './config.js'

export const socket = new WebSocket(`${WEB_SOCKET}${cookie.getToken()}`)

socket.onopen = () => {
  isOnline()
}

socket.onmessage = function (event) {
  const data = event.data
  console.log(data)
}

socket.onclose = () => isOnline()

export const updateWebSocket = (message) => {
  socket.send(JSON.stringify({ text: message }))
}

export const isOnline = () => {
  const statusConnection = UI_ELEMENTS.STATUS.CONNECTION

  switch (socket.readyState) {
    case WebSocket.CONNECTING:
      statusConnection.style.backgroundColor = COLOR.GREY
      break

    case WebSocket.OPEN:
      statusConnection.style.backgroundColor = COLOR.GREEN
      break

    case WebSocket.CLOSED:
      statusConnection.style.backgroundColor = COLOR.RED
      break
  }
}
