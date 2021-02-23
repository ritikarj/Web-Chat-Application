import React, {useState} from 'react';
import registerImage from '../../assets/images/register2.svg';
import './Auth.scss';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {register} from '../../store/actions/auth';

const Register =({history})=>{
    const dispatch = useDispatch()
    const [firstName,setFirstName] = useState('')
    const [lastName,setlastName] = useState('')
    const [email,setEmail] = useState('')
    const [gender,setGender] = useState('Female')
    const [password,setPassword] = useState('')

    const submitForm = (e)=>{
        e.preventDefault()

        dispatch(register({firstName,lastName,email,gender,password}, history))
    }
    return (
        <div id="auth-container">
            <div id="auth-card">
                <div>
                    <div id="image-section"><img src={registerImage} alt="register"/></div>
                    <div id="form-section">
                        <h2>Create an Account</h2>
                            <form onSubmit={submitForm}>
                            <div className="input-field mb-1">
                                    <input value={firstName}
                                    onChange={e=>setFirstName(e.target.value)} 
                                    required="required" placeholder="First Name"></input>
                                </div>
                                <div className="input-field mb-1">
                                    <input value={lastName}
                                    onChange={e=>setlastName(e.target.value)} 
                                    required="required" placeholder="Last Name"></input>
                                </div>
                                <div className="input-field mb-1">
                                    <input value={email}
                                    onChange={e=>setEmail(e.target.value)} 
                                    required="required" placeholder="Email"></input>
                                </div>
                                <div className="input-field mb-1">
                                    <select value={gender}
                                    onChange={e=>setGender(e.target.value)} 
                                    required="required">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Others</option>
                                    </select>
                                </div>
                                <div className="input-field mb-2">
                                    <input value={password}
                                    onChange={e=>setPassword(e.target.value)} 
                                    required="required" type="password" placeholder="Password"></input>
                                </div>
                                
                                
                                <button>REGISTER</button>

                            </form>
                            <p>Already have an Account?&nbsp;<Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register