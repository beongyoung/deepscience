import { useState, useEffect } from "react";
import { fetchNews } from "../../hooks/fetchNews";
import CardContainer from "../../components/Card/CardContainer";
import Card from "../../components/Card/Card";

export default function Feed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      const newsData = await fetchNews();
      setNews(newsData);
    }

    getNews();
  }, []);

  return (
    <div>
      <CardContainer>
        {news.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            description={article.description}
          />
        ))}
      </CardContainer>
    </div>
  );
}
