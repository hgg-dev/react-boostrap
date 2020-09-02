import React, { FunctionComponent, InputHTMLAttributes } from "react";
import { Form, FormControlProps } from "react-bootstrap";
import classNames from "classnames";
import { useField } from "formik";
import { matchPath } from "react-router-dom";

export const CustomSelect: FunctionComponent<
  InputHTMLAttributes<any> &
    FormControlProps & {
      name: string;
      options?: { label: string; value: string }[];
    }
> = ({ name, options, ...props }) => {
  const [field, meta, helper] = useField(name);

  return (
    <>
      <Form.Control
        className={classNames({ "invalid-border": meta.touched && meta.error })}
        placeholder={props.placeholder}
        {...props}
        {...field}
      >
        {options?.map((r) => (
          <option value={r.value}>{r.label}</option>
        ))}
      </Form.Control>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      <br />
    </>
  );
};
