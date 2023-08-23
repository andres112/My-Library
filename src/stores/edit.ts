import type { SummaryAuthor } from '@/models/author'
import { defineStore } from 'pinia'

export const useEditStore = defineStore('edit', {
  state: () => ({
    currentEditAuthor: {},
    authorList: [] as SummaryAuthor[]
  }),
  actions: {
    setAuthorList(list: SummaryAuthor[]) {
      this.authorList = list
    }
  }
})
