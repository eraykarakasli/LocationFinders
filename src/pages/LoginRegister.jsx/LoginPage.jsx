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
    console.log(status)
    return (
        <div className='flex  justify-center min-h-screen '>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
                className='flex'>
                <div className="bg-[url('https://d31l02nbp0owar.cloudfront.net/m/s/24809/24799868/a-0108.png')] hidden xl:block   mt-4  rounded-e-none rounded-2xl w-[550px] p-8 shadow-2xl h-[850px]">
                    <div className='h-full w-full flex items-center justify-center'>
                        <img className='h-[450px] w-[450px]' src="https://i.giphy.com/media/WQZpXz8Y8eKgGIxrSP/giphy.webp" alt="deneme" />

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
                                className='mx-auto mt-4  rounded-s-none rounded-2xl w-[350px] md:w-[500px]  p-8 shadow-2xl min-h-[850px]'
                            >
                                <div className='text-gray-400 justify-center flex text-3xl font-bold pt-7'>{status ? "Kayıt Ol" : "Giriş Yap"}</div>

                                <input
                                    id='email'
                                    type="text"
                                    placeholder='E-posta...'
                                    className='border w-full h-12 mt-12 shadow-lg p-2 bg-transparent text-gray-300 rounded-md'
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
                                    className='border w-full h-12 mt-6 shadow-lg p-2 bg-transparent rounded-md text-gray-300'
                                    value={values.password}
                                    onChange={handleChange}

                                />
                                {
                                    errors.password && touched.password && (
                                        <div className='text-red-500 text-sm p-2'>{errors.password}</div>
                                    )
                                }



                                <div className={`${status ? "hidden" : 'mt-4 flex justify-between'}`}>
                                    <div>
                                        <input
                                            id="agree"
                                            type="checkbox"
                                            value={values.agree}
                                            onChange={handleChange}
                                        />
                                        {/* text-sm items-center ml-1 text-gray-400 */}
                                        <label htmlFor="agree" className="text-sm items-center ml-1 text-gray-400"> Oturum açık kalsın</label>
                                    </div>
                                    <a href="#" className='text-red-600 hover:underline text-sm'>Şifremi unuttum</a>
                                </div>

                                <button
                                    type="submit"
                                    className='w-full border border-gray-400 h-12 rounded-md mt-5 shadow-lg text-gray-400 cursor-pointer hover:bg-transparent hover:border-red-600 hover:text-red-600'
                                    disabled={!dirty || isSubmitting}

                                >{status ? "Kayıt Ol" : " Giriş Yap"}</button>

                                <div className={`${status ? "hidden" : 'my-10 flex justify-center text-white'}`}>

                                    <div> Henüz hesabın yok mu? <button onClick={() => setStatus(false)} className='text-red-600 font-semibold hover:underline'>Hesap aç </button></div>
                                </div>



                                <div className={`${status ? "grid grid-flow-col items-center pt-10  text-lg" : 'grid grid-flow-col items-center  text-lg'}`}>

                                    <span><hr /></span>  <span className='justify-center flex text-gray-400'>Veya</span> <span><hr /></span>
                                </div>


                                <a href='#' className='text-gray-400 rounded-md shadow-lg  border w-full h-12 m-2 mt-10 flex items-center justify-center gap-2 hover:border-red-600'><FcGoogle /><p> Google ile giriş yap</p></a>

                                <a href='#' className='text-gray-400 rounded-md shadow-lg border w-full h-12 m-2 mt-4 flex items-center justify-center gap-2 hover:border-red-600'><BsApple /> <p>Apple ile giriş yap</p></a>




                                <div className='text-xs p-3 px-4 text-gray-500'>
                                    <p>Google veya Apple kimliğinizle bir sonraki adıma geçmeniz halinde <a href="#" className='text-red-600 hover:underline'>Bireysel Hesap Sözleşmesi ve Ekleri</a>'ni kabul etmiş sayılırsınız.</p>
                                </div>
                                <div className={`${status ? "hidden": 'flex justify-center my-6 text-lg text-gray-400'}`}>
                                    <p>QR kod ile mobil uygulamadan <a href="#" className='text-red-600 hover:underline'> giriş yap </a></p>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </motion.div>



        </div>
    )
}

export default LoginPage