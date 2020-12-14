import React from "react";

const Achevements = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1362025/pexels-photo-1362025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "25px",
      }}
    >
      <div className='row text-white text-center w-100'>
        <div className='col-md-4 my-3'>
          <h3> 67 </h3>
          <h5> CLIENTS WORKED WITH </h5>
        </div>
        <div className='col-md-4 my-3'>
          <h3> 130 </h3>
          <h5> COMPLETED PROJECTS </h5>
        </div>
        <div className='col-md-4 my-3'>
          <h3> 27232 </h3>
          <h5> LINE OF CODES </h5>
        </div>
      </div>
    </div>
  );
};

export default Achevements;
