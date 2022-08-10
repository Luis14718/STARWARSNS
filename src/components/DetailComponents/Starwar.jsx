/* eslint-disable max-len */
import React from 'react';
import './Starwar.css';

function Crawl({ info }) {
  return (
    <div className="starwars-frame">
      <section id="star-wars" className="star-wars">
        <div className="crawl">
          <div className="title" style={{ color: '#feda4a' }}>
            <p>{info.title}</p>
            <h1>{`Episode${info.episode_id}`}</h1>
            <p>{info.opening_crawl}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
function Intro() {
  return (
    <div className="row align-items-center h-100 intros">
      <section>
        <div>
          <div>
            <p className="text-center starwar-title"> A long time ago in a galaxy far, far away... </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Starwars({ info }) {
  return (
    <>
      {info && <Crawl info={info} />}
      {!info && <Intro />}
    </>
  );
}
