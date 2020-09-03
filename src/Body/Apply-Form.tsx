import React, { useState } from "react";
import { Jumbotron, Container, Form, Row, Button } from "react-bootstrap";
import * as Yup from "yup";
import {
  Formik,
  useFormik,
  FormikHelpers,
  FormikProps,
  Field,
  FieldProps,
} from "formik";
import classNames from "classnames";
import "./Body.scss";

export default function ApplyForm() {
  const [state, setState] = useState({
    fullName: false,
  });

  const validate = (values: any) => {
    const errors = {
      fullName: "",
      email: "",
      mobileNumber: "",
      loanAmount: "",
      businessStage: "",
      term: "",
    };
    if (!values.fullName) {
      errors.fullName = "Required";
    } else if (values.fullName.length > 15) {
      errors.fullName = "Must be 15 characters or less";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      loanAmount: "",
      businessStage: "",
      term: "",
    },
    // validate,
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Must be 3 characters")
        .required("Full name is required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      mobileNumber: Yup.string()
        .min(10, "Must be 10 digits")
        .max(10, "Must be 10 digits")
        .required("Mobile number is required"),
      loanAmount: Yup.string()
        .min(4, "Loan size must be above $5,000")
        .max(8, "Loan size must be below $10,000,000")
        .required("Loan amount is required"),
      businessStage: Yup.string().required("Please select an option"),
      term: Yup.string().required("Please select an option"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  let con = false;

  const validateStyle = (field: string) => {
    //@ts-ignore
    return formik.touched[field] && formik.errors[field];
  };

  return (
    <>
      <Row>
        <div className={"text_container_light"}>
          <div className={"text_child_container"}>
            <h3>Start Your Application Today</h3>
            <p>
              Why wait? Find out whether you are eligible in a few easy steps.
            </p>

            <form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Control
                  className={classNames({
                    "invalid-border": validateStyle("fullName"),
                  })}
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={formik.handleChange}
                  // // onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  onBlur={formik.handleBlur}

                  // Shorthand replaces name, onChange, onBlur
                  // {...formik.getFieldProps("fullName")}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div>{formik.errors.fullName}</div>
                ) : null}
                <br />
                <Form.Control
                  className={classNames({
                    "invalid-border": validateStyle("mobileNumber"),
                  })}
                  type="number"
                  placeholder="Mobile Number"
                  {...formik.getFieldProps("mobileNumber")}
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                  <div>{formik.errors.mobileNumber}</div>
                ) : null}
                <br />
                <Form.Control
                  className={classNames({
                    "invalid-border": validateStyle("email"),
                  })}
                  type="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <br />
                <Form.Control
                  className={classNames({
                    "invalid-border": validateStyle("loanAmount"),
                  })}
                  type="number"
                  placeholder="Loan Amount"
                  {...formik.getFieldProps("loanAmount")}
                />
                {formik.touched.loanAmount && formik.errors.loanAmount ? (
                  <div>{formik.errors.loanAmount}</div>
                ) : null}
                <br />
                <Form.Control
                  className={classNames({
                    "invalid-border": validateStyle("businessStage"),
                  })}
                  as="select"
                  {...formik.getFieldProps("businessStage")}
                >
<<<<<<< HEAD
                  <option></option>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <br />
                <Form.Control as="select" required>
>>>>>>> parent of b8ad212... update
=======
                  <option ></option>
>>>>>>> parent of bb731a1... update
=======
>>>>>>> parent of 3d830c8... update
=======
>>>>>>> parent of 3d830c8... update
                  <option>Business not started</option>
                  <option>Business trading within 1 year</option>
                  <option>Business trading 1 to 3 year</option>
                  <option>Business trading 3 year+</option>
                </Form.Control>
                {formik.touched.businessStage && formik.errors.businessStage ? (
                  <div>{formik.errors.businessStage}</div>
                ) : null}
                <br />
                <Form.Control
                  className={classNames({
                    "invalid-border": validateStyle("term"),
                  })}
                  as="select"
                  {...formik.getFieldProps("term")}
                >
                  <option></option>
                  <option>Term 1 year</option>
                  <option>Term 2 years</option>
                  <option>Term 3 years+</option>
                </Form.Control>
                {formik.touched.term && formik.errors.term ? (
                  <div>{formik.errors.term}</div>
                ) : null}
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Row>
    </>
  );
}
