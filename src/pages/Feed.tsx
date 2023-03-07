import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { DatePicker, Empty, message, Space, Spin } from "antd";
import FilterComponent from "../components/FilterComponent";
import axiosService from "../services/axios";

const { RangePicker } = DatePicker;

export const Feed = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sources, setSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSource, setCurrentSource] = useState("");
  const [datesForSearch, setDatesForSearch] = useState([]);
  useEffect(() => {
    fetchArticles();
    fetchCategories();
    fetchSources();
  }, [currentCategory, currentSource, datesForSearch]);

  const fetchArticles = () => {
    setIsLoading(true);
    const firstDate =
      datesForSearch[0] != null ? datesForSearch[0]?.format("YYYY-MM-DD") : "";
    const secondDate =
      datesForSearch[1] != null ? datesForSearch[0]?.format("YYYY-MM-DD") : "";
    axiosService
      .get(
        `v1/articles?source=${currentSource}&keyword=${currentCategory}&from=${firstDate}&to=${secondDate}`
      )
      .then((res) => {
        setIsLoading(false);
        setArticles(res.data.data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  };
  const fetchCategories = () => {
    setIsLoading(true);
    axiosService
      .get(`v1/categories`)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  };
  const fetchSources = () => {
    setIsLoading(true);
    axiosService
      .get(`v1/sources`)
      .then((res) => {
        setSources(res.data.data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  return (
    <div>
      <div className={"flex flex-row my-5 justify-end"}>
        <Space>
          <FilterComponent
            data={categories}
            selectAction={(val) => setCurrentCategory(val)}
            placeholder={"Category"}
            defaultValue={"All"}
          />
          <FilterComponent
            data={sources}
            selectAction={(val) => setCurrentSource(val)}
            placeholder={"Source"}
            defaultValue={"All"}
          />
          <RangePicker
            className="mt-2 w-full rounded-md border-0
          py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300
          focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(val) => setDatesForSearch(val)}
          />
        </Space>
      </div>
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
              <NewsCard key={index} article={article} />
            ))
          )}
        </ul>
      )}
    </div>
  );
};
