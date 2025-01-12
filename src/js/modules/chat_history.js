import { convertUnixToTime } from './utils.js'
import { getChatHistory } from './api.js'
import {
  renderSystemMessage,
  createMessages
} from './chat_message.js'
import { updateScroll } from './ui.js'
import { isEmptyArray } from './validation.js'
import { LOG } from './config.js'

let paginatedData = []
let start = 0
let end = 20
let isSuccess = false

export const appendHistory = async () => {
  const response = await getChatHistory()
  const data = response.messages.reverse()
  const counter = 20

  const showList = () => {
    paginatedData = data.reverse().slice(start, end)
    paginatedData.map((messages) => parseDataChatHistory(messages))

    start += counter
    end += counter

    if (isEmptyArray(paginatedData) && !isSuccess) {
      renderSystemMessage(LOG.SYSTEM.STORY_IS_UPLOADED)
      isSuccess = true
    }

    if (start === counter) {
      updateScroll()
    }
  }

  showList()
}

const parseDataChatHistory = async (massages) => {
  const data = {
    user: massages.user.name,
    email: massages.user.email,
    text: massages.text,
    time: convertUnixToTime(massages.createdAt)
  }
  createMessages(data)
}
