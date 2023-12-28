enum LocalStorageKeys {
  ACCESS_TOKEN = 'accessToken',
}

export class LocalStorage {
  static getAccessToken() {
    return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN)
  }

  static removeAccessToken() {
    localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN)
  }

  static setAccessToken(accessToken: string) {
    localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, accessToken)
  }
}

// export const getToken = () => {
//
// };
// export const removeToken = () => {
//
// };
// export const setToken = (val: string) => {
//
// };
