import React, { Component } from "react";
import { FormBuilder as FormBuilderIo } from "react-formio";
// import JsonData from "./jsonData";
import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
import { browserHistory } from "react-router";

class FormIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "", // Initialize the name field with an empty string
      },
    };
  }

  handleNameChange = (event) => {
    console.log("event",event)
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value, // Update the 'name' field in the form data with the entered value
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Perform any form submission logic here, e.g., sending data to the server
    console.log("Form data submitted:", this.state.formData);
  };

  handleClick = () => {
    browserHistory.push("/next-page");
  };

  render() {
    return (
      <div className="App">
        <h2>Form builder</h2>

        <div id="formio"></div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleNameChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        <FormBuilderIo
          form={{
            onsubmit:this.handleSubmit,
            display: "form",
            components: [
              {
                type: "textfield",
                label: "Name",
                key: "name",
                input: true,
                value:this.state.formData.name,
                onChange:this.handleNameChange
               
              },
              
              {
                type: "button",
                label: "Submit",
                key: "submit",
                input: true,
                // value:this.state.formData.name,
                // onChange:this.handleNameChange
              },
              
            ],
          }}
          onChange={(schema) => console.log(JSON.stringify(schema))}
          options={{
            builder: {
              advanced: false,
              data: false,
              custom: {
                title: "Pre-Defined Fields",
                weight: 10,
                components: {
                  firstName: {
                    title: "First Name",
                    key: "firstName",
                    icon: "terminal",
                    schema: {
                      label: "First Name",
                      type: "textfield",
                      key: "firstName",
                      input: true,
                    },
                  },
                  lastName: {
                    title: "Last Name",
                    key: "lastName",
                    icon: "terminal",
                    schema: {
                      label: "Last Name",
                      type: "textfield",
                      key: "lastName",
                      input: true,
                    },
                  },
                },
              },
            },
          }}
        />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default FormIndex;
