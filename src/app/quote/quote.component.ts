import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote  } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote(1,'"Love the life you live, live the life you love."','Bob Marley'),
  new Quote(2,'"Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult."','Avul Pacir Zainulabidin Abdul Kalam'),
  new Quote(1,'"Never bend your head. Always hold it high. Look the world straight in the eye."','Helen Keller '),
];
@Output() toDelete = new EventEmitter<boolean>();

quoteComplete(complete:boolean){
  this.toDelete.emit(complete);
}
deleteQuote(toDelete, index){
   if (toDelete) {
     this.quotes.splice(index,1);
   }
 }
 upvote(i){
      this.quotes[i].upvotes+=1
  }
downvote(i){
    this.quotes[i].downvotes+=1
  }

constructor() { }

ngOnInit() {
}

}
