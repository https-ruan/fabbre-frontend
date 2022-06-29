import { Component, OnInit } from '@angular/core';

import { UntilDestroy } from '@shared';

@UntilDestroy()
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
