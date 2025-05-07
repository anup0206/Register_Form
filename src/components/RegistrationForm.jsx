// src/components/RegistrationForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
    // Define initial values
    const initialValues = {
        fullname: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        password: "",
        address: "",
    };

    // Validation schema using Yup
    const validationSchema = Yup.object({
        fullname: Yup.string()
            .required("Full Name is required")
            .min(4, "Full Name must be at least 4 characters")
            .max(40, "Full Name cannot exceed 40 characters")
            .matches(/^[a-zA-Z\s]+$/, "Only alphabets and spaces allowed"),

        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),

        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

        dob: Yup.date().required("Date of Birth is required").nullable(),

        gender: Yup.string().required("Gender is required"),

        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),

        address: Yup.string().required("Address is required"),
    });

    // Handle submit with resetForm
    const onSubmit = (values, { resetForm }) => {
        console.log("Form Data Submitted:", values);
        alert("Form submitted successfully!");

        // Reset the form after submission
        resetForm();
    };


    return (
        <div className="max-w-lg mx-auto m-10 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-6 text-center">Register Form</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    {/* Define Fields */}
                    {[
                        {
                            name: 'fullname',
                            label: 'Full Name',
                            type: 'text',
                            placeholder: 'Enter your full name',
                        },
                        {
                            name: 'email',
                            label: 'Email',
                            type: 'email',
                            placeholder: 'Enter your email',
                        },
                        {
                            name: 'phone',
                            label: 'Phone',
                            type: 'text',
                            placeholder: 'Enter your phone number',
                        },
                        {
                            name: 'dob',
                            label: 'Date of Birth',
                            type: 'date',
                        },
                        {
                            name: 'password',
                            label: 'Password',
                            type: 'password',
                            placeholder: 'Enter your password',
                        },
                        {
                            name: 'address',
                            label: 'Address',
                            type: 'textarea',
                            placeholder: 'Enter your address',
                        },
                    ].map((field) => (
                        <div key={field.name} className="mb-4">
                            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                                {field.label}
                            </label>

                            {field.type === 'textarea' ? (
                                <Field
                                    as="textarea"
                                    id={field.name}
                                    name={field.name}
                                    rows="3"
                                    placeholder={field.placeholder}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            ) : (
                                <Field
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            )}

                            <ErrorMessage
                                name={field.name}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                    ))}

                    {/* Gender Radio Buttons */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        <div className="flex items-center space-x-4">
                            {[
                                { value: 'male', label: 'Male' },
                                { value: 'female', label: 'Female' },
                                { value: 'other', label: 'Other' },
                            ].map((option) => (
                                <label key={option.value} className="inline-flex items-center">
                                    <Field
                                        type="radio"
                                        name="gender"
                                        value={option.value}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">{option.label}</span>
                                </label>
                            ))}
                        </div>
                        <ErrorMessage
                            name="gender"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Register
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;