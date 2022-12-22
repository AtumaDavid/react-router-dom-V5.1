import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

//styles
import "./Home.css";

const Home = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h2>Articles</h2>
      {/* only if isPending is set to true will the stuff on the right be output to the browser */}
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>Read more...</Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
