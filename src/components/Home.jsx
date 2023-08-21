import React from "react";
import vg from '../assets/2.webp'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>AGKMINDS</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={ vg } alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increse the problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Laborum irure irure cupidatat ea amet in eu laborum sint. Esse minim voluptate anim ipsum pariatur ullamco consequat. Id exercitation veniam exercitation cupidatat officia ut qui culpa. Adipisicing duis do ullamco ullamco est pariatur sit est. Et incididunt aliquip excepteur culpa excepteur mollit do. Do quis adipisicing tempor officia ipsum magna veniam officia ex tempor occaecat dolor aliquip. Eu id quis elit nulla sint adipisicing excepteur dolore eiusmod amet qui.

            Dolor ut enim exercitation in enim occaecat fugiat proident. Duis excepteur velit non cupidatat tempor id excepteur ipsum ex ad cillum. Duis adipisicing commodo eiusmod labore aliquip Lorem cupidatat commodo ad velit aute duis cupidatat. Sint magna qui esse cupidatat in magna cupidatat ex aute anim. Adipisicing qui dolore anim excepteur aliqua dolore dolor excepteur. Incididunt quis elit est id. In cillum aliqua magna tempor consequat sunt excepteur laborum non laborum incididunt eu.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={ { animationDelay: "0.3s" } }>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={ { animationDelay: "0.5s" } }>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={ { animationDelay: "0.7s" } }>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={ { animationDelay: "0.9s" } }>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
          </article>
</div>
      </div>
    </>
  );
};

export default Home;
