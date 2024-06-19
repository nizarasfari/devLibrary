import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  providers: [],
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
    
  ngOnInit(): void {
      
  }
  ngOnChanges(changes: SimpleChanges): void {
        
    }


}
