import { Injectable } from '@angular/core';
import * as greeting from './greeting.json';
import * as ed from './eduction.json'
import * as ex from './experience.json'
import * as contact from './contact.json'
import * as projects from './projects.json'

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  public className: string;
  public href: string;
  public text: string;
  private greeting: {};
  private education: [];
  constructor() {}

  getClassName() {
    return this.className;
  }
  getHref() {
    return this.href;
  }
  getText() {
    return this.text;
  }
  setClassName(className: string) {
    this.className = className;
  }
  setHref(href: string) {
    this.href = href;
  }
  setText(text: string) {
    this.text = text;
  }
  getGreeting() {
    this.greeting = (greeting as any).default;
    return this.greeting;
  }
  getEducationDetails(){
    this.education = (ed as any).default;
    return this.education;
  }
  getExperience(){
    return (ex as any).default;
  }
  getContacts(){
    return (contact as any).default;
  }
  getProjects(){
    return (projects as any).default;
  }
}
