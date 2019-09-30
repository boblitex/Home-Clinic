import React from 'react';

const Info =()=>{
    return (
      <div className="bg-white-30 br3">
        <p className="f1 center pa3 orange sans-serif">
          Sick? Skip the clinic queue! <br />
          Register now to book an appointment
          </p>
          <div className="ph3">
            <a
              className="f6 link dim ba ph3 pv2 mb2 dib orange bg-near-white mr4"
              href="#0"
            >
              Sign in
            </a>
            <a className="f6 link dim ba ph3 pv2 mb2 dib bg-near-white orange" href="#0">
              Register
            </a>
          </div>        
      </div>
    );
}

export default Info;