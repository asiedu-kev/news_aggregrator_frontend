import React from "react";
import moment from "moment";

const articles = [
  {
    author: "Jane Cooper",
    source: "TechCrunch",
    title: "Tesla Investor Day: Here's how to watch and what to expect",
    description:
      "Tesla investor day is upon us. Here's how to watch Tesla CEO Elon " +
      "Musk reveal what his plans are for the company.",
    role: "Admin",
    content:
      "Tesla investor day is upon us, an occasion where shareholders and super fans will make their pilgrimage " +
      "to the companys Gigafactory Texas located near Austin while the rest of us tune in via live str… [+3895 chars]",
    publishedAt: "2023-03-01T16:21:22Z",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2022/04/tesla-cyber-rodeo-giga-texas.jpg",
    url: "https://techcrunch.com/2023/03/01/tesla-investor-day-how-to-watch-what-to-expect/",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function NewsCard() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1"
    >
      {articles.map((article) => (
        <li
          key={article.author}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {article.author}
                </h3>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {article.source}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {article.title}
              </p>
              <p className="mt-1 truncate text-xs text-gray-400">
                {moment(article.publishedAt).startOf("hour").fromNow()}
              </p>
            </div>
            <img
              className="h-20 w-20 flex-shrink-0  bg-gray-300"
              src={article.urlToImage}
              alt=""
            />
          </div>
          <div></div>
        </li>
      ))}
    </ul>
  );
}
