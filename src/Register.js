import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className= "framee pa3 br3">        
          <form action="sign-up_submit" method="post" accept-charset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 fw6 clip">Register</legend>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="text">
                  Name
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent w"
                  type="text"
                  name="name"
                  id="Name"
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="Number">
                  ID Number
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent w"
                  type="text"
                  name="idnumber"
                  id="id"
                />
              </div>              
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="email-address">
                  Email address
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure w"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent w"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="mt3">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3">
            <p className="f6 link dim black db">
              Already have an account?
            </p>
            <a href="#0" className="f6 link dim black db">
              Sign in
            </a>
          </div>
          </form>
   
   
    </div>
  );
};

export default Register;
