export const fetchResults = async (searchTerm) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=8a528ece&s=${searchTerm}`)
  const {totalResults} = await response.json()

  const numPages = Math.ceil(totalResults / 10)
  let searchResults = []
  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    let eachResponse = await fetch(`http://www.omdbapi.com/?apikey=8a528ece&s=${searchTerm}&page=${pageNum}`)
    let {Search} = await eachResponse.json()
    
    searchResults.push(...Search)
  }

  return searchResults
}