import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './Login.module.css';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}

function Login() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values: Values) => {
          const errors: Partial<Values> = {};

          // Email validation
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          // Password validation
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
          } else if (!/(?=(?:[^A-Za-z]*[A-Za-z]){2})/.test(values.password)) {
            errors.password = 'Password must contain at least two letters';
          }

          // Confirm Password validation
          if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
          } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords do not match';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={style.wrapper}>
            <div className={style.container}>
              <label htmlFor="email" className={style.label}>Email</label>
              <div className={style.errorcontainer}>
                <Field type="email" name="email" className={style.field} />
                <ErrorMessage name="email" component="div" className={style.error}/>
              </div>
            </div>

            <div className={style.container}>
              <label htmlFor="password" className={style.label}>Password</label>
              <div className={style.errorcontainer}>
                <Field type="password" name="password" className={style.field} />
                <ErrorMessage name="password" component="div" className={style.error} />
              </div>
            </div>

            <div className={style.container}>
              <label htmlFor="confirmPassword" className={style.label}>Confirm Password</label>
              <div className={style.errorcontainer}>
                <Field type="password" name="confirmPassword" className={style.field}/>
                <ErrorMessage name="confirmPassword" component="div" className={style.error}/>
              </div>
            </div>

            <button className={style.button} type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;