
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('bgbtnAnim',[transition(':leave',[animate(1000,style({opacity: 0}))])],)]
})
export class AppComponent implements OnInit {
  dateTime!:Date
ngOnInit() {

timer(0, 1000).subscribe(()=>{
  this.dateTime=new Date()
})
}
loadingBG!: boolean
bg:string= 'https://images.unsplash.com/photo-1654737178110-977669b9bcdc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ5OTc0MA&ixlib=rb-1.2.1&q=80&w=1920'
  async changeBG(){
    const result = await fetch('https://source.unsplash.com/random/1920x1080',{
      method: 'HEAD'}
    )   
    this.loadingBG=true;
    this.bg= result.url
  }
  onLoadBG():void{ 
this.loadingBG=false;
  }
  }
