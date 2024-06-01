import { useEffect } from "react";

const NewsBoard = () => {
 const[articles,setarticles] = useState([]);

 useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${VITE_API_KEY}`
    fetch(url).then(response => response.json()).then(data=> setarticles(data.articles));

 },[]) 
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    </div>
  )
}

export default NewsBoard
