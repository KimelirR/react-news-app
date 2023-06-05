import React from "react";
import axiosClient from "../axios-client";
import {useEffect, useState} from 'react';
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import './Card.css';

const Cards = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    setLoading(true);
    axiosClient
      .get("loadnews")
      .then(({ data }) => {
        setLoading(false);
        setNews(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  
  return (
    <>
       {loading && (
          <div className="row mt-5">
            <div className="col-12 mb-3">
              <p>Loading...</p>
              <hr />
            </div>
          </div>
        )}
{!loading && (
      <section id="cardAnimation" className="cardAnimation">
        <div className="row">
        {news.map((news) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={news.id}>
            <div
              className="card box-shadow-0"
              data-appear="appear"
              data-animation="zoomIn"
            >
            <img src={news.image_url} class="card-img-top" alt="news image"></img>
              <div className="card-header white bg-success">
                <h4 className="card-title white">{news.title}</h4>
              </div>
              <div className="card-content collapse show">
                <div className="card-body border-bottom-success">
                  <p className="card-text">
                   {news.description}
                  </p>
                  
                  <p className="card-text styled">
                  <Link to={news.web_url} class="btn btn-outline-danger text-center col-lg-4 col-md-6 col-sm-12">Link</Link>
                  </p>

                  <p class="card-text"><small className="text-body-secondary mb-2"><strong>Posted on {news.published_at}</strong></small></p>
                </div>
              </div>
            </div>
          </div>
           ))}
        </div>
      </section>
      )}

    </>
  );
};

export default Cards;
