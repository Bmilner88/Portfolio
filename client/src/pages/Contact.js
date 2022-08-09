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
                <form id='contact-form' onSubmit={handleSubmit}>
                    <input
                        className="form-input"
                        placeholder="Name"
                        name="name"
                        type="name"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        placeholder="Email"
                        name="email"
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        placeholder="Message"
                        name="message"
                        type="message"
                        id="message"
                        rows='3'
                        value={formState.message}
                        onChange={handleChange}
                    />

                    {message.status && (
                        <div id='messageState'>
                            <p className='message-text'>{message.text}</p>
                        </div>
                    )}

                    <button id='submit' className='btn' data-testid='button' type='submit'>Submit</button>
                </form>
        </section>      
    );
};