import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../button.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo : any;
  constructor(private bService: ButtonService) { 
    this.contactInfo = this.bService.getContacts();
  }

  ngOnInit(): void {
  }

}
