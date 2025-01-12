import { cookie } from './storage.js'
import { isVisibility, UI_ELEMENTS } from './ui.js'
import { ERRORS, STATUS, ENDPOINT } from './config.js'

const GET_ELEMENTS_API = {
  USER: {
    MAIN: `${ENDPOINT.URL}/user`,
    INFO: `${ENDPOINT.URL}/user/me`,
    CHAT: `${ENDPOINT.URL}/messages/`
  },
  METHOD: {
    PATCH: ENDPOINT.METHOD.PATCH,
    POST: ENDPOINT.METHOD.POST,
    GET: ENDPOINT.METHOD.GET
  },
  HEADER: {
    DEFAULT: () => ({ ...ENDPOINT.HEADER.DEFAULT }),
    DEFAULT_AUTH: (token) => ({
      ...ENDPOINT.HEADER.DEFAULT,
      Authorization: `Bearer ${token}`
    })
  }
}

const { USER, METHOD, HEADER } = GET_ELEMENTS_API

const makeRequest = async ({ patch, method, headers, body }) => {
  try {
    isVisibility.show(UI_ELEMENTS.STATUS.LOADER)
    const response = await fetch(patch, {
      method,
      headers,
      body
    })
    if (response.ok) {
      const data = await response.json()
      console.info(STATUS.API.COMPLETE, data)
      return data
    }
  } catch (error) {
    console.error(ERRORS.API.SENDING, error)
  } finally {
    isVisibility.hide(UI_ELEMENTS.STATUS.LOADER)
  }
}

export const getCodeUser = async (email) => {
  return await makeRequest({
    patch: USER.MAIN,
    method: METHOD.POST,
    headers: HEADER.DEFAULT(),
    body: JSON.stringify({ email })
  })
}

export const changeUserName = async (name) => {
  const token = cookie.getToken()
  return await makeRequest({
    patch: USER.MAIN,
    method: METHOD.PATCH,
    headers: HEADER.DEFAULT_AUTH(token),
    body: JSON.stringify({ name })
  })
}

export const getUserInfo = async () => {
  const token = cookie.getToken()
  return await makeRequest({
    patch: USER.INFO,
    method: METHOD.GET,
    headers: HEADER.DEFAULT_AUTH(token)
  })
}

export const getChatHistory = async () => {
  const token = cookie.getToken()
  return await makeRequest({
    patch: USER.CHAT,
    method: METHOD.GET,
    headers: HEADER.DEFAULT_AUTH(token)
  })
}
