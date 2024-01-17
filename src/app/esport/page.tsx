import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'


const Esport = async () => {
    const newsEsport = await getNewsSearch("esport")
    const filterArticles = removeDuplicateData(newsEsport)

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

export default Esport