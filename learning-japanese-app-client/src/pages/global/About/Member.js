import React from "react";

const Member = ({ imgSrc, name, isBigger }) => {
  return (
    <div>
      <img
        src={
          imgSrc ||
          "https://images.pexels.com/photos/3178852/pexels-photo-3178852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        alt='membership'
        className={`member-avatar ${isBigger ? "member-bigger" : ""}`}
      />
      <h5 className='text-center'>{name} </h5>
    </div>
  );
};

export default Member;
