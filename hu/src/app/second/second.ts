import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-second',
  imports: [CommonModule],
  templateUrl: './second.html',
  styleUrl: './second.css'
})
export class Second {
  protected readonly n = "secondo";
}
