import { useState } from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  console.log(searchTerm)
  return (
    <div className='border p-2 rounded-lg flex items-center gap-2'>
      <CiSearch />
      <input type="text" className="w-full h-full outline-none" placeholder="Search" value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)} />
    </div>
  )
}

export default Search