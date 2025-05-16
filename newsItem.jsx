import image from "../assets/news.webp";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 px-2 py-2 my-3 mx-3  d-inline-block" style={{ maxWidth: "345px" }}>
      <img style={{ width: "325px", height: "200px" }} src={src ? src : image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News "}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary"> Read More</a>
      </div>
    </div>
  )
}

export default NewsItem;