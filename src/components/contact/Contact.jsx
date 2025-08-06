import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            subject: Yup.string()
                .required('Subject is required'),
            message: Yup.string()
                .required('Message is required')
        }),
        onSubmit: values => {
            var yourEmail = "albert.sahakyan567@gmail.com";
            var message = "Name: " + values.name + "\nEmail: " + values.email + "\nSubject: " + values.subject + "\nMessage: " + values.message;
            var subject = "New Contact";
            var mailtoLink = "mailto:" + yourEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
            window.location.href = mailtoLink;
        }
    });

    return (
        <div id="contact" className='pt-[80px] pb-[50px] bg-gray-900'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] items-center w-[80%] mx-auto'>
                <div>
                    <p className='heading_mini'>Get in Touch</p>
                    <h1 className='heading_primary'>Let&apos;s make your <span className='text-yellow-400'>Brand</span> brilliant</h1>
                    <p className='text-[15px] mt-[15px] text-white opacity-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='mt-[30px] mb-[30px]'>
                        <a className='text-[30px] text-yellow-400 underline font-semibold' href="tel:+37498241384">+(374)99 34 78 45</a>
                    </div>
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[15px] items-center'>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    className='py-[7px] px-4 outline-none text-white w-[100%] rounded-md bg-gray-800'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className='text-red-500 text-sm'>{formik.errors.name}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    className='py-[7px]  px-4 outline-none text-white w-[100%] rounded-md bg-gray-800'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='text-red-500 text-sm'>{formik.errors.email}</div>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="subject"
                                placeholder='Subject'
                                className='py-[7px] mt-[15px] px-4 outline-none text-white w-[100%] rounded-md bg-gray-800'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject}
                            />
                            {formik.touched.subject && formik.errors.subject ? (
                                <div className='text-red-500 text-sm'>{formik.errors.subject}</div>
                            ) : null}
                        </div>
                        <div>
                            <textarea
                                rows={4}
                                name="message"
                                placeholder='Message'
                                className='py-[7px] mt-[15px] px-4 outline-none text-white w-[100%] rounded-md bg-gray-800'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className='text-red-500 text-sm'>{formik.errors.message}</div>
                            ) : null}
                        </div>
                        <button
                            type="submit"
                            className='py-[7px] mt-[15px] px-4 outline-none text-white w-[100%] rounded-md bg-blue-700 hover:bg-blue-800'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;