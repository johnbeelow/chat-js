export const CLASS = {
  BTN_CLOSE: '.btn_close',
  MODAL_WINDOW: '.modal_window',
  MESSAGE_TEXT: '.message_text',
  USER_NAME: '.message_text__main_user',
  OTHER_USER_NAME: '.message__text__other_users',
  MESSAGE_TIME: '.message_date',
  SYSTEM_MESSAGE: '.system_message'
}

export const UI_ELEMENTS = {
  WINDOW: {
    WIDGET: document.getElementById('widget_chat'),
    SETTING: document.getElementById('setting_window'),
    CHAT: document.getElementById('window_container'),
    AUTH: document.getElementById('auth_window'),
    ENTER: document.getElementById('enter_window')
  },
  BTN: {
    SETTING: document.getElementById('btn_setting'),
    CLOSE_SETTING: document.getElementById('close_setting'),
    GET_CODE: document.getElementById('get_code'),
    OPEN_MODAL_CODE: document.getElementById('open_page_code'),
    ENTER_WIDGET: document.getElementById('btn_enter'),
    CHANGE_NAME: document.getElementById('change_name'),
    EXIT: document.getElementById('btn_exit')
  },
  MESSAGE: {
    SEND: document.getElementById('massage_container'),
    USER: document.getElementById('message_user'),
    ONLY: document.getElementById('message_only'),
    TEXT: document.getElementById('message_text'),
    SYSTEM: document.getElementById('system_message_box')
  },
  INPUT: {
    MESSAGE: document.getElementById('message_form_input'),
    EMAIL: document.getElementById('input_mail'),
    CODE: document.getElementById('input_code'),
    NAME: document.getElementById('input_name')
  },
  STATUS: {
    LOADER: document.getElementById('loader'),
    OVERLAY: document.getElementById('overlay'),
    CONNECTION: document.getElementById('circle-status-socket'),
    USER_NAME: document.getElementById('user_name'),
    USER_EMAIL: document.getElementById('user_email')
  }
}

export const updateScroll = () => {
  UI_ELEMENTS.WINDOW.CHAT.scrollTop = UI_ELEMENTS.WINDOW.CHAT.scrollHeight
}

export const isVisibility = {
  show: (element) => (element.style.display = 'flex'),
  hide: (element) => (element.style.display = 'none')
}

export const showModal = {
  close: (event) => {
    const target = event.target
    const closeButton = target.closest(CLASS.BTN_CLOSE)
    const modal = target.closest(CLASS.MODAL_WINDOW)

    if (closeButton) {
      isVisibility.hide(modal)
      isVisibility.hide(UI_ELEMENTS.STATUS.OVERLAY)
    }
  },
  open: (modal) => {
    isVisibility.show(modal)
    isVisibility.show(UI_ELEMENTS.STATUS.OVERLAY)
  },
  clear: (event) => {
    const target = event.target
    const modal = target.closest(CLASS.MODAL_WINDOW)
    if (modal) {
      isVisibility.hide(modal)
      isVisibility.hide(UI_ELEMENTS.STATUS.OVERLAY)
    }
  }
}
