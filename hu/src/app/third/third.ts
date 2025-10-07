import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Fourth } from '../fourth/fourth';

@Component({
  selector: 'app-third',
  imports: [CommonModule,Fourth],
  templateUrl: './third.html',
  styleUrl: './third.css'
})
export class Third {
protected readonly n = "terzo";
}
