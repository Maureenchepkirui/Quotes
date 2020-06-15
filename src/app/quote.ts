export class Quote {
public upvotes : number;
public downvotes :number;
constructor(public id:number,public quote:string,public author:string,public name:string,public createDate: Date){
  this.upvotes=0;
  this.downvotes=0;
}
  }
