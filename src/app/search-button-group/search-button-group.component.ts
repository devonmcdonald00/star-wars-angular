import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-search-button-group',
  templateUrl: './search-button-group.component.html',
  styleUrls: ['./search-button-group.component.scss']
})
export class SearchButtonGroupComponent implements OnInit {
  @Output() character_search = new EventEmitter<void>();
  @Output() planet_search = new EventEmitter<void>();
  @Output() ship_search = new EventEmitter<void>();
  @Output() shuffle = new EventEmitter<void>();

  constructor(private matIconRegistry:MatIconRegistry, private domSanitizer: DomSanitizer) { 
    this.matIconRegistry.addSvgIcon(
      'character_search_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/darth-maul_icon-icons.com_76953.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'planet_search_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/death_star_wars_icon_183176.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'ship_search_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/star-wars.svg')
    )
    
   }

  ngOnInit(): void {
  }

  handleCharacterSearch(){
    this.character_search.emit()
  }
  handlePlanetSearch(){
    this.planet_search.emit()
  }
  handleShipSearch(){
    this.ship_search.emit()
  }
  handleShuffle(){
    this.shuffle.emit()
  }

}
