import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @ViewChild('hrhand',{static:false})hrhand:ElementRef;
  @ViewChild('minhand',{static:false})minhand:ElementRef;
  @ViewChild('sechand',{static:false})sechand:ElementRef;
   constructor() {}
  ngOnInit(): void {
    setInterval(()=>{
      const date=new Date();
      this.updateclock(date);

    },1000)
    throw new Error("Method not implemented.");
  }
updateclock(date)
{
  this.sechand.nativeElement.style.transform='rotate('+ date.getSeconds()*6+'deg)';
  this.minhand.nativeElement.style.transform='rotate('+ date.getMinutes()*6+'deg)';
  this.hrhand.nativeElement.style.transform='rotate('+ (date.getHours()*30+date.getMinutes()* 0.5)+'deg)';
}
}
