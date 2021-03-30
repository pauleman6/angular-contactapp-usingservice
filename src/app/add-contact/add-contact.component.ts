import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ContactService } from "../contact.service";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.css"]
})
export class AddContactComponent implements OnInit {
  constructor(private ctService: ContactService) {}

  createNewContact(name: string, phone: string) {
    this.ctService.addContact(name, phone);
    this.ctService.display = 1;
  }
  ngOnInit() {}
}
