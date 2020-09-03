import React from "react";
import { Jumbotron, Container, Row, Form, Button } from "react-bootstrap";
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

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      comment: "",
    },
    // validate,
    validationSchema: Yup.object({
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
      comment: Yup.string()
        .min(10, "Please input at least 10 charachers")
        .max(2000, "Please keep characters under 2000")
        .required("Comment is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const validateStyle = (field: string) => {
    //@ts-ignore
    return formik.touched[field] && formik.errors[field];
  };

  return (
    <>
      <Row>
        <div className={"text_container_light"}>
          <div className={"text_child_container"}>
            <h3>Contact Form</h3>
            <p>
              Let’s make your plans happen. Leave your details and we’ll call
              you back.
            </p>

            <form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Control
                  className={classNames({
                    "invalid-border": validateStyle("fullName"),
                  })}
                  type="text"
                  placeholder="Full Name"
                  {...formik.getFieldProps("fullName")}
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
                    "invalid-border": validateStyle("comment"),
                  })}
                  type="comment"
                  placeholder="Comment"
                  {...formik.getFieldProps("comment")}
                />
                {formik.touched.comment && formik.errors.comment ? (
                  <div>{formik.errors.comment}</div>
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
