// import { useParams } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";

// import React from "react";

// const Article = () => {
//   const params = useParams();
//   const url = "http://localhost:3000/articles/" + params.id;
//   const { data: article, isPending, error } = useFetch(url);

//   return (
//     <div>
//       {isPending && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       {article && (
//         <div>
//           <h2>{article.title}</h2>
//           <p>By {article.author}</p>
//           <p>{article.body}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Article;

import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import React, { useEffect } from "react";
//redirect user
import { useHistory } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, isPending, error } = useFetch(url);
  //   redirect
  const history = useHistory();

  //   redirect errorpage with wrong article
  useEffect(() => {
    if (error) {
      //redirect
      //   history.goBack()
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};

export default Article;
