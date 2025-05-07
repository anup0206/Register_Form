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
                    {/* Fullname */}
                    <div className="mb-4">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <Field
                            type="text"
                            id="fullname"
                            name="fullname"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                            name="fullname"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <Field
                            type="text"
                            id="phone"
                            name="phone"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* DOB */}
                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                            Date of Birth
                        </label>
                        <Field
                            type="date"
                            id="dob"
                            name="dob"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                            name="dob"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Gender */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Gender
                        </label>
                        <div className="flex items-center space-x-4">
                            <label className="inline-flex items-center">
                                <Field
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="form-radio"
                                />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="inline-flex items-center">
                                <Field
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="form-radio"
                                />
                                <span className="ml-2">Female</span>
                            </label>
                            <label className="inline-flex items-center">
                                <Field
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    className="form-radio"
                                />
                                <span className="ml-2">Other</span>
                            </label>
                        </div>
                        <ErrorMessage
                            name="gender"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <Field
                            as="textarea"
                            id="address"
                            name="address"
                            rows="3"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                            name="address"
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