import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import classNames from 'classnames';
import { useField } from 'formik';

export const CustomFormControl: FunctionComponent<
  InputHTMLAttributes<any> & FormControlProps & { name: string }
> = ({ name, ...props }) => {
  console.log(name, props);
  const [field, meta, helpers] = useField(name);
  return (
    <div className='mb-4'>
      <Form.Control
        className={classNames({
          'invalid-border': meta.touched && meta.error,
        })}
        type='text'
        //name="fullName"
        placeholder='Full Name'
        // onChange={formik.handleChange}
        // // // onBlur={formik.handleBlur}
        // value={formik.values.fullName}
        // onBlur={formik.handleBlur}

        // Shorthand replaces name, onChange, onBlur
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};
