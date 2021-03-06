import './index.html';
import React, { useState } from 'react';
import './joke.css';

const Joke = () => {

  const [upLikes,setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const upLike = () => { setUpLikes(upLikes + 1);
  };
  const downLike = () => {setDownLikes(downLikes + 1);
  }

  return (
<>
<div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src="./img/user01.png" />
              <p className="user-name">Neroxx</p>
            </div>
            <p className="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div className="joke__likes">
            <button id="btn-up" onClick={upLike} className="btn-like btn-like--up"></button>
  <span id="likes-up" className="likes-count likes-count--up">{upLikes}</span>
            <button id="btn-down" onClick={downLike} className="btn-like btn-like--down"></button>
            <span id="likes-down" className="likes-count likes-count--down">{downLikes}</span>
          </div>
        </div>
      </div>
      </>
  )
};

export default Joke;