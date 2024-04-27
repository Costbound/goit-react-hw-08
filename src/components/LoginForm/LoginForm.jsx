import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  return (
    <Formik
      initialValues={{ email: "test2test2@mail.com", password: "test2test2" }}
      onSubmit={handleSubmit}
    >
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
