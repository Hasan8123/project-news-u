import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'


const Geopolitics = async () => {
    const newsGeopolitics = await getNewsSearch("geopolitics")
    const filterArticles = removeDuplicateData(newsGeopolitics)

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

export default Geopolitics