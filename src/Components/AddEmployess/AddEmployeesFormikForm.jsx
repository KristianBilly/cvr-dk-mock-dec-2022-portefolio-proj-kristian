import { Formik, Field, Form } from "formik";

export const AddEmployeesFormikForm = ({ handleFormikFormSubmit }) => (
  <Formik
    initialValues={{
      name: "",
      title: "",
    }}
    onSubmit={(values, { resetForm }) => {
      handleFormikFormSubmit(values);
      resetForm();
    }}
  >
    <Form className="form-container">
      <div className="form-control">
        <Field
          className="text-input "
          name="name"
          placeholder="Insert name..."
        />
        <Field
          className="text-input "
          name="title"
          placeholder="Insert title..."
        />
        <button className="submit-btn" type="submit">
          Add Employee (Formik)
        </button>
      </div>
    </Form>
  </Formik>
);
