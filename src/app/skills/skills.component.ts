import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      "⚡ Creating application backend in Node, Express",
      "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      "⚡ Integration of third party services such as Firebase/ Heroku/ AWS",
      "⚡ Creating Java API using spring boot and J2EE"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
