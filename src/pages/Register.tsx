import { useState } from "react"
import type { userForm } from "../assets/types/Types"
import { handlRegister } from "../redux/Actions/UserActions"
import { useDispatch } from "react-redux"

import { handleChange } from "../utils/utils"
import type { AppDispatch } from "../redux/Store"


const Register = () => {

    const [form, setForm] = useState<userForm>({
        username: "",
        email: "",
        password: ""
    })
    
    const dispatch = useDispatch<AppDispatch>()


    return (
        <div>

            <form>

                <input
                    placeholder="Username"
                    value={form.username}
                    onChange={(e) => { handleChange(e, setForm) }}
                    name="username"
                    type="text"
                />

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

                <button onClick={(e) => { dispatch(handlRegister(e, form)) }}>   Register </button>

            </form>
        </div>
    )
}

export default Register