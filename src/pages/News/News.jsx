import { useState, useEffect } from "react";
import { fetchNews } from "../../hooks/fetchNews";
import CardContainer from "../../components/Card/CardContainer";
import Card from "../../components/Card/Card";

export default function Feed() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getNews() {
      try {
        const newsData = await fetchNews();
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Error fetching news. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    getNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // or a loading spinner
  }

  if (error) {
    return <p>{error}</p>; // or a user-friendly error message
  }

  return (
    <CardContainer>
      {news?.length > 0 ? (
        news.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
            author={article.author}
          />
        ))
      ) : (
        <p>No news available.</p>
      )}
    </CardContainer>
  );
}
