import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'deepak-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @Input() sidebarActive = true;
  @Output() toggleSidebar = new EventEmitter ();
  constructor() { }

  ngOnInit(): void {
  }

}
