import React, { Component } from "react";
import { Form } from "react-formio/lib/components";

class JsonData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
      },
    };
    this.onTextFieldChange = this.onTextFieldChange.bind(this);
  }

  onTextFieldChange = (event) => {
    const { firstName, lastName } = event.data;
    console.log("data", event.data);

    this.setState((prevState) => {
      const formData = {
        ...prevState.formData,
        firstName: firstName,
        lastName: lastName,
      };
      console.log("Updated State:", formData);

      return { formData: formData };
    });
  };

  render() {
    return (
      <div>
        <Form
          form={{
            // display: "form",
            components: [
              {
                input: true,
                key: "firstName",
                tableView: true,
                label: "First Name",
                type: "textfield",
                // onChange: this.onTextFieldChange,
              },
              {
                input: true,
                key: "lastName",
                tableView: true,
                label: "Last Name",
                type: "textfield",
                // onChange: this.onTextFieldChange,
              },
              {
                type: "button",
                label: "Submit",
                key: "submit",
                input: true,
              },
            ],
          }}
          submission={{ data: this.state.formData }}
          // onChange={this.onTextFieldChange}
        />
      </div>
    );
  }
}

export default JsonData;
