import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() input_changed = new EventEmitter<String>();
  searchInput: String = "";
  constructor() { }

  ngOnInit(): void {
  }

  setSearchInput($event){
    console.log($event.target.value);
    this.searchInput = $event.target.value;
    this.input_changed.emit(this.searchInput)
  }

}
