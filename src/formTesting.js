import React, { Component } from "react";
import { Link } from "react-router";
import { Formio } from "react-formio";

// import "./app.css";

import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
import "bootstrap/dist/css/bootstrap.css";

class FormTesting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.inc = this.inc.bind(this);
  }

  inc(d) {
    this.setState(d);
  }

  componentDidMount() {
    Formio.builder(
      document.getElementById("builder"),
      {},
      {
        builder: {
          premium: false,
          data: false,
          layout: false,
        },
      }
    ).then((builder) => {
      // Create the form renderer
      Formio.createForm(document.getElementById("formio"), builder.form).then(
        (instance) => {
          var json = document.getElementById("json");

          // Form Renderer Event Handling
          instance.on("change", function () {
            instance.form.components.data = instance.submission.data;
            json.innerHTML = "";
            json.appendChild(
              document.createTextNode(
                JSON.stringify(instance.form.components, null, 4)
              )
            );
            console.log("instance", instance);
            console.log(instance.submission.data);
          });
          // Form Builder Event Handling

          builder.on("change", (schema) => {
            if (schema.components) {
              instance.resetValue();
              instance.form = schema;
            }
          });
        }
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <div class="card card-body bg-light">
            <div id="builder"></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ margin: "20px 0px" }}>Rendered Form</h4>
            <Link to="/render-form">
              <button>Render Form: {this.state.value}</button>
            </Link>
          </div>

          <div class="card card-body bg-light">
            <div id="formio"></div>
          </div>
          <h4>Submission Data</h4>
          <div class="card card-body bg-light jsonviewer">
            <pre id="json"></pre>
          </div>
        </div>
      </div>
    );
  }
}

export default FormTesting;
