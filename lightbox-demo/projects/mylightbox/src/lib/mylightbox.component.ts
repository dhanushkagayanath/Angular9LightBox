
import { Component, OnInit, Input,ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-my-demo-lib',
  templateUrl: './mylightbox.component.html',
  styleUrls: ['./mylightbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MylightboxComponent implements OnInit {
  
  imagesArray = [];
  currentImage;
  lightBoxOn = false;

  constructor() { }

  ngOnInit(): void {

    document.querySelectorAll("img.my-lightbox").forEach((img_el, index) => {
      this.imagesArray.push(img_el);
      img_el.setAttribute("data-lightbox-index", index.toString());  
      });

      //hide lighbox wrapper
      document.querySelectorAll("#lightbox-wrapper").forEach((element, index) => {
        element.parentNode.removeChild(element);
        });
  }

  lightbox(_im): void {
    this.hideLightbox();
    this.currentImage = _im;
    this.lightBoxOn = true;

    var overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('lightbox-image');

    var image = document.createElement('img');
    image.src = _im.src;

    imageContainer.appendChild(image);

    document.querySelector('body').appendChild(overlay);
    document.querySelector('body').appendChild(imageContainer);

    this.prepareControls(_im);
}

hideLightbox():void {
  let overlay = document.querySelector('.lightbox-overlay');
  let image = document.querySelector('.lightbox-image');
  let controls = document.querySelector('.lightbox-controls');
  if (overlay) document.querySelector('body').removeChild(overlay);
  if (image) document.querySelector('body').removeChild(image);
  if (controls) document.querySelector('body').removeChild(controls);
  this.lightBoxOn = false;
};

prepareControls(imgElement):void {
  let controls = document.createElement('div');
  controls.innerHTML +=
  `<div class="lightbox-controls">
  <span class="lb-prev">&#10094;</span>
  <span class="lb-next">&#10095;</span>
  <span class="lb-close">&times;</span>
  </div>`

  document.querySelector('body').appendChild(controls.querySelector('.lightbox-controls'));

  let imgIndex = this.getCurrentImageIndex();
  if (imgIndex > 0) {
      document.querySelector(".lb-prev").addEventListener('click', () => {
          this.prev();
      })
  }
  else {
      document.querySelector(".lb-prev").classList.add('lb-disabled')
  }

  if (imgIndex < this.imagesArray.length - 1) {
      document.querySelector(".lb-next").addEventListener('click', () => {
          this.next();
      })
  }
  else {
      document.querySelector(".lb-next").classList.add('lb-disabled')
  }

  document.querySelector('.lb-close').addEventListener('click', () => {
      this.hideLightbox();
  })

}

next():void {
  let imgIndex = this.getCurrentImageIndex();
  if (imgIndex === this.imagesArray.length - 1) return;
  this.lightbox(this.imagesArray[this.getCurrentImageIndex() + 1]);
}

prev():void {
  let imgIndex = this.getCurrentImageIndex();
  if (imgIndex === 0) return;
  this.lightbox(this.imagesArray[this.getCurrentImageIndex() - 1]);
}

getCurrentImageIndex():number {
  return  +this.currentImage.getAttribute("data-lightbox-index");
}

OnButtonClick(event,img) : void {
    this.lightbox(img);
 }

}
