// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => (
  <div className="h-screen flex items-center justify-center bg-gray-100">
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
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
      <div className="w-full max-w-xs">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">LOGIN</h1>
        <Form className="space-y-6 bg-white p-8 shadow-md rounded-xl">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <Field
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <Field
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
          </div>
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
          >
            Sign in
          </button>
        </Form>
      </div>
    )}
  </Formik>
</div>
);

export default Login;
