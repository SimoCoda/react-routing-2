import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { UiHeader } from '../components/ui/UiHeader'
import { UiInput } from '../components/ui/UiInput'
import { UiButton } from '../components/ui/UiButton'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();

    const [formError, setFormError] = useState({
        email: false,
        password: false
    })
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (form.email !== "" && form.password !== "" && emailRegex.test(form.email)) {
            localStorage.setItem("user", true)
            localStorage.setItem("email", form.email)
            localStorage.setItem("password", form.password)
            toast.success('Ti sei loggato!', {
                position: "top-center",
                autoClose: 5000,
            });
        } else if (!emailRegex.test(form.email)) {
            toast.error('Email non valida!', {
                position: "top-center",
                autoClose: 5000,
            });
        } else {
            toast.error('Email e password obbligatori!', {
                position: "top-center",
                autoClose: 5000,
            });
        }

        setTimeout(()=>{
            navigate("/private");
        },1500)
    }

    return (
        <div className='max-w-xl m-auto space-y-6 border border-gray-300 p-4 rounded-xl mt-10'>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Flip}
            />

            <div className="flex-1 flex flex-col min-h-0 border-l border-gray-200 bg-white mt-5 mb-5">
                <div className="bg-auto bg-blue-800 flex-1 flex flex-col p-4 overflow-auto">
                    <div className="text-white text-xs font-bold">
                        <pre>
                            <code>{JSON.stringify(form, undefined, 1)}</code>
                        </pre>
                    </div>
                </div>
            </div>

            <UiHeader
                title="Login"
            />

            <form>
                <UiInput
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }}
                />
                <UiInput
                    label="Password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            password: e.target.value
                        })
                    }}
                />
                <div className='flex justify-end mt-5'>
                    <UiButton
                        title="Login"
                        onClick={() => {
                            handleLogin()
                            console.log("Loggato")
                        }}
                    />
                </div>
            </form>
        </div>
    )
}

export default Login