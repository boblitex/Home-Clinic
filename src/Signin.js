import React, { useState, useEffect} from "react";
import "./input.css";
import { useToast, Button } from "@chakra-ui/core";
import {withRouter, Redirect} from 'react-router-dom';

const Signin = () => {
  const toast = useToast();
  const [ isLoading, setisLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    proceed: false
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {}, [isLoading]);

  const signInUser = async users => {
    try {
      let response = await fetch("http://localhost:8080/api/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
      });
      let status = await response.json();
      if (await status.error) {
        setValues({ ...values, error: status.error });
        toast({
          title: "An error occurred.",
          description: status.error,
          status: "error",
          duration: 5000,
          isClosable: true
        });
        setisLoading(
          (Button.defaultProps = {
            isLoading: false
          })
        );
      } else if (await status.success) {
        setValues({
          ...values,
          email: "",
          password: "",
          error: "",
          proceed: true
        });
        toast({
          title: "Sign in successful",
          description: `Book your appointment now`,
          status: "success",
          duration: 5000,
          isClosable: true
        });
        setisLoading(
          (Button.defaultProps = {
            isLoading: false
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  const { email, password, proceed } = values;

  const onSignIn = () => {
    setisLoading(
      (Button.defaultProps = {
        isLoading: true
      })
    );
    signInUser({ email, password });
  };
  const handleFocus = () => {
    setisLoading(
      (Button.defaultProps = {
        isLoading: false
      })
    );
  };
  const redirect = ()=>{
    if (proceed){
      return <Redirect to = "/dashboard"/>
    }
  }

  return (
    <article className=" frame br3 ba border-blue b--black-10 mv4 w-100 w-50-m w-25-l mw8 shadow-6 center">
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={handleChange("email")}
                onFocus={handleFocus}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                value={email}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleChange("password")}
                onFocus={handleFocus}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                value={password}
              />
            </div>
          </fieldset>
          <div className="">
            <Button
              onClick={onSignIn}
              loadingText="Submitting"
              variantColor="black"
              variant="outline"
            >
              Sign In
            </Button>
          </div>
        </form>
      </main>
      {redirect()}
    </article>
  
  );
};

export default withRouter(Signin);
