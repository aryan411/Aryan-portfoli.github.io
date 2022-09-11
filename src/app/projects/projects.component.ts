import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';
import { environment } from 'src/environments/environment';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  githubURL= environment.github;
  projects3 = [];
  constructor(public bService: ButtonService) {
    this.projects3 = bService.getProjects();
   }

  ngOnInit(): void {
  }

}
