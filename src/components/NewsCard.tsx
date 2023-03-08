import React, { useState } from "react";
import moment from "moment";
import ArticleDetailComponent from "./ArticleDetailComponent";
import parse from "html-react-parser";
import { useUserActions } from "../hooks/user.actions";
import { message } from "antd";

export type NewsCardProps = {
  article: any;
  isPref?: null | boolean;
};
export default function NewsCard({ article, isPref }: NewsCardProps) {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const userActions = useUserActions();
  const showSlider = () => {
    setIsSliderOpen(true);
  };
  const handleOk = () => {
    setIsSliderOpen(false);
  };
  // useEffect(() => {}, []);

  const addToPrefs = () => {
    userActions.addToPreferences(article).catch((err) => {
      message.error(err.data);
    });
  };

  return (
    <div>
      <li
        key={article.author}
        className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        onClick={() => showSlider()}
      >
        <ArticleDetailComponent
          article={article}
          addToPreferencesAction={addToPrefs}
          opened={isSliderOpen}
          cancelAction={handleOk}
          isPref={isPref}
        />
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="truncate text-sm font-medium text-gray-900">
                {article.title}
              </h3>
              <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                {article.author}
              </span>
            </div>
            <p className="mt-1 truncate text-sm text-gray-500">
              {parse(article.description)}
            </p>
            <p className="mt-1 truncate text-xs text-gray-400">
              {moment(article.published_at).startOf("hour").fromNow()}
            </p>
          </div>
          <img
            className="h-20 w-20 flex-shrink-0  bg-gray-300"
            src={article.url_to_image}
            alt=""
          />
        </div>
        <div></div>
      </li>
    </div>
  );
}
