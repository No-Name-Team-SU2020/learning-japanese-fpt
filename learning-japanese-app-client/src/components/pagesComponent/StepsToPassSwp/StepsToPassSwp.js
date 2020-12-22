import React from "react";
import { steps } from "../../../temporary-data/data";

const StepsToPassSwp = () => {
  return (
    <div className='bg-light p-5 text-gray border rounded mt-3'>
      <h1>This Is What</h1>
      <h1>We Need To Pass SWP</h1>
      <div className='row'>
        {steps.map((step) => (
          <div className='col-sm-6 mt-5' key={step.id}>
            <div className='media align-items-center'>
              <i
                className={[
                  step.icon,
                  "mr-3 text-danger icon-extra-large",
                ].join(" ")}
              ></i>
              <div className='media-body'>
                <h4> {step.title} </h4>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsToPassSwp;
