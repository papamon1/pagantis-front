import React from "react";
import LoginForm from "../components/loginForm";
import { useSelector } from "react-redux";
import { userError } from '../store/reducers/users'

const LoginPage = () =>{


    const error = useSelector(userError)
    
    return (
        <div>            
            <div className="login-header-wrapper">
                <div className="login__header">
                    <img src="/img/p_coin.png" className="login__logo"/>
                    <div>
                        <div className="login__title">PagaCoins</div>
                        <div className="login__title login__title--small">Wallet</div>                    
                    </div>
                </div>
            </div>    

            {
                error && (

                    <div style={{ padding: '16px' }}>                            
                        <div className="transfers-modal__box transfers-modal__box--error" >
                            {error.message}
                        </div>
                    </div>

                )
            }            


            <div className="login__form-container">
                <LoginForm />
            </div>
        </div>
    );

}


export default LoginPage;