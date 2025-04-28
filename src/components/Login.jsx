import React, { useState } from 'react'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { useNavigation, Form, useActionData, redirect } from 'react-router-dom'
import useGlobalContext from '../Context'

export const action = async ({ request }) => {

    const formData = await request.formData();
    const data = Object.fromEntries(formData)

    try {
        const response = await customFetch.post('/auth/login', data);

        const userToken = response.data.token;
        localStorage.setItem('token', userToken);

        toast.success(response?.data?.user?.msg)
        return redirect('/')

    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.msg)
        return error
    }

}

const Login = () => {

    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return (
        <div className="isolate min-h-[100vh] max-h-auto bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Login Form</h2>
            </div>
            <Form method='post' className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-start text-sm/6 font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="password" className="block text-start text-sm/6 font-semibold text-gray-900">
                            Password
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                </div>

                <div className="mt-10">
                    <button
                        type="submit" disabled={isSubmitting}
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {isSubmitting ? 'submitting' : 'submit'}
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default Login