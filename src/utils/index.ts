import { news } from '@/types'


export const removeDuplicateData = (article:any) => {
    const randomArticle:news[] =article?.articles
    const filterArticles = randomArticle.filter(article => article?.source.id !== null)
    return filterArticles
    
}
 