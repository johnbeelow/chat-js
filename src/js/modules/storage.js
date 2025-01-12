import Cookies from 'js-cookie'

export const cookie = {
  saveToken: (token) => Cookies.set('authTokenUserChat', token, { expires: 1 }),
  getToken: () => Cookies.get('authTokenUserChat'),

  saveEmail: (email) => Cookies.set('userChatEmail', email, { expires: 1 }),
  getEmail: () => Cookies.get('userChatEmail'),

  saveUserName: (email) => Cookies.set('userChatName', email, { expires: 1 }),
  getUserName: () => Cookies.get('userChatName'),

  deleteUser: () => {
    Cookies.remove('authTokenUserChat')
    Cookies.remove('userChatEmail')
    Cookies.remove('userChatName')
  }
}
