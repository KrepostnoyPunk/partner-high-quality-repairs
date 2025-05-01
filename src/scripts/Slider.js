import Glide from '@glidejs/glide';

class Slider {
    selectors = {
        root: '[data-js-house-assortment-slider]',
    }
    
    glideInstance = null; // Добавляем свойство для хранения экземпляра Glide

    constructor(){
        this.bindEvents();
        this.initializeSlider(); // Инициализируем слайдер при создании
    }

    initializeSlider = () => {
        const sliderExists = document.querySelector(this.selectors.root);

        if(sliderExists){
            if(window.matchMedia('(max-width: 767px)').matches){
                // Если слайдер еще не инициализирован (на мобилке) - создаем его
                if(!this.glideInstance) {
                    this.glideInstance = new Glide(this.selectors.root).mount();
                }
            } else {
                // Если слайдер инициализирован - уничтожаем его
                if(this.glideInstance) {
                    this.glideInstance.destroy();
                    this.glideInstance = null;
                }
            }
        }
    }

    bindEvents () {
        window.addEventListener('resize', this.initializeSlider);
    }
}

export default Slider;