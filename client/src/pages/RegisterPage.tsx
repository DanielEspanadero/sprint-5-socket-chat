import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../context/authContext';

import '../css/loginPage.css'

const avatars = [
    '../images/avatars/01.png',
    '../images/avatars/02.png',
    '../images/avatars/03.png',
    '../images/avatars/04.png',
    '../images/avatars/05.png',
    '../images/avatars/06.png',
    '../images/avatars/07.png',
    '../images/avatars/08.png',
    '../images/avatars/09.png',
    '../images/avatars/10.png'
];

export const RegisterPage = () => {

    const { register } = useContext(AuthContext);
    const [avatar, setAvatar] = useState('');

    const [form, setForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        avatar: ''
    });

    const onChange = ({ target }: { target: any }) => {

        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        });

    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password, firstName, lastName } = form;

        if (avatar === '') return Swal.fire('Error', 'Empty avatar', 'error');

        const message = await register(firstName, lastName, email, password, avatar);

        if (message !== true) return Swal.fire('Error', message, 'error');


    }

    const allOk = () => {
        return (
            form.email.length > 0 &&
            form.password.length > 0 &&
            form.firstName.length > 0 &&
            form.lastName.length > 0
        ) ? true : false;
    }


    return (
        <form
            className='login100-form validate-form flex-sb flex-w'
            onSubmit={onSubmit}
        >
            <span className='login100-form-title mb-3'>
                SIGN UP
            </span>

            <div className='wrap-input100 validate-input mb-3'>
                <input
                    className='input100'
                    type='text'
                    name='firstName'
                    placeholder='First name'
                    value={form.firstName}
                    onChange={onChange}

                />
                <span className='focus-input100'></span>
            </div>

            <div className='wrap-input100 validate-input mb-3'>
                <input
                    className='input100'
                    type='text'
                    name='lastName'
                    placeholder='Last name'
                    value={form.lastName}
                    onChange={onChange}

                />
                <span className='focus-input100'></span>
            </div>


            <div className='wrap-input100 validate-input mb-3'>
                <input
                    className='input100'
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={form.email}
                    onChange={onChange}

                />
                <span className='focus-input100'></span>
            </div>


            <div className='wrap-input100 validate-input mb-3'>
                <input
                    className='input100'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={form.password}
                    onChange={onChange}

                />
                <span className='focus-input100'></span>
            </div>


            <div className='avatar_list'>
                {
                    avatars.map((avt, idx) => (
                        <div className={avatar === avt ? 'avatar active_avatar' : 'avatar'} key={idx}>
                            <img
                                src={avt}
                                className='avatar_image'
                                alt=''
                                onClick={() => setAvatar(avt)} />
                        </div>
                    ))
                }

            </div>

            <div className='row mb-3'>
                <div className='col text-right'>
                    <Link to='/auth/login' className='txt1'>
                        Have you already account?
                    </Link>
                </div>
            </div>

            <div className='container-login100-form-btn m-t-17'>
                <button
                    type='submit'
                    className='login100-form-btn'
                    disabled={!allOk()}

                >
                    New account
                </button>
            </div>

        </form>
    )
};