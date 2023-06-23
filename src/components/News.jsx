import React from "react";
import Rectangle26 from "../assets/Rectangle 26.png";
import Rectangle48 from "../assets/Rectangle 48.png";
import Rectangle49 from "../assets/Rectangle 49.png";

const News = () => {
  const articles = [
    {
      id: 1,
      icon: Rectangle26,
      name: "This is the first paragraph of the article that we will post in our blog roll.",
      description:
        "This is the first paragraph of the article that we will post in our blog roll. This is the first paragraph of the article that we will post in our blog roll. This is the first paragraph of the article that we will post in our blog roll.",
      buttonLabel: "- Read more",
    },
    {
      id: 2,
      icon: Rectangle48,
      name: "This is the first paragraph of the article that we will post in our blog roll.",
      description:
        "This is the first paragraph of the article that we will post in our blog roll. This is the first paragraph of the article that we will post in our blog roll.",
      buttonLabel: "- Read more",
    },
    {
      id: 3,
      icon: Rectangle49,
      name: "This is the first paragraph of the article that we will post in our blog roll.",
      description:
        "This is the first paragraph of the article that we will post in our blog roll. This is the first paragraph of the article that we will post in our blog roll. This is the first paragraph of the article that we will post in our blog roll.",
      buttonLabel: "- Read more",
    },
  ];
  return (
    <div className="flex flex-col items-center mx-auto gap-5 px-5 py-10">
      <h1 className="font-bold text-[24px] text-center">Get the latest news & insights</h1>
      <div className="flex justify-center flex-wrap gap-5">
        {articles.map((article) => {
          return (
            <div className="max-w-[345px]">
              <img src={article.icon} alt="" />
              <div className="flex flex-col gap-3 pt-5">
                <h1 className="font-bold">{article.name}</h1>
                <h2>{article.description}</h2>
                <h2 className="text-[#234E8F] font-semibold">{article.buttonLabel}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="px-5 bg-[#66ECBC] rounded-md text-[#234E8F] font-medium min-h-[48px] text-center flex items-center">
        See more of our case studies & insights
      </h2>
    </div>
  );
};

export default News;
