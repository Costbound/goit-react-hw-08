import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

export default function LoginForm() {
  return (
    <Formik initialValues={{ email: "", password: "" }}>
      <Form>
        <div className={css.inputContainer}>
          <label className={css.label} htmlFor="email">
            Email
            <Field className={css.input} name="email" />
          </label>
          <label className={css.label} htmlFor="password">
            Password
            <Field className={css.input} name="password" />
          </label>
        </div>
        <SubmitBtn>Log in</SubmitBtn>
      </Form>
    </Formik>
  );
}
