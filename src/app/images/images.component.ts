import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html'
})
export class ImagesComponent implements OnInit {

  constructor() {
   }

  private pointer: number = 0;

  imgfocus:boolean = false;

  imgSrc = [
    {src:'./assets/bootstrap.jpg', alt: 'bootstrap'},
    {src:'./assets/responsive.png', alt: 'materialize'},
    {src:'./assets/tailwind.png', alt: 'tailwind'},
    {src:'../../assets/bootstrap.jpg', alt: 'bootstrap'},
    {src:'../../assets/responsive.png', alt: 'materialize'},
    {src:'../../assets/tailwind.png', alt: 'tailwind'},
  ]

  currentScr = './assets/bootstrap.jpg';

  currentAlt = 'bootstrap'

  private initImg(){
    this.currentScr = this.imgSrc[this.pointer].src;
    this.currentAlt = this.imgSrc[this.pointer].alt;
  }

  imgFocusShow(){
    if (!this.imgfocus) this.imgfocus = true;
  }

  imgBlurShow(){
      if (this.imgfocus) this.imgfocus = false;
   }

  imgClicked(e:MouseEvent){
    if (this.imgfocus) this.nextHandle(e);
  }

  prevHandle(e:any) {
    if (!this.imgfocus) return
    this.pointer = (this.pointer <= 0) ? this.imgSrc.length - 1 : this.pointer - 1;
    this.initImg();
  }

  nextHandle(e:any) {
    if (!this.imgfocus) return
    this.pointer = (this.pointer < this.imgSrc.length - 1)  ? this.pointer + 1 : 0;
    this.initImg();
  }

  ngOnInit(): void {
  }

}
