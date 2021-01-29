import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

/*
this is a nested component 
*/


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  /*
  the input decorator is a function  @Input()   tha's why we add () parenthisis 
  we set up the  @Input() (input decorator) property so it can received input data from it's parent 
  container 
  the product.starRating will be passed its values into this property  
  we can expose as many input property binding as we need  

  */
  @Input() rating = 0;
  starWidth = 0;

  /*
  the container reponse to the  @Output()  
  the only way a  @Output()  can pass data back to the component is 
  by using an event 
  this event is defined with the object EventEmitter 
  and than we create a new instance of it 
  in theis case the  @Output()   is a type ratingClicked

  type script support generics 
  if we want to pass an string in the event load we pass <sring>
  if we want to pass an integer , we defined a EventEmitter<int>
  
  in the parent container , the  (ratingClicked) raises the 
  onRatingClicked
  event 

  (ratingClicked) is an event binding and we leaten for ratingClicked 
  events. when this event is raized we call the event  onRatingClicked()
  in the profuct list component 

  $event  pass along any infomation releated to this event  

  <pm-star [rating]='product.starRating'
                       (ratingClicked)='onRatingClicked($event)'>
  </pm-star>

  */

  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();
  
  /*
  any time the container data changes , the ngOnChanges
  cycle event is generated and the startwith is recalculated 
  */

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    //let send  notification to the parent container 
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
