const baseAuthorUrl = 'https://openlibrary.org'
const baseCoverUrl = 'https://covers.openlibrary.org/b/id/'

export const useAuthor = () => {
  const getAuthor = async (author: string) => {
    try {
      // sanitize author name and throw error if empty or invalid
      if (!author) {
        throw new Error('Author name is required')
      }
      author = author.trim().toLowerCase().replace(/\s+/g, '+')
      // fetch author data from openlibrary.org
      const rawAuthor = await fetch(`${baseAuthorUrl}/search/authors.json?q=${author}`)
      const rawAuthorData = await rawAuthor.json()
      if (rawAuthorData.numFound === 0) {
        throw new Error('Author not found')
      }
      const firstAuthor = rawAuthorData.docs[0]
      const authorDetails = await fetch(`${baseAuthorUrl}/authors/${firstAuthor.key}.json`)
      return await authorDetails.json()
    } catch (error) {
      console.log(error)
    }
  }

  return { getAuthor }
}
