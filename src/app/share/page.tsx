import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'


const Share = async () => {
    const newsShare = await getNewsSearch("share")
    const filterArticles = removeDuplicateData(newsShare)

  return (
    <div className=' w-[700px]'>
        {filterArticles.map((article, idx) => (
            <div key={`${article?.title}-${idx}`}>
                <Article data={article} />
            </div>
        ))}
    </div>
  )
}

export default Share