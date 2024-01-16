import { RingLoader } from "react-spinners"
import { Link } from "react-router-dom"
const RingSpinner = ({ message, searchTerm }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <RingLoader size={150} color="#044f67" />
      {message && (
        <div className="w-full flex items-center justify-center flex-col gap-4">
          <h1 className="mt-10  text-xl">{message} <span className="capitalize text-slate-500">{searchTerm}</span></h1>
          <Link className="textLink hover:text-blue-700 text-xl" to='/'><h1>Back To Home</h1></Link>
        </div>
      )}
    </div>
  )
}
// color="#000435"

export { RingSpinner }
