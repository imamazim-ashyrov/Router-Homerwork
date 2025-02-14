import { Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const initialValues = {
  name: "",
  email: "",
};

const Forma = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  
  const validateForm = (values) => {
    const errors = {};
    // console.log(values);

    if (!values.name) {
      errors.name = 'Input "Name" obyazatelno';
    }
    if (!values.email) {
      errors.email = 'Input "Email" obyazatelno';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Nepravilnyi format Email";
    }
    if (
      !values.email ||
      !values.name ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false)
    }
    
    return errors;
  };
  
  const [showSpinner, setShowSpinner] = useState(false)
  console.log(showSpinner);
  // const spinner = {
  //   showSpinner
  // }
  
  const showSpinnerHandle = () => {
    // setShowSpinner(true)
    setTimeout(() => {
      setShowSpinner(true)
      console.log("working");
    }, 1000)
  }
  
  return (
    <div>
      <h1>Forma</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
      >
        <Formas>
          <LAbelWithInput>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </LAbelWithInput>

          <LAbelWithInput>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </LAbelWithInput>

          <Link to={"/home"}>
            <button 
            onClick={showSpinnerHandle}
              disabled={disabledButton}
              style={{
                color: "black",
                textDecoration: "none",
                letterSpacing: "10px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              LOGIN
            </button>
          </Link>
        </Formas>
      </Formik>
    </div>
  );
};

export default Forma;

const Formas = styled.form`
  border: 1px solid;
  height: 230px;
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 30px;
  justify-content: space-around;
  background-color: #ff9898;
  border-radius: 15px;

  & input {
    outline: none;
    border: none;
    background-color: #e9e9e9;
    height: 35px;
    border-radius: 10px;
    font-size: 15px;
    width: 265px;
    padding: 0 15px;
  }
  & button {
    padding: 10px;
    border-radius: 10px;
    border: none;
  }
`;
const LAbelWithInput = styled.div`
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  height: 90px;
  align-items: flex-start;
  & label {
    margin-left: 10px;
  }
`;
