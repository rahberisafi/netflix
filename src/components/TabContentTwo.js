import React from "react";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";
import styled from "styled-components";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { generateMedia } from "styled-media-query";

function TabContentTwo() {
    return (
       <TabContainer>
         <div className="tab-content">
          <div className="tab-top-content">
            <span style={{ fontSize: '1.5rem' }}>Watch Tv Shows and movies anytime</span>
              <Link className="btn" to="/choose-plan">
                <Button>Try it now</Button>
              </Link>
          </div>
          {/* Tab Bottom Content */}
          <div className="tab-bottom-content">
            {/* Tv Image Container */}
            <div>
              <img src={ImgTv} style={{ width: '18.75rem' }}/>
              <h3>Watch On Your Tv</h3>
              <p>Smart Tvs, Playstation, Xbox, Chromecast and more..</p>
            </div>
            {/* Tablet Image Container */}
            <div>
              <img src={ImgTablet} style={{ width: '18.75rem', paddingTop: '0.625rem' }} />
              <h3>Watch On Your Tv</h3>
              <p>Smart Tvs, Playstation, Xbox, Chromecast and more..</p>
            </div>
            {/* Macbook Image Container */}
            <div>
              <img src={ImgMacbook} style={{ width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem' }} />
              <h3>Watch On Your Tv</h3>
              <p>Smart Tvs, Playstation, Xbox, Chromecast and more..</p>
            </div>
          </div>
         </div>
       </TabContainer>
    );
}

export default TabContentTwo;

// Media

const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '900px'
})


// Main Tab Content Container
const TabContainer = styled.div`
  background: var(--main-deep-dark);
  .tab-content {
    margin: 0 10%;
  }
  // Tab Top Content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 2.5rem 0;
    ${customMedia.lessThan('smDesktop')`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${customMedia.lessThan('tablet')`
      grid-template-columns: 1fr;
      text-align: center;
      row-gap: 1.5rem;
    `}
  }
  img {
    width: 100%;
  }
  span {
    grid-column: 1 / 8;
    ${customMedia.lessThan('tablet')`
      grid-column: 1 / -1;
      font-size: 1.5rem;
    `}
  }
  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10 / 12;
    ${customMedia.lessThan('tablet')`
      grid-column: 1 / -1;
      margin-right: 30%;
      margin-left: 30%
    `}
  }

img {
  width: 100%;
}

  // Tab Bottom Content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: 1fr;
    `}
  }
  h3 {
    margin: 0.5rem 0;
  }
  p {
    color: var(--main-grey);
  }
`;
