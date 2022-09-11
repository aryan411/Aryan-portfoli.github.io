import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline: [];

  constructor(private bService: ButtonService) {
    this.timeline = this.bService.getEducationDetails();
   }

  ngOnInit(): void {
  }

}
