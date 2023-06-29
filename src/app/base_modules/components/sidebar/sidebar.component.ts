import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deepak-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
