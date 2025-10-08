import { useState } from "react"
import type { userForm } from "../assets/types/Types"
import { handlLogin } from "../redux/Actions/UserActions"
import { useDispatch } from "react-redux"

import { handleChange } from "../utils/utils"
import type { AppDispatch } from "../redux/Store"


const Login = () => {

    const [form, setForm] = useState<userForm>({
        email: "",
        password: ""
    })
    
    const dispatch = useDispatch<AppDispatch>()


    return (
        <div>

            <form>

             

                <input
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => { handleChange(e, setForm) }}
                    name="email"
                    type="email"
                />

                <input
                    placeholder="password"
                    value={form.password}
                    onChange={(e) => { handleChange(e, setForm) }}
                    name="password"
                    type="password"
                />

                <button onClick={(e) => { dispatch(handlLogin(e, form)) }}>   Register </button>

            </form>
        </div>
    )
}

export default Login