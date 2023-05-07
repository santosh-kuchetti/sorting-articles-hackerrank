import React from "react";
import './Articles.css'
const Articles = ({ articles }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr>
              <td className="td">{article.title}</td>
              <td>{article.upvotes}</td>
              <td>{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
