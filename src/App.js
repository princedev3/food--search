import {useEffect,useState} from "react"
import './App.css';
import Button from "./component/Button";
import Movie from "./component/Movie";
import {motion,AnimatePresence} from "framer-motion"

function App() {
  const [popular,setPopular]= useState([])
  const [filtered, setFiltered]= useState([])
  const [activeGenre,setActiveGenre]= useState(0)

  const fetchMovie =async ()=>{
    const api = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
    const data = await api.json()
    console.log(data.results)
    setPopular(data.results)
    setFiltered(data.results)
  }
  useEffect(()=>{
    fetchMovie()
  },[])

  return (
  <div>
    <Button activeGenre={activeGenre} setFiltered={setFiltered}
     setActiveGenre={setActiveGenre} popular={popular}/>
    <motion.div layout className="container">
      <AnimatePresence>
      {filtered.map(movie=><div key={movie.id}>
        <Movie movie={movie}/>
      </div>)}
      </AnimatePresence>
    </motion.div>
    </div>
  );
}

export default App;
//{}[]f9192307d836ec15a7d0c7c450afb981