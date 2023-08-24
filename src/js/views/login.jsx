import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { store, actions } = useContext(Context)

    const makeLogin = async () => {
        let obj = {
            email: email,
            password: password
        }

        let response = await actions.fetchPromise("/login", "POST", obj)

        if (response.ok) {
            let responseJson = await response.json() //
            localStorage.setItem("token", responseJson["token"])
            console.log("Valor del localstorage: ", localStorage.getItem("token"))

        } else {

        }
        return
    }

    return (<>
        <div className="container">
            LOGIN
            <form>
                <div className="row d-flex">
                    <div className="col-6">email</div>
                    <div className="col-6"><input placeholder="email" onChange={(e) => { setEmail(e.target.value) }}></input></div>
                </div>
                <div className="row d-flex">
                    <div className="col-6">password</div>
                    <div className="col-6"><input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }}></input></div>
                </div>
                <button type="button" className="btn btn-primary" onClick={makeLogin}>Login</button>
                <button type="button" onClick={async () => {
                    let response = await actions.fetchPromise("/balance")
                    if (response.ok) {
                        response = await response.json()
                        console.log(response)
                    } else {
                        console.log("error")
                    }
                }}>BALANCE</button>
            </form>

        </div>
    </>)
}

export default Login;