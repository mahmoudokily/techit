export function getCurrentUrl(pathname: string) {
  return pathname.split(/[?#]/)[0]
}

export function checkIsActive(pathname: string, url: string) {
  const current = getCurrentUrl(pathname)
  if (!current || !url) {
    return false
  }

  if (current === url) {
    return true
  }

  if (current.indexOf(url) > -1) {
    return true
  }
  if (url.includes(pathname)) {
    return true
  }

  return false
}

interface NavigatorLanguage extends Navigator {
  userLanguage?: string
  browserLanguage?: string
}

interface CustomWindow extends Window {
  navigator: NavigatorLanguage
}

declare const window: CustomWindow

export const getDefaultLanguage = (): string | null | undefined => {
  let lang: string | null | undefined = window.navigator.languages
    ? window.navigator.languages[0]
    : null
  lang =
    lang ||
    window.navigator.language ||
    window.navigator?.browserLanguage ||
    window.navigator?.userLanguage
  return lang
}
