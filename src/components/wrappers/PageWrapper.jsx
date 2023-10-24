import React from 'react'

function PageWrapper({ children }) {
    return (
        <div className='w-10/12 mx-auto'>
            {children}
        </div>
    )
}

export default PageWrapper