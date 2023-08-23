import type { SummaryAuthor } from '@/models/author'
import { defineStore } from 'pinia'

export const useEditStore = defineStore('edit', {
  state: () => ({
    loading: false,
    currentEditAuthor: {},
    authorList: [] as SummaryAuthor[]
  }),
  actions: {
    setAuthorList(list: SummaryAuthor[]) {
      this.authorList = list
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
  }
})
