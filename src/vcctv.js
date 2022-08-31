import React from "react";

export default function Vcctv(props) {
  return (
    <div className="container" key={props.value.stories_list[0].feid}>
      <div className="vcctv-container">
        <div className="vcctv-upper">
          <div>
            <h3>{props.value.section_name}</h3>
          </div>
          <div className="vcctv-view">
            <span>View More</span>
            <span><img src="./images/iconleft.svg" alt="" /></span>
          </div>
        </div>
        <div className="vcctv-lower">
          <div className="vcctv-responsivediv">
            <iframe
            className="vcctv-java"
              width="550"
              height="300"
              src="https://www.youtube.com/embed/8zKuNo4ay8E"
              title="Asynchronous JavaScript & EVENT LOOP from scratch 🔥 | Namaste JavaScript Ep.15"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="vcctv-left">
            <h5>HEALTHCARE</h5>
            <h3>
              {/* How can we harness data for healthcare and safegaurd ourselves
              from cyber threats? */}
              {props.value.stories_list[0].title}
            </h3>
            <p>
              The global healthcare data is expected to grow at a CAGR of 36% by
              2025. To make healthcare more equitable, affordable and
              accessible, there is a need to find ways to unite and generate
              actionable insights from data. How collaborations and strategic
              partnerships can harness the data to tackle the issues faced by
              the sector?
            </p>
            <ul className="dotapi">
              <li className="sliderauthor">Madhiruma Nandy</li>
              <li className="sliderauthor1">30 september</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
