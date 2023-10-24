import React from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai'

function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full" onClick={handleScrollToTop}>
      <AiOutlineArrowUp size={28}/>
    </button>
  );
}

export default ScrollToTopButton;
