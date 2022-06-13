import React from "react";
import "../App.css";

function Essay() {
  return (
    <div className="container my-5">
      <div className="">
        <div className="d-flex justify-content-between ">
          <div className="mr-5">
            <img
              src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/543_378726_tech.hero.jpg"
              alt=""
              height="500"
              width="500"
            />
          </div>
          <div className="d-flex flex-row-reverse text-center shadow-lg">
            <p className="px-4 ">
              <span className="py-5 fs-2"> Essay </span> <br/>
              I'am John Michael Micosa Buan and I am currently working on a
              Freelance IT service provider called 
              <span className="fw-bold ">
                DNYD (Definitely Not Your Developer)
              </span>
              as a Front-end Developer. How to conduct oneself inside the
              company during work immersion? Even for
              being work from home we still interact for my friend is currently
              my senior developer, even though we're bestfriends we still take
              work professionally. We're gonna start at morning and take coffee
              break, lunch etc... tho we can work anytime for we don't have
              schedules we just have to finish the work on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Essay;
