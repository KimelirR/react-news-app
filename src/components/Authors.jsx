import React, { useState } from "react";
import "./Card.css";
import { NavDropdown } from "react-bootstrap";
import { useStateContext } from "../context/ContextProvider";


const Authors = () => { 

  const {authors, setAuthors} = useStateContext();
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = () => {
    setLoading(true);
    axiosClient
      .get("getauthors")
      .then(({ data }) => {
        setLoading(false);
        setHierachy(true);
        setAuthors(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };


  return (
    <>
      {loading && (
        <NavDropdown.Item href="#action4">
          <p>Loading...</p>
        </NavDropdown.Item>
      )}
      {!loading && (
        <NavDropdown.Item href="#action4" className="shadow rounded">
          {authors.map((author) => (
            <li key={author.id}>
              <p>{author.name}</p>
            </li>
          ))}
        </NavDropdown.Item>
      )}
    </>
  );
};

export default Authors;
