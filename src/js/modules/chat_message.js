import { UI_ELEMENTS, CLASS} from './ui.js'
import { cookie } from './storage.js'

export const renderSystemMessage = (text) => {
  const message = UI_ELEMENTS.MESSAGE.SYSTEM.content.cloneNode(true)
  message.querySelector(CLASS.SYSTEM_MESSAGE).textContent = text
  UI_ELEMENTS.WINDOW.CHAT.prepend(message)
}

export const createMessages = ({ user, email, text, time }) => {
  let templateMessage = null
  let colorName = null

  const userEmail = cookie.getEmail()
  const isUser = userEmail === email

  if (isUser) {
    templateMessage = UI_ELEMENTS.MESSAGE.USER.content.cloneNode(true)
    colorName = CLASS.USER_NAME
  }

  if (!isUser) {
    templateMessage = UI_ELEMENTS.MESSAGE.ONLY.content.cloneNode(true)
    colorName = CLASS.OTHER_USER_NAME
  }

  templateMessage.querySelector(CLASS.MESSAGE_TEXT).textContent = text
  templateMessage.querySelector(colorName).textContent = user
  templateMessage.querySelector(CLASS.MESSAGE_TIME).textContent = time
  UI_ELEMENTS.WINDOW.CHAT.prepend(templateMessage)
}