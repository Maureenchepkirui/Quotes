import { Component, OnInit, } from '@angular/core';
import {Quote  } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote(1,'"Love the life you live, live the life you love."','Bob Marley',new Date(2020,1,1)),
  new Quote(2,'"In whatever you do,do it to your best"','Henry Dru',new Date(2020,5,3)),

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
  preNum:number
 lastNum:number
 counter:number

 highestUpvote(){
   this.preNum = 0
   this.lastNum = 0

   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
     this.lastNum = this.quotes[this.counter].upvotes;
     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
   }
   return  this.preNum
 }
 addNewQuote(quote){
   let quoteLength = this.quotes.length;
   
   quote.completeDate = new Date(quote.completeDate)
   this.quotes.push(quote)
 }

constructor() { }

ngOnInit() {
}

}
