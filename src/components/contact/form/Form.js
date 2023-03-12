import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useForm} from '@formspree/react';
import React from 'react'
import "./form.css"

const FormApp = ()=> {
    const [state, handleSubmit] = useForm("xayzjvql");
    if (state.succeeded) {
        return ;
    }
    return (    
            <Formik 
                initialValues={{
                    name: "",
                    email: "",
                    asunto: "",
                    message: ""
                }}
                validate={(valores)=>{
                    let errores = {};

                    if (!valores.name ) {
                        errores.name ="porfavor ingresa tu nombre.."
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                        errores.name = "el nombre no debe contener simbolos y numeros"
                    }else if (!valores.name.trim()) {
                        errores.name = "no se permite solo espacios"
                    }
                    /* validando el email */
                    if (!valores.email) {
                        errores.email = "el email no puede estar vacio"
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                        errores.email = "el email no es valido"
                    }
                    if (!valores.asunto) {
                        errores.asunto ="escribe algo en el asunto"
                    }else if(!valores.asunto.trim()){
                        errores.asunto ="el asunto no debe contenter solo espacios en blanco"
                    }

                    if (!valores.message) {
                        errores.message = "el mensaje no puede estar vacio "
                    }else if (!valores.message.trim()) {
                        errores.message = "no se permite solo espacios en blanco"
                    }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.message)) {
                        errores.message ="no se permite numeros u otros caracteres solo texto"
                    }
                    return errores
                }}
                onSubmit={(valores,{resetForm})=>{
                    console.log(valores)
                        resetForm();
                }}
            >
                {({errors})=>( 
                    <div className="box-form-app">
                        <Form className="form-app" autoComplete='off' onSubmit={handleSubmit}>
                            <div className="box-grid-form-inputs">
                                <div className="box-form-input">
                                    <label htmlFor="name" className="lb">Nombre</label>
                                    <Field
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        className="input-box"
                                        placeholder="Nombre"
                                    />
                                    <ErrorMessage name="name" component={() => (<div className="error-field">{errors.name}</div>)} />
                                </div>
                                <div className="box-form-input">
                                    <label htmlFor="email" className="lb">Email</label>
                                    <Field
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        className="input-box"
                                        placeholder="correo electronico"
                                    />
                                    <ErrorMessage name="email" component={() => (<div className="error-field">{errors.email}</div>)} />
                                </div>
                            </div>
                            <div className="box-grid-form-block">
                                <div className="box-form-input">
                                    <label htmlFor="asunto" className="lb">asunto</label>
                                    <Field
                                        type="text" 
                                        id="asunto" 
                                        name="asunto" 
                                        className="input-box"
                                        placeholder="asunto"
                                    />
                                    <ErrorMessage name="asunto" component={() => (<div className="error-field">{errors.asunto}</div>)} />
                                </div>
                                <div className="box-input-msg">
                                    <label htmlFor="message" className="lb-msg">Mensaje</label>
                                    <Field name="message" as="textarea" placeholder="Mensaje" className="input-box" />
                                    <ErrorMessage name="message" component={() => (<div className="error-field">{errors.message}</div>)} />
                                </div>
                            </div>
                            <div className="form-btn-send">
                                <button type="submit" className='btn'>enviar</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik> 
    )
}

export default FormApp;