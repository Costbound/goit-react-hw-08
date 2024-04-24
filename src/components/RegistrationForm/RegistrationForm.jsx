import SubmitBtn from "../SubmitBtn/SubmitBtn";
import css from "./RegistrationForm.module.css";
import { Formik, Field, Form } from "formik";

export default function RegistrationForm() {
  return (
    <Formik initialValues={{ name: "", email: "", password: "" }}>
      <Form>
        <div className={css.inputContainer}>
          <label className={css.label} htmlFor="name">
            Name
            <Field className={css.input} name="name" />
          </label>
          <label className={css.label} htmlFor="email">
            Email
            <Field className={css.input} name="email" />
          </label>
          <label className={css.label} htmlFor="password">
            Password
            <Field className={css.input} name="password" />
          </label>
        </div>
        <SubmitBtn>Register</SubmitBtn>
      </Form>
    </Formik>
  );
}
