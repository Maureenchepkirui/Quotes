import { Component, OnInit, } from '@angular/core';
import {Quote  } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote(1,'"Love the life you live, live the life you love."','Bob Marley'),
  new Quote(2,'"In whatever you do,do it to your best"','Henry Dru'),

];

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
