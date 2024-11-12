import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://api.currentsapi.services/v1/latest-news?country=us&category=${category}&apiKey=${import.meta.env.VITE_CURRENTS_API_KEY}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.news));  
  }, [category]);

  return (
    <div>
      <h2 className="text-center" style={{ margin: "15px" }}>Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />
      })}
    </div>
  );
};

export default NewsBoard;