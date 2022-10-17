import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="Info-card">
      <div>
        <img
          src="https://i.ytimg.com/vi/AkO0DUmHvxQ/maxresdefault.jpg"
          className="card-img-top"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="peoplemakeglasgow.com" className="btn btn-primary">
          Visit Glasgow
        </a>
      </div>

      <div className="Manchester">
        <img
          src="https://i.ytimg.com/vi/ZuiR9Cg22L4/maxresdefault.jpg"
          className="card-img-top"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="visitmanchester.com" className="btn btn-primary">
          Visit Manchester
        </a>
      </div>

      <div className="London">
        <img
          src="https://i.ytimg.com/vi/rt7gShV1L14/maxresdefault.jpg"
          className="card-img-top"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="visitlondon.com" className="btn btn-primary">
          Visit London
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
