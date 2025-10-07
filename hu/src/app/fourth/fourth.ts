import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  imports: [CommonModule],
  templateUrl: './fourth.html',
  styleUrl: './fourth.css'
})
export class Fourth {
protected readonly n = "quarto";
}
