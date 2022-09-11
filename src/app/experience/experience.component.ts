import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public workExperiences = {
    viewExperiences: true,
    experience: []
  };

  constructor(private bService: ButtonService) {
    this.workExperiences.experience = bService.getExperience();
  }

  ngOnInit(): void {}
}
