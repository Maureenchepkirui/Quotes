import { Component, OnInit, } from '@angular/core';
import {Quote  } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  {id:1,quote:'"Love the life you live, live the life you love."',author:'Bob Marley'},
  {id:2,quote:'"Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult."',author:'Avul Pacir Zainulabidin Abdul Kalam'},
  {id:1,quote:'"Never bend your head. Always hold it high. Look the world straight in the eye."',author:'Helen Keller '},
];
deleteQuote(toDelete, index){
   if (toDelete) {
     this.quotes.splice(index,1);
   }
 }

constructor() { }

ngOnInit() {
}

}
