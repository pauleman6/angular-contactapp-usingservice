import { Component, OnInit } from "@angular/core";
import { ContactService } from "../contact.service";

@Component({
  selector: "app-contact-manager",
  templateUrl: "./contact-manager.component.html",
  styleUrls: ["./contact-manager.component.css"]
})
export class ContactManagerComponent implements OnInit {
  editContactIndex: number; //index of the contact being edited
  contacts: { name: string; phone: string }[] = [];

  displayContacts() {
    this.ctService.display = 1;
  }

  displayAddContact() {
    this.ctService.display = 2;
  }
  //The ctService property must be public because you're going to bind to it in the template.
  constructor(public ctService: ContactService) {}

  ngOnInit() {
    this.contacts = this.ctService.contacts;
  }

  editContact(i: number) {
    this.editContactIndex = i;
    this.ctService.display = 3;
  }
}
