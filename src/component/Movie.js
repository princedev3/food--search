import React from 'react'
import {motion} from "framer-motion"

const Movie = ({movie}) => {
  return (
    <div>
        <motion.div layout animate={{opacity:1, scale:1}}
        initial={{opacity:0,scale:0.5}} exit={{opacity:0,scale:0.5}}
        transition={{duration:0.5}}>
            <h4>{movie.title}</h4>
            <img className='image' src={"https://image.tmdb.org/t/p/w500"+ movie.poster_path}/>
        </motion.div>
    </div>
  )
}

export default Movie