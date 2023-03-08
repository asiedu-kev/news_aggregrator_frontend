import React, { useEffect, useState } from "react";
import axiosService from "../services/axios";
import { Empty, message, Spin } from "antd";
import NewsCard from "../components/NewsCard";

export const MyPreferences = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    setIsLoading(true);

    axiosService
      .get(`v1/preferences`)
      .then((res) => {
        setIsLoading(false);
        setArticles(res.data.data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  };
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center">
          <Spin />
        </div>
      ) : (
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1"
        >
          {articles.length == 0 ? (
            <div className="flex justify-center mt-5">
              <Empty description={"No articles found"} />
            </div>
          ) : (
            articles.map((article, index) => (
              <NewsCard key={index} article={article} isPref={true} />
            ))
          )}
        </ul>
      )}
    </div>
  );
};
