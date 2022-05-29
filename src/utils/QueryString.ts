export const TRENDING = `
query{
    Page(page:1, perPage:5) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
        media(type: ANIME, sort: TRENDING_DESC) {
          id
          title {
            romaji
            english
          }
          siteUrl
          isAdult
          coverImage {
            extraLarge
            large
            medium
          }
      }
}
}`;
