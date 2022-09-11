import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: environment.github,
    linkedin: environment.linkdin,
    gmail: environment.email,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
