import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { DatePicker, Empty, message, Space, Spin } from "antd";
import FilterComponent from "../components/FilterComponent";
import axiosService from "../services/axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const { RangePicker } = DatePicker;

export const Feed = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sources, setSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSource, setCurrentSource] = useState("");
  const [datesForSearch, setDatesForSearch] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");
  useEffect(() => {
    fetchArticles();
    fetchCategories();
    fetchSources();
  }, [currentCategory, currentSource, datesForSearch, currentSearch]);

  const fetchArticles = () => {
    setIsLoading(true);
    const firstDate =
      datesForSearch[0] != null ? datesForSearch[0]?.format("YYYY-MM-DD") : "";
    const secondDate =
      datesForSearch[1] != null ? datesForSearch[0]?.format("YYYY-MM-DD") : "";
    const search = currentSearch ? currentSearch : currentCategory;
    axiosService
      .get(
        `v1/articles?source=${currentSource}&keyword=${search}&from=${firstDate}&to=${secondDate}`
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
      <div className={"flex flex-row my-5 justify-between"}>
        <div className="relative border-2 w-1/3 rounded-md text-gray-400 focus-within:text-gray-600 hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </div>
          <input
            id="search-field"
            className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm"
            placeholder="Search"
            type="search"
            name="search"
            onChange={(val) => setCurrentSearch(val.target.value)}
          />
        </div>
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
