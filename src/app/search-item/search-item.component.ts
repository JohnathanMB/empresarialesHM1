import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../objs/item';


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  items: Item[];
  public response;

  constructor(private itemService: ItemService) { }

  public titleItem;

  ngOnInit() {
  }

  searchItem(titleItem: string): void {

    this.itemService.getItemTitle(titleItem)
      .subscribe(result => this.items = result.results);
    /*
    this.itemService.getItemTitle(titleItem)
      .subscribe(result => {
        //console.log("code: "+result.code);
        if (result.code != 200) {
          var itemsResponse = result.results;
          for(var i=0; i<10; i++){
            var item: Item = {
              "id": itemsResponse[i].id,
              "title": itemsResponse[i].title,
              "price": itemsResponse[i].price,
              "thumbnail": itemsResponse[i].thumbnail
            };
            //this.items[i]=item;
            //this.items.push(item);
            console.log(item);
          }
          console.log(itemsResponse);
        } else {
          console.log(result.data);
        }
      }, error => {
        console.log(<any>error);
      });
      */


  }

}
