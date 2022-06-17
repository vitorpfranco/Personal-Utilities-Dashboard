import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notificationAnim',[transition(':enter',[
      style({opacity: 0, transform:'translateY(5px)'}), animate('200ms ease-out')
    ]),transition(':leave',[animate(250,style({opacity: 0, transform:'scale(0.85)'}))
    ])])
  ]
})
export class NotificationComponent implements OnInit {
notification!: string
shownotification!:boolean
timeout:any
  constructor(private NotificationService: NotificationService) { }

  ngOnInit(): void {
    this.NotificationService.notifications.subscribe((notification:string)=>{
      this.notification=notification
      this.shownotification=true
      clearTimeout(this.timeout)
      this.timeout=setTimeout(()=>{
        this.shownotification=false
      },2000)
    })
  }

}
