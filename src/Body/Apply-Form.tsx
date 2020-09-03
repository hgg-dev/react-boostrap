import React, { useState, Fragment } from "react";
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
import { CustomFormControl } from "./Components/CustomFormControl/CustomFormControl";
import { CustomSelect } from "./Components/CustomFormControl/CustomSelect";
import { selectorList } from "./Components/SelectorList";

export default function ApplyForm() {
  return (
    <>
      <Row>
        <div className={"text_container_light"}>
          <div className={"text_child_container"}>
            <h3>Start Your Application Today</h3>
            <p>
              Why wait? Find out whether you are eligible in a few easy steps.
            </p>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                mobileNumber: "",
                loanAmount: "",
                businessStage: "",
                term: "",
              }}
              validationSchema={Yup.object().shape({
                fullName: Yup.string()
                  .min(3, "Must be 3 characters")
                  .required("Full name is required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
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
              })}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {(formikProps) => {
                return (
                  <form onSubmit={formikProps.handleSubmit}>
                    <Fragment>
                      <Form.Group>
                        <CustomFormControl
                          name="fullName"
                          type="text"
                          placeholder="Full Name"
                        />
                        <CustomFormControl
                          name="mobileNumber"
                          type="number"
                          placeholder="Mobile Number"
                        />
                        <CustomFormControl
                          name="loanAmount"
                          type="number"
                          placeholder="Loan Amount"
                        />
                        <CustomSelect
                          name="businessStage"
                          as="select"
                          options={selectorList.businessStage}
                        />
                        <CustomSelect
                          name="term"
                          as="select"
                          options={selectorList.term}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Fragment>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Row>
    </>
  );
}
