import React, {useState} from 'react';
import loginImage from '../../assets/images/login1.svg';
import './Auth.scss';
import {Link} from 'react-router-dom';
import AuthService from '../../services/authService';
import {useDispatch} from 'react-redux';
import {login} from '../../store/actions/auth';

const Login =( { history } ) => {
    const dispatch = useDispatch()
    const [email, setEmail]= useState('ritikarj62@gmail.com')
    const [password,setPassword]= useState('BHAKTH')
    const submitForm = (e)=>{
        e.preventDefault()

        dispatch(login({email,password}, history))

        // AuthService.login({email,password})
        //     .then(res => {
        //         console.log(res)
        //     })
        // axios.post('http://127.0.0.1:3001/Login', {email, password})
        // .then(res =>{
            
        //     console.log("res",res);
        // }).catch(err=>{
        //     console.log('err',err);
        // })
    }
    return (
        <div id="auth-container">
            <div id="auth-card">
                <div className="card-shadow">
                    <div id="image-section"><img src={loginImage} alt="login"/></div>
                    <div id="form-section">
                        <h2>Welcome Back!</h2>
                        <form onSubmit={submitForm}>
                            <div className="input-field mb-1">
                                <input type="text"
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)} 
                                    placeholder="Email"
                                    required="required">

                                    </input>
                            </div>
                            <div className="input-field mb-2">
                                <input type="password"
                                    value={password} 
                                    onChange={e=>setPassword(e.target.value)} 
                                    placeholder="Password">

                                </input>
                            </div>
                            <button>LOGIN</button>

                        </form>
                        <p>Don't have an Account?&nbsp;<Link to="/register">Register Here!</Link></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login