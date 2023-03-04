import React from 'react'
import "./form.css"

function Form() {
    return (
        <div className="box-form-app">
            <form action="#" className="form-app" autoComplete='off'>
                <div className="box-grid-form-inputs">
                    <div className="box-form-input">
                        <label htmlFor="name" className="lb">Nombre</label>
                        <input type="text" name="name" id="name" placeholder='nombre' className='input-box' />
                        <span className="error-field">Error message</span>
                    </div>
                    <div className="box-form-input">
                        <label htmlFor="email" className="lb">Email</label>
                        <input type="email" name="email" id="email" placeholder='correo electronico' className='input-box' />
                        <span className="error-field">Error message</span>
                    </div>
                </div>
                <div className="box-grid-form-block">
                    <div className="box-form-input">
                        <label htmlFor="asunto" className="lb">asunto</label>
                        <input type="text" name="asunto" id="asunto" placeholder='asunto' className='input-box' />
                        <span className="error-field">Error messsage</span>
                    </div>
                    <div className="box-input-msg">
                        <label htmlFor="message" className="lb-msg">Mensaje</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Mensaje' className='input-box'></textarea>
                        <span className="error-field">Error message</span>
                    </div>
                </div>
                <div className="form-btn-send">
                    <button type="submit" className='btn'>enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;