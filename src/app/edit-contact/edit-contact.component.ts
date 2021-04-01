import { Component, OnInit, Input } from "@angular/core";
import { ContactService } from "../contact.service";

@Component({
  selector: "app-edit-contact",
  templateUrl: "./edit-contact.component.html",
  styleUrls: ["./edit-contact.component.css"]
})
export class EditContactComponent implements OnInit {
  @Input() contactIndex: number;
  contact: { name: string; phone: string };
  constructor(private ctService: ContactService) {}

  ngOnInit() {
    this.contact = this.ctService.contacts[this.contactIndex];
  }

  saveChanges(name: string, status: string) {
    this.ctService.editContact(this.contactIndex, name, status);
    this.ctService.display = 1;
  }

  cancel() {
    this.ctService.display = 1;
  }
}
