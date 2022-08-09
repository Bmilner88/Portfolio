import React, { useState } from 'react';

export default function Contact(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    let [message, setMessage] = useState({ status: false, text: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formState)
        })
        .then(res => res.json())
        .then(async res => {
            const resData = await res;
            if(resData.status === 'success') {
                console.log('Message sent');

                setMessage ({
                    status: true,
                    text: 'Message sent!'
                });

                setFormState({
                    name: '',
                    email: '',
                    message: ''
                });
            } else if (res.status === 'fail') {
                setMessage({
                    status: true,
                    text: res.message
                });
                console.log(`Message failed to send: ${res.message}`)
            };
        });
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    return(
        <section className='page'>
            <h2 className='contact'>Contact Me</h2>
                <form id='contact-form' className='container col-lg-6 offset-lg-3' onSubmit={handleSubmit}>
                    <div className='row justify-content-center'>
                    <div className='form-group'>
                        <label for='name'>Name</label>
                        <input
                            className='form-control'
                            placeholder='John Doe'
                            id='name'
                            value={formState.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label for='email'>Email</label>
                        <input
                            className='form-control'
                            placeholder='name@example.com'
                            type='email'
                            id='email'
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className='form-group'>
                        <label for='message'>Message</label>
                        <textarea
                            className='form-control'
                            placeholder='Message...'
                            id='message'
                            rows='10'
                            value={formState.message}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <button id='submit' className='btn' data-testid='button' type='submit'>Submit</button>
                    </div>
                </form>
                    {message.status && (
                        <div id='messageState'>
                            <p className='message-text'>{message.text}</p>
                        </div>
                    )}
        </section>      
    );
};