import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-loading-item',
  templateUrl: './loadingItem.component.html',
  styleUrls: ['./loadingItem.component.css']
})

export class LoadingItemComponent{
  @Input() visible?: Boolean
}
