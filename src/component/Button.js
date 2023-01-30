import React, { useEffect } from 'react'

const Button = ({popular,setActiveGenre,activeGenre,setFiltered}) => {
    useEffect(()=>{
        if(activeGenre===0){
            setFiltered(popular)
            return
        }
        const filtered = popular.filter(item=>item.genre_ids.includes(activeGenre))

        setFiltered(filtered)
    },[activeGenre])
  return (
    <div className='button'>
        <button className={activeGenre===0?"active":""} onClick={()=>setActiveGenre(0)}>All</button>
        <button className={activeGenre===35?"active":""} onClick={()=>setActiveGenre(35)}>Action</button>
        <button className={activeGenre===28?"active":""} onClick={()=>setActiveGenre(28)}>Comedy</button>
    </div>
  )
}
//{}[]

export default Button