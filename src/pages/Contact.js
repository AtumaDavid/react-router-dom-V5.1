import React from "react";

//query parameter
import { useLocation } from "react-router-dom";

const Contact = () => {
  const queryString = useLocation().search;
  // console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  // http://localhost:3001/contact/?name=mario
  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        recusandae iste earum laborum illo nam sint, harum repudiandae?
        Consequatur quisquam facere reprehenderit temporibus odit esse quibusdam
        eos id, blanditiis saepe.
      </p>
    </div>
  );
};

export default Contact;
