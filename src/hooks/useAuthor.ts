
const baseAuthorUrl = 'https://openlibrary.org';
const baseCoverUrl = 'https://covers.openlibrary.org/b/id/';

export const useAuthor = (author: string) => {

    const getAuthor = async () => {
        try {
            // sanitize author name and throw error if empty or invalid
            if (!author) {
                throw new Error('Author name is required')
            }
            author = author.trim().toLowerCase().replace(/\s+/g, '+')
            // fetch author data from openlibrary.org
            const response = await fetch(`${baseAuthorUrl}/search/authors.json?q=${author}`)
            return await response.json()
        } catch (error) {
            console.log(error)
        }
    }
}