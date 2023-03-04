import React from 'react'
import Form from './form/Form';

function Contact() {
    return (
        <section className="section-contact-form container" id='contact'>
            <div className="section-title">
                <h4 className="title">contactame</h4>
            </div>
            <div className="box-form-app">
                <Form/>
            </div>
        </section>
    )
}

export default Contact;