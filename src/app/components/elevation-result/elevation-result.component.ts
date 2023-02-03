import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-elevation-result',
  templateUrl: './elevation-result.component.html',
  styleUrls: ['./elevation-result.component.scss']
})
export class ElevationResultComponent {
  @Input() title?: string;
  @Input() elevationValue$?: Observable<number>;
}
