import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import AnimatedSection from './AnimatedSection';

const ContactSchema = Yup.object().shape({
  from_name: Yup.string().required('Required'),
  from_email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required')
});

const ContactUs: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <div id='Contact' >
      <div className="flex flex-col sm:flex-row items-center py-12 w-full">
      <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
        <div className="text-center md:ml-6 w-full">
          <h2 className="text-2xl xs:text-3xl md:text-5xl font-bold my-2">Get in Touch</h2>
          <p className="text-md xs:text-lg mb-4">We're here to help! Reach out to us with any questions or to learn more about our services.</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 justify-center items-center">
      <AnimatedSection>
        <Formik
          initialValues={{ from_name: '', from_email: '', message: '' }}
          validationSchema={ContactSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            emailjs.send('service_13nz44b', 'template_8df9w4h', values, 'yMt0kfWlxIRn555es')
              .then(result => {
                console.log('Email sent: ', result.text);
                setSuccessMessage("Thank you for your message, we will be in touch soon!");
                resetForm();
                setSubmitting(false);
              }, error => {
                console.log('Email sending error: ', error.text);
                setSuccessMessage('');
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="rounded px-8 pt-6 pb-8 mb-4 text-start">
              <div className="h-24">
                <label htmlFor="from_name" className="block text-start text-gray-900 text-sm font-bold mb-2">Name</label>
                <Field type="text" name="from_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="from_name" component="div" className="text-red-500 text-xs" />
              </div>
              <div className="h-24">
                <label htmlFor="from_email" className="block text-start text-gray-900 text-sm font-bold mb-2">Email</label>
                <Field type="email" name="from_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="from_email" component="div" className="text-red-500 text-xs" />
              </div>
              <div className="h-40">
                <label htmlFor="message" className="block text-start text-gray-900 text-sm font-bold mb-2">Message</label>
                <Field as="textarea" name="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                <ErrorMessage name="message" component="div" className="text-red-500 text-xs" />
              </div>
              <div className='h-12'>
                {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
              </div>
              <div className="flex text-start items-center justify-between">
                <button type="submit" disabled={isSubmitting} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        </AnimatedSection>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;

