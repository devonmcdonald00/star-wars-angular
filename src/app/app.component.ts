import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars';
  searchVal = '';
  searchResults = [];

  async characterSearch(){
    console.log("Character search")
    let url = 'https://swapi.dev/api/people/?search=' + this.searchVal;
    console.log(url)
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'accept': 'application/json'
      }
    })

    const responseData = await response.json()
    this.searchResults = responseData;
    console.log(responseData)
  }

  async planetSearch() {
    console.log("Planet Search")
    let url = 'https://swapi.dev/api/planets/?search=' + this.searchVal;
    console.log(url)
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'accept': 'application/json'
      }
    })

    const responseData = await response.json()
    this.searchResults = responseData;
    console.log(responseData)
  }

  async shipSearch() {
    console.log("Ship search")
    let url = 'https://swapi.dev/api/starships/?search=' + this.searchVal;
    console.log(url)
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'accept': 'application/json'
      }
    })

    const responseData = await response.json()
    this.searchResults = responseData;
    console.log(responseData)
  }

  async shuffle() {
    console.log("Shuffle")
  }

  searchInputChange(searchVal: Event){
    this.searchVal = searchVal.toString();
    console.log(this.searchVal)
  }
}
