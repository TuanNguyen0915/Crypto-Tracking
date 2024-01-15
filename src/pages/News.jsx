import { getNews } from "../services/cryptoApi"
import {
  fetchNewsStart,
  fetchNewFailure,
  fetchNewSuccess,
} from "../redux/newsSlice/newsSlice"
import { useDispatch, useSelector } from "react-redux"
import { RingSpinner } from "../components/Spinner/Spinner"
import { useEffect } from "react"

const News = () => {
  const { currentNews, loading } = useSelector((state) => state.news)
  console.log(currentNews)
  // We dont use useEffect now to save the limited request
  // const dispatch = useDispatch()
  // useEffect(()=> {
  //   dispatch(fetchNewsStart())
  //   try {
  //     const fetchData = async () => {
  //       const res = await getNews()
  //       dispatch(fetchNewSuccess(res))
  //     }
  //     fetchData()
  //   } catch (error) {
  //     dispatch(fetchNewFailure(error))
  //   }
  // }, [dispatch])

  if (loading) {
    return (
      <div className="w-full h-[600px]">
        <RingSpinner message="Wait a second, we loading news..." />
      </div>
    )
  }

  return (
    <div>
      <h1>This is new page</h1>
    </div>
  )
}

export default News
