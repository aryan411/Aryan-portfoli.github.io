import { Component, OnInit } from '@angular/core';
import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // trigger('routerTransition', [
    //   transition('* <=> *', [
    //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
    //     group([
    //       query(':enter', [
    //         style({ opacity:0 }),
    //         animate('1000ms ease-in-out', style({ opacity:1 }))
    //       ]),
    //       query(':leave', [
    //         style({ opacity:1 }),
    //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
    //     ])
    //   ])
    // ])

    trigger('fadein', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(5000),
      ]),
      transition('* => void', [
        animate(
          5000,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  greeting: any;

  constructor(private bService: ButtonService) {
    this.greeting = this.bService.getGreeting();
  }

  ngOnInit(): void {}
}
