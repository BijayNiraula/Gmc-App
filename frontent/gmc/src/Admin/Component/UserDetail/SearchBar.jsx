import React from 'react'
import { memo } from 'react'
function SearchBar(props) {
  
  return (
    <form className="  col-5 " role="search" onSubmit={(e)=>{
      e.preventDefault()
      props.search(e.target[0].value)
    }}>
          <input type="search" className="form-control border w-100 border-dark rounded-pill" required placeholder="Search By Name or by s_id" aria-label="Search"/>
     </form>
  )
}

export default memo(SearchBar)