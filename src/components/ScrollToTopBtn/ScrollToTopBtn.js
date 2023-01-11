import React, {useState} from 'react';
import {IoArrowUpCircle} from 'react-icons/io5';

import './ScrollToTopBtn.css'

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button className='scrollBtn' style={{display: visible ? 'inline' : 'none'}}  onClick={scrollToTop}>
        <IoArrowUpCircle />
		<h3>TO TOP</h3>
	</button>
);
}

export default ScrollButton;
