import React from "react";
import { Form } from "react-formio/lib/components";

class JsonData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        number: "",
      },
    }; // this.onTextFieldChange = this.onTextFieldChange.bind(this);
  }

  onTextFieldChange = (event) => {
    // const { firstName, lastName } = event.data;
    console.log("data", event.data);
  };

  onSubmit = (submission) => {
    console.log("Form Submission Data:", submission.data);
    const jsonData = JSON.stringify(submission.data, null, 2);
    console.log("Generated JSON:", jsonData);
  };

  render() {
    return (
      <div>
        <Form
          form={{
            display: "form",
            onSubmit: this.handleSubmit,
            components: [
              {
                input: true,
                key: "firstName",
                tableView: true,
                label: "First Name",
                type: "textfield",
                value: this.state.formData.firstName,
                onChange: this.onTextFieldChange,
              },
              {
                input: true,
                key: "lastName",
                tableView: true,
                label: "Last Name",
                type: "textfield",
                value: this.state.formData.lastName,
                onChange: this.onTextFieldChange,
              },
              {
                input: true,
                key: "number",
                label: "Number",
                type: "number",
                value: this.state.formData.number,
                onChange: this.onTextFieldChange,
              },
              {
                input: true,
                key: "football",
                label: "Football",
                type: "checkbox",
              },
              {
                type: "radio",
                key: "gender",
                label: "Gender",
                input: true,
                name: "gender",
                values: [
                  {
                    label: "Male",
                    value: "male",
                  },
                  {
                    label: "Female",
                    value: "female",
                  },
                ],
              },
              {
                type: "button",
                label: "Submit",
                key: "submit",
                event: "submit",
              },
            ],
          }}
          submission={{ data: this.state.formData }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default JsonData;
