import { defineStore } from 'pinia'

export enum HeaderType {
  MAIN = 'main',
  ADD_AUTHOR = 'add-author'
}

export const useHeaderStore = defineStore('headers', {
  state: () => ({
    currentHeader: HeaderType.MAIN
  }),
  actions: {
    setCurrentHeader(header: HeaderType) {
      this.currentHeader = header
    }
  }
})
