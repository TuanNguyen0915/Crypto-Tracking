import { getNews } from "../services/cryptoApi"
import {
  fetchNewsStart,
  fetchNewFailure,
  fetchNewSuccess,
} from "../redux/newsSlice/newsSlice"
import { useDispatch, useSelector } from "react-redux"
import { RingSpinner } from "../components/Spinner/Spinner"
import { useEffect } from "react"

import NewsCard from "../components/News/NewsCard"

const News = () => {
  const { currentNews, loading } = useSelector((state) => state.news)

  // We dont use useEffect now to save the limited request
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchNewsStart())
    try {
      const fetchData = async () => {
        const res = await getNews()
        dispatch(fetchNewSuccess(res))
      }
      fetchData()
    } catch (error) {
      dispatch(fetchNewFailure(error))
    }
  }, [dispatch])


  if (loading) {
    return (
      <div className="h-[600px] w-full">
        <RingSpinner message="Wait a second, we loading news..." />
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col justify-center">
      <h1 className="textTitle mb-10 text-start text-3xl">
        Latest Crypto News
      </h1>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-10 md:w-4/5">
          {currentNews &&
            currentNews.map((news) => (
              <NewsCard key={news.article_id} news={news} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default News
