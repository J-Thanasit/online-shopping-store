import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'
  ]
})
export class CarouselComponent{

  constructor(){ }

  imgCollection: Array<object> = [
    {
      image: 'assets/item-1.png',
      thumbImage: 'assets/item-1.png',
      title: 'iPhone 14 Pro Max',
      alt: 'iPhone 14 Pro Max'
    }, {
      image: 'assets/item-2.png',
      thumbImage: 'assets/item-2.png',
      title: 'Skateboard',
      alt: 'Skateboard'
    }, {
      image: 'assets/item-3.png',
      thumbImage: 'assets/item-3.png',
      title: 'Helmet',
      alt: 'Helmet'
    }, {
      image: 'assets/item-4.png',
      thumbImage: 'assets/item-4.png',
      title: 'T-Shirt',
      alt: 'T-Shirt'
    }, {
      image: 'assets/item-5.png',
      thumbImage: 'assets/item-5.png',
      title: 'Keyboard',
      alt: 'Keyboard'
    }, {
      image: 'assets/item-6.png',
      thumbImage: 'assets/item-6.png',
      title: 'Steel Cup',
      alt: 'Steel Cup'
    },{
      image: 'assets/item-1.png',
      thumbImage: 'assets/item-1.png',
      title: 'iPhone 14 Pro Max',
      alt: 'iPhone 14 Pro Max'
    }, {
      image: 'assets/item-2.png',
      thumbImage: 'assets/item-2.png',
      title: 'Skateboard',
      alt: 'Skateboard'
    }, {
      image: 'assets/item-3.png',
      thumbImage: 'assets/item-3.png',
      title: 'Helmet',
      alt: 'Helmet'
    }, {
      image: 'assets/item-4.png',
      thumbImage: 'assets/item-4.png',
      title: 'T-Shirt',
      alt: 'T-Shirt'
    }, {
      image: 'assets/item-5.png',
      thumbImage: 'assets/item-5.png',
      title: 'Keyboard',
      alt: 'Keyboard'
    }, {
      image: 'assets/item-6.png',
      thumbImage: 'assets/item-6.png',
      title: 'Steel Cup',
      alt: 'Steel Cup'
    }
];

}
