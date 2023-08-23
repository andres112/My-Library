import type { SummaryAuthor } from "@/models/author"

const baseAuthorUrl = 'https://openlibrary.org'
const baseCoverUrl = 'https://covers.openlibrary.org/a/olid'

export const useAuthor = () => {
  const getAuthors = async (author: string) => {
    try {
      const authorList = []
      // sanitize author name and throw error if empty or invalid
      if (!author) {
        throw new Error('Author name is required')
      }
      author = author.trim().toLowerCase().replace(/\s+/g, '+')
      // fetch author data from openlibrary.org
      const rawAuthors = await fetch(`${baseAuthorUrl}/search/authors.json?q=${author}`)
      const authors = await rawAuthors.json()
      if (authors.numFound === 0) {
        throw new Error('Author not found')
      }
      // loop through the authors and fetch details for each
      for (const author of authors.docs.slice(0, 10)) {
        const authorDetails = await getAuthorPhoto(author.key, 'S')
        authorList.push({
          key: author.key,
          name: author.name,
          photo: authorDetails ? URL.createObjectURL(authorDetails) : ''
        })
      }
      return authorList as SummaryAuthor[]
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const getAuthorDetails = async (authorkey: string) => {
    try {
      const authorDetails = await fetch(`${baseAuthorUrl}/authors/${authorkey}.json`)
      return await authorDetails.json()
    } catch (error) {
      console.log(error)
    }
  }

  const getAuthorPhoto = async (authorkey: string, size: 'S' | 'M' | 'L' = 'S') => {
    try {
      const authorPhoto = await fetch(`${baseCoverUrl}/${authorkey}-${size}.jpg`)
      return await authorPhoto.blob()
    } catch (error) {
      console.log(error)
    }
  }

  return { getAuthors, getAuthorPhoto }
}
