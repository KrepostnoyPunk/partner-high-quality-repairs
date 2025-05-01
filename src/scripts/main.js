import '../styles/main.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './Header.js';
import Slider from './Slider.js';


AOS.init({
    duration: 1300,
    offset: 100,
})


new Header()
new Slider()