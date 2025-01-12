import { UI_ELEMENTS, showModal, updateScroll } from './modules/ui.js'
import { getCodeUser, getUserInfo } from './modules/api.js'
import { cookie } from './modules/storage.js'
import { changeUserName } from './modules/api.js'
import { socket, updateWebSocket } from './modules/socket.js'
import { appendHistory } from './modules/chat_history.js'

const processAuthStatus = () => {
  const userIsHere = cookie.getToken()
  if (userIsHere) parseUserAuthInfo()
  if (!userIsHere) showModal.open(UI_ELEMENTS.WINDOW.AUTH)
}

const parseUserAuthInfo = async () => {
  const data = await getUserInfo()

  cookie.saveUserName(data.name)
  cookie.saveEmail(data.email)

  const userName = cookie.getUserName()
  const userEmail = cookie.getEmail()

  UI_ELEMENTS.STATUS.USER_NAME.textContent = `Имя: ${userName}`
  UI_ELEMENTS.STATUS.USER_EMAIL.textContent = `Почта: ${userEmail}`
}

const repeatRequest = () => {
  processAuthStatus()
  appendHistory()
}

repeatRequest()

UI_ELEMENTS.WINDOW.WIDGET.addEventListener('click', showModal.close)

UI_ELEMENTS.BTN.SETTING.addEventListener('click', () => {
  showModal.open(UI_ELEMENTS.WINDOW.SETTING)
})

UI_ELEMENTS.MESSAGE.SEND.addEventListener('submit', async (event) => {
  event.preventDefault()
  updateWebSocket(UI_ELEMENTS.INPUT.MESSAGE.value)
  location.reload()
  UI_ELEMENTS.INPUT.MESSAGE.value = ''
  updateScroll()
})

UI_ELEMENTS.BTN.GET_CODE.addEventListener('click', (event) => {
  event.preventDefault()
  getCodeUser(UI_ELEMENTS.INPUT.EMAIL.value)
  cookie.saveEmail(UI_ELEMENTS.INPUT.EMAIL.value)
})

UI_ELEMENTS.BTN.OPEN_MODAL_CODE.addEventListener('click', (event) => {
  event.preventDefault()
  showModal.clear(event)
  showModal.open(UI_ELEMENTS.WINDOW.ENTER)
})

UI_ELEMENTS.BTN.ENTER_WIDGET.addEventListener('click', (event) => {
  event.preventDefault()
  cookie.saveToken(UI_ELEMENTS.INPUT.CODE.value)
  showModal.clear(event)
  repeatRequest()
})

UI_ELEMENTS.BTN.CHANGE_NAME.addEventListener('click', (event) => {
  event.preventDefault()
  changeUserName(UI_ELEMENTS.INPUT.NAME.value)
})

UI_ELEMENTS.BTN.EXIT.addEventListener('click', () => {
  cookie.deleteUser()
  socket.close()
  repeatRequest()
  location.reload()
})

UI_ELEMENTS.WINDOW.CHAT.addEventListener('scroll', () => {
  if (UI_ELEMENTS.WINDOW.CHAT.scrollTop === 0) {
    appendHistory()
  }
})
