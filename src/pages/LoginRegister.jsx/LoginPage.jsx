import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useLocation } from 'react-router-dom'
import { motion } from "framer-motion"

function LoginPage() {
    const { pathname } = useLocation();
    const [status, setStatus] = useState(true)

    useEffect(() => {
        if (pathname === "/register") {
            document.title = 'Kayıt Ol - LocationFinder';
            setStatus(true)
        } else if (pathname === "/login") {
            document.title = 'Giriş Yap - LocationFinder';
            setStatus(false)
        }
    })
    return (
        <div className='flex  justify-center min-h-screen'>

            {
                status
                    ?
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: status ? 1 : 0 }}
                        transition={{ duration: 1.0 }}
                        className='flex '>

                        <div >

                            <Formik
                                initialValues={{
                                    email: "",
                                    password: "",
                                    agree: false,
                                }}

                                validationSchema={
                                    Yup.object({
                                        email: Yup.string().email().required("E-posta adresinizi veya kullanıcı adınızı girin."),
                                        password: Yup.string().required("Şifrenizi girin."),
                                        agree: Yup.boolean()
                                    })
                                }

                                onSubmit={(values, { resetForm, setSubmitting }) => {
                                    console.log(values);
                                    setTimeout(() => {
                                        resetForm();
                                        setSubmitting(false);
                                    }, 2000)
                                }}
                            >
                                {({ values, errors, handleSubmit, handleReset, handleChange, dirty, isSubmitting, touched }) => (
                                    <form
                                        onSubmit={handleSubmit}
                                        className='mx-auto mt-4 bg-gradient-to-t to-blue-700 via-blue-800 from-gray-900 rounded-e-none rounded-2xl w-[550px] p-8 shadow-2xl min-h-[850px]'
                                    >
                                        <div className='justify-center flex text-3xl font-bold pt-7'>Hesap Aç</div>

                                        <input
                                            id='email'
                                            type="text"
                                            placeholder='E-posta...'
                                            className='border w-[480px] h-12 mt-8 shadow-lg p-2'
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {
                                            errors.email && touched.email && (
                                                <div className='text-red-500 text-sm p-2'>{errors.email}</div>
                                            )
                                        }



                                        <button
                                            type="submit"
                                            className='w-full bg-[#438ED8] h-12 rounded-md mt-5 shadow-lg text-white hover:bg-[#4594DE]'
                                            disabled={!dirty || isSubmitting}

                                        >E-posta ile hesap aç</button>

                                        <div className='my-10 flex justify-center '>

                                            <div> Zaten hesabın var mı? <button onClick={() => setStatus(false)} className='text-blue-600 font-semibold hover:underline'>Giriş yap</button></div>
                                        </div>

                                        <div className='grid grid-flow-col items-center  text-lg'>
                                            <span><hr /></span>  <span className='justify-center flex'>Veya</span> <span><hr /></span>
                                        </div>



                                        <a href='#' className='rounded-md shadow-lg  border w-full h-12 m-2 mt-10 flex items-center justify-center gap-2 hover:bg-gray-100'><FcGoogle /><p> Google ile giriş yap</p></a>

                                        <a href='#' className='rounded-md shadow-lg border w-full h-12 m-2 mt-4 flex items-center justify-center gap-2 hover:bg-gray-100'><BsApple /> <p>Apple ile giriş yap</p></a>




                                        <div className='text-xs p-3 px-4 text-gray-500'>
                                            <p>Google veya Apple kimliğinizle bir sonraki adıma geçmeniz halinde <a href="#" className='text-blue-600 hover:underline'>Bireysel Hesap Sözleşmesi ve Ekleri</a>'ni kabul etmiş sayılırsınız.</p>
                                        </div>
                                        <div className='flex justify-center my-6 text-lg  '>
                                            <p>İşletme sahibi misin? <a href="#" className='text-blue-600 hover:underline'> Kurumsal hesap aç</a></p>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                        <div className='bg-blue-950 hidden xl:block   mt-4  rounded-s-none rounded-2xl w-[550px] p-8 shadow-2xl h-[850px]'>
                            <div className='h-full w-full flex items-center justify-center'>
                                <img className='h-80 w-80' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Rotating_earth_%28large%29_transparent.gif" alt="deneme" />

                            </div>
                        </div>
                    </motion.div>
                    :
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: !status ? 1 : 0 }}
                        transition={{ duration: 1.0 }}
                        className='flex'>
                        <div className='bg-blue-950 hidden xl:block   mt-4  rounded-s-none rounded-2xl w-[550px] p-8 shadow-2xl h-[850px]'>
                            <div className='h-full w-full flex items-center justify-center'>
                                <img className='h-80 w-80' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Rotating_earth_%28large%29_transparent.gif" alt="deneme" />

                            </div>
                        </div>
                        <div className=' '>
                            <Formik
                                initialValues={{
                                    email: "",
                                    password: "",
                                    agree: false,
                                }}

                                validationSchema={
                                    Yup.object({
                                        email: Yup.string().email().required("E-posta adresinizi veya kullanıcı adınızı girin."),
                                        password: Yup.string().required("Şifrenizi girin."),
                                        agree: Yup.boolean()
                                    })
                                }

                                onSubmit={(values, { resetForm, setSubmitting }) => {
                                    console.log(values);
                                    setTimeout(() => {
                                        resetForm();
                                        setSubmitting(false);
                                    }, 2000)
                                }}
                            >
                                {({ values, errors, handleSubmit, handleReset, handleChange, dirty, isSubmitting, touched }) => (
                                    <form
                                        onSubmit={handleSubmit}
                                        className='mx-auto mt-4 bg-gradient-to-t to-blue-700 via-blue-800 from-gray-900 rounded-s-none rounded-2xl w-[550px] p-8 shadow-2xl min-h-[850px]'
                                    >
                                        <div className='justify-center flex text-3xl font-bold pt-7'>Giriş Yap</div>

                                        <input
                                            id='email'
                                            type="text"
                                            placeholder='E-posta...'
                                            className='border w-[480px] h-12 mt-12 shadow-lg p-2 bg-transparent rounded-md'
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {
                                            errors.email && touched.email && (
                                                <div className='text-red-500 text-sm p-2'>{errors.email}</div>
                                            )
                                        }

                                        <input
                                            id='password'
                                            type="password"
                                            placeholder='Şifre...'
                                            className='border w-[480px] h-12 mt-6 shadow-lg p-2 bg-transparent rounded-md'
                                            value={values.password}
                                            onChange={handleChange}

                                        />
                                        {
                                            errors.password && touched.password && (
                                                <div className='text-red-500 text-sm p-2'>{errors.password}</div>
                                            )
                                        }



                                        <div className='mt-4 flex justify-between'>
                                            <div>
                                                <input
                                                    id="agree"
                                                    type="checkbox"
                                                    value={values.agree}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="agree" className='text-sm items-center ml-1'> Oturum açık kalsın</label>
                                            </div>
                                            <a href="#" className='text-blue-600 hover:underline text-sm'>Şifremi unuttum</a>
                                        </div>

                                        <button
                                            type="submit"
                                            className='w-full bg-[#438ED8] h-12 rounded-md mt-5 shadow-lg text-white cursor-pointer hover:bg-transparent hover:border-white hover:border'
                                            disabled={!dirty || isSubmitting}

                                        >Giriş Yap</button>

                                        <div className='my-10 flex justify-center '>

                                            <div> Henüz hesabın yok mu? <button onClick={() => setStatus(false)} className='text-blue-600 font-semibold hover:underline'>Hesap aç </button></div>
                                        </div>



                                        <div className='grid grid-flow-col items-center  text-lg'>
                                            <span><hr /></span>  <span className='justify-center flex'>Veya</span> <span><hr /></span>
                                        </div>


                                        <a href='#' className='rounded-md shadow-lg  border w-full h-12 m-2 mt-10 flex items-center justify-center gap-2 hover:bg-gray-100'><FcGoogle /><p> Google ile giriş yap</p></a>

                                        <a href='#' className='rounded-md shadow-lg border w-full h-12 m-2 mt-4 flex items-center justify-center gap-2 hover:bg-gray-100'><BsApple /> <p>Apple ile giriş yap</p></a>




                                        <div className='text-xs p-3 px-4 text-gray-500'>
                                            <p>Google veya Apple kimliğinizle bir sonraki adıma geçmeniz halinde <a href="#" className='text-blue-600 hover:underline'>Bireysel Hesap Sözleşmesi ve Ekleri</a>'ni kabul etmiş sayılırsınız.</p>
                                        </div>
                                        <div className='flex justify-center my-6 text-lg'>
                                            <p>QR kod ile mobil uygulamadan <a href="#" className='text-blue-600 hover:underline'> giriş yap </a></p>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </motion.div>
            }


        </div>
    )
}

export default LoginPage