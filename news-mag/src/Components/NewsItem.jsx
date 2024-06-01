
const NewsItem = ({title,description,src,url}) => {
    const defaultImage = "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg";
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 h-200" style={{maxWidth:"345px"}}>
  <img src={src || defaultImage} style={{height:"200px",width:"360px"}} className="img-fluid rounded-start" alt="News Image"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"No description available for this news article. Stay tuned for more updates.Good Bye"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
