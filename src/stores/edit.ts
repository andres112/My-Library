import type { SummaryAuthor } from '@/models/author'
import { defineStore } from 'pinia'

export const useEditStore = defineStore('edit', {
  state: () => ({
    loading: false,
    currentEditAuthor: {} as SummaryAuthor,
    authorList: [] as SummaryAuthor[]
  }),
  actions: {
    setAuthorList(list: SummaryAuthor[]) {
      this.authorList = list
    },
    setCurrentEditAuthor(author: SummaryAuthor) {
      
      this.currentEditAuthor = author
    },
    setLoading(loading: boolean) {
      this.loading = loading
    }
  }
})
