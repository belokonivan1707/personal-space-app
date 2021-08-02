import { Formik, Field, Form } from 'formik';
import style from './styles.module.css';

interface InitialValues {
  email: string;
  password: string;
}

// interface Errors {
//   email?: string;
//   password?: string;
// }

const validateEmail = (value: string) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const validatePassword = (value: string) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const LogInForm = () => {
  const initial: InitialValues = {
    email: '',
    password: '',
  };

  return (
    <div>
      <Formik
        initialValues={initial}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={style.form}>
            {/* {console.log(isValidating)} */}
            <label htmlFor="email">Email</label>
            <Field
              className={style.input}
              id="email"
              name="email"
              placeholder="email"
              type="email"
              validate={validateEmail}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label htmlFor="password">password</label>
            <Field
              className={style.input}
              id="password"
              name="password"
              placeholder="password"
              validate={validatePassword}
            />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <button className={style.submit} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LogInForm;
