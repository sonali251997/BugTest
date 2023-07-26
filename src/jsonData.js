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

    // this.setState((prevState) => {
    //  const formData = {
    //    ...prevState.formData,
    //    firstName: firstName,
    //    lastName: lastName,
    //  };
    // return { formData: formData };
    // });
    // this.setState((prevState) => ({
    //  ...prevState.formData,
    //  formData: {
    //    firstName: firstName,
    //    lastName: lastName,
    //  },
    // }));

    // console.log("Updated State:", this.state.formData);
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

// import React, { Component } from "react";
// import { Form } from "react-formio/lib/components";

// class JsonData extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: {
//         firstName: "",
//         lastName: "",
//       },
//     };
//     this.onTextFieldChange = this.onTextFieldChange.bind(this);
//   }

//   onTextFieldChange = (event) => {
//     const { firstName, lastName } = event.data;
//     console.log("data", event.data);

//     this.setState((prevState) => {
//       const formData = {
//         ...prevState.formData,
//         firstName: firstName,
//         lastName: lastName,
//       };
//       console.log("Updated State:", formData);

//       return { formData: formData };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Form
//           form={{
//             display: "form",
//             components: [
//               {
//                 input: true,
//                 key: "firstName",
//                 tableView: true,
//                 label: "First Name",
//                 type: "textfield",
//                 // onChange: this.onTextFieldChange,
//               },
//               {
//                 input: true,
//                 key: "lastName",
//                 tableView: true,
//                 label: "Last Name",
//                 type: "textfield",
//                 // onChange: this.onTextFieldChange,
//               },
//               {
//                 type: "button",
//                 label: "Submit",
//                 key: "submit",
//                 input: true,
//               },
//             ],
//           }}
//           submission={{ data: this.state.formData }}
//           // onChange={this.onTextFieldChange}
//         />
//       </div>
//     );
//   }
// }

// export default JsonData;
