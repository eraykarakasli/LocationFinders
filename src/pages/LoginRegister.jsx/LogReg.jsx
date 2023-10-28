import React, { useState } from 'react'
import LoginPage from './LoginPage'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LogReg() {
    const {params} = useParams()
    console.log(params,"params")
    useEffect(() => {
        document.title = 'Giriş Yap - LocationFinder';
      }, []);
    return (
        <div>
              <LoginPage  />
        </div>
    )
}

export default LogReg