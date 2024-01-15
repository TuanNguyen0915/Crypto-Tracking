
import { CiSearch } from "react-icons/ci"
import { useNavigate } from "react-router-dom"

const Search = ({searchTerm, setSearchTerm}) => {
  const navigate = useNavigate()
  
  return (
    <div className="flex items-center gap-2 rounded-lg border p-2">
      <CiSearch />
      <input
        type="text"
        className="h-full w-full outline-none bg-transparent"
        placeholder="Search ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={()=> navigate('/search') }
      />
    </div>
  )
}

export default Search
