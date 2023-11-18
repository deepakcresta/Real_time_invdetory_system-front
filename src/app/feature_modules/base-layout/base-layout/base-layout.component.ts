import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deepak-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  sidebarActive =false
  constructor() { }

  ngOnInit(): void {
  }

}
