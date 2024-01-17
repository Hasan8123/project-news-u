import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'


const Weather = async () => {
    const newsWeather = await getNewsSearch("weather")
    const filterArticles = removeDuplicateData(newsWeather)

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

export default Weather