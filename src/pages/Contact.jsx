import React, { useEffect } from 'react'
import Content from '../components/contact/Content'

function Contact() {
  useEffect(() => {
    document.title = 'İletişim - LocationFinder';
  }, []);
  return (
    <div>
        <Content />
    </div>
  )
}

export default Contact
