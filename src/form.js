import React, { Component } from "react";

import { Form, FormBuilder, Formio } from "react-formio";

// import JsonData from "./jsonData";
import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
import { browserHistory } from "react-router";

const FormIndex = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any form submission logic here, e.g., sending data to the server
    console.log("Form data submitted:", this.state.formData);
  };
  const onChangeValue = (component, value) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [component.key]: value,
      },
    }));
  };

  const onSubmit = (submission) => {
    console.log("Form Submission Data:", submission.data);
    const jsonData = JSON.stringify(submission.data, null, 2);
    console.log("Generated JSON:", jsonData);
  };
  const handleClick = () => {
    browserHistory.push("/next-page");
  };

  const handleFormSubmit = (submission) => {
    console.log("Form Data on Submit:", submission.data);
    // Handle form data on submit (e.g., send to server, perform actions, etc.)
  };

  const initialForm = {
    display: "form",
    components: [
      {
        type: "textfield",
        label: "First Name",
        key: "firstName",
        input: true,
        inputType: "text",
      },
      {
        type: "textfield",
        label: "Last Name",
        key: "lastName",
        input: true,
        inputType: "text",
      },
      // Add more form components as needed...
    ],
  };

  return (
    <div className="App">
      <h2>Form builder</h2>

      <div id="formio"></div>

      <FormBuilder
        form={{
          display: "form",
          components: [
            {
              input: true,
              key: "textField",
              tableView: true,
              label: "First Name",
              type: "textfield",
              placeholder: "sonali",
              disabled: true,
            },
            {
              input: true,
              key: "textField",
              tableView: true,
              label: "Last Name",
              type: "textfield",
            },
            {
              input: true,
              key: "number",
              tableView: true,
              label: "Number",
              type: "number",
              numberField: 234,
            },
          ],
        }}
        onChange={(schema) => console.log(schema)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default FormIndex;
