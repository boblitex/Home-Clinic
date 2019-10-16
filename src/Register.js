import React, { useEffect, useState } from "react";
import "./Register.css";
import { useToast, Button} from "@chakra-ui/core";

const Register = () => {
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    idno: "",
    email: "",
    password: "",
    error: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {}, [isLoading]);

  const signUp = async users => {
    try {
      let response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
      });
      let status = await response.json();
      if  (await status.error) {
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
          name: "",
          idno: "",
          email: "",
          password: "",
          error: ""
        })
        toast({
          title: "Account created.",
          description: `To continue, please Sign in`,
          status: "success",
          duration: 10000,
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
  const { name, email, idno, password} = values;

  const onRegister = () => {
    setisLoading(
      (Button.defaultProps = {
        isLoading: true
      })
    );
    signUp({ name, email, idno, password });
  };
  const handleFocus = () => {
    setisLoading(
      (Button.defaultProps = {
        isLoading: false
      })
    );
  };

  return (
    <div className="framee pa3 br3">
      <form method="post" acceptCharset="utf-8">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="ph0 mh0 fw6 clip">Register</legend>
          <div className="mt3">
            <label className="db b lh-copy f6 " htmlFor="text">
              Name
            </label>
            <input
              onFocus={handleFocus}
              onChange={handleChange("name")}
              className="b pa2 input-reset ba bg-transparent w"
              type="text"
              name="name"
              id="Name"
              value ={name}
            />
          </div>
          <div className="mt3">
            <label className="db b lh-copy f6 b" htmlFor="Number">
              ID Number
            </label>
            <input
              onFocus={handleFocus}
              onChange={handleChange("idno")}
              className="b pa2 input-reset ba bg-transparent w"
              type="text"
              name="idnumber"
              id="id"
              value ={idno}
            />
          </div>
          <div className="mt3">
            <label className="db b lh-copy f6 b" htmlFor="email-address">
              Email address
            </label>
            <input
              onFocus={handleFocus}
              onChange={handleChange("email")}
              className="pa2 input-reset ba bg-transparent w-100 measure w"
              type="email"
              name="email-address"
              id="email-address"
              value ={email}
            />
          </div>
          <div className="mt3">
            <label className="db b lh-copy f6 b" htmlFor="password">
              Password
            </label>
            <input
              onFocus={handleFocus}
              onChange={handleChange("password")}
              className="b pa2 input-reset ba bg-transparent w"
              type="password"
              name="password"
              id="password"
              value ={password}
            />
          </div>
        </fieldset>
        <div className="mt3">
          <Button
            onClick={onRegister}
            loadingText="Submitting"
            variantColor="black"
            variant="outline"
            style={{ cursor: "pointer" }}
          >
            Register
          </Button>
        </div>
        <div className="lh-copy mt3">
          <p className="f6 link dim black db">Already have an account?</p>
          <a href="#0" className="f6 link dim black db b underline-hover">
            Sign in
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
