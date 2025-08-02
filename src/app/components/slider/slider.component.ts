import { Component, Input } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  swiper: Swiper | undefined;
  @Input() slides: any[] = [];

  ngOnInit(): void {
    // init Swiper:
    this.swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      navigation: true,
      pagination: { clickable: true },
      autoplay: {
        delay: 2000,
      },
      allowSlideNext: true,
      allowSlidePrev: true,
      loop: true,
      speed: 500,
      spaceBetween: 10,
    });

    console.log('Slider initialized with slides:', this.slides);
  }
}
