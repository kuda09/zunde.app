import { Component, OnInit, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTab(tab){

    if(!this.tabs.length){
      tab.selected = true;
    }

    this.tabs.push(tab);
  }

  selectedTab(tab){

    this.tabs.map((tab) => {
      tab.selected = false;
    });

    tab.selected = true;
    this.selected.emit({selectedTab: tab});
  }

}
