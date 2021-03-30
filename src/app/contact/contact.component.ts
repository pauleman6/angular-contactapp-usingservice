import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@Input() contact: {name: string, phone: string};
@Input() index: number;
@Output() editEvent: EventEmitter<number> = new EventEmitter<number>();

delete(){
  this.ctService.deleteContact(this.index);
}

edit(){
  this.editEvent.emit(this.index);
  this.ctService.display = 3;
}

constructor(private ctService: ContactService) { }

  ngOnInit() {
  }

}