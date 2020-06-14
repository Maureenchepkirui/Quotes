import { Component, OnInit,Input } from '@angular/core';
import {Quote  } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  {id:1,quote:'"Love the life you live, live the life you love."',author:'Bob Marley'},
];
@Input() quote: Quote;

constructor() { }

ngOnInit() {
}

}
