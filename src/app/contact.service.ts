import { Injectable } from "@angular/core";

@Injectable()
export class ContactService {
  display: number = 1;

  contacts = [
    { name: "John Adams", phone: "701-000-1111" },
    { name: "Mary Jane", phone: "701-000-1000" }
  ];

  addContact(name: string, phone: string) {
    this.contacts.push({ name, phone });
  }

  editContact(id: number, name: string, phone: string) {
    this.contacts[id] = { name, phone };
  }

  deleteContact(id: number) {
    this.contacts.splice(id, 1);
  }

  updateDisplay(i: number) {
    this.display = i;
  }

  getDisplay():number {
    return this.display;
  }
  constructor() {}
}
