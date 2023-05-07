import { useState } from "react";
import "./App.css";
import Articles from "./Articles";

function App({ articles }) {
  const [articlesList, setArticlesList] = useState(
    articles.sort((a, b) => b.upvotes - a.upvotes)
  );
  const title = "React Sorting articles";
  const sortByUpvotes = () => {
    let arr = articlesList;
    arr = arr.sort((a, b) => {
      if (a.upvotes > b.upvotes) {
        return -1;
      } else if (a.upvotes < b.upvotes) {
        return 1;
      }
      return 0;
    });
    setArticlesList([...arr]);
  };

  const sortByDates = () => {
    let arr = articlesList;
    arr = arr.sort((a, b) => {
      let aDate = new Date(a.date);
      let bDate = new Date(b.date);
      if (aDate > bDate) {
        return -1;
      } else if (aDate < bDate) {
        return 1;
      }
      return 0;
    });
    setArticlesList([...arr]);
  };
  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="lable">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <span>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={() => sortByUpvotes()}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={() => sortByDates()}
          >
            Most Recent
          </button>
        </span>
      </div>
      <Articles articles={articlesList} />
    </div>
  );
}

export default App;
