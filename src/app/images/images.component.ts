import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html'
})
export class ImagesComponent implements OnInit {

  constructor() { }

  private pointer: number = 0;

  imgSrc = [
    {src:'./assets/bootstrap.jpg', alt: 'bootstrap'},
    {src:'./assets/materialize.png', alt: 'materialize'},
    {src:'./assets/tailwind.png', alt: 'tailwind'},
  ]

  currentScr = './assets/bootstrap.jpg';

  currentAlt = 'bootstrap'

  private initImg(){
    this.currentScr = this.imgSrc[this.pointer].src;
    this.currentAlt = this.imgSrc[this.pointer].alt;
  }

  prevHandle(e:any) {
    this.pointer = (this.pointer <= 0) ? this.imgSrc.length - 1 : this.pointer - 1;
    this.initImg();
  }

  nextHandle(e:any) {
    this.pointer = (this.pointer < this.imgSrc.length - 1)  ? this.pointer + 1 : 0;
    this.initImg();
  }

  ngOnInit(): void {
  }

}
