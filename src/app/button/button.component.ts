import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant = "";
  @Input() size = "";
  @Input() color = "";
  @Input() startIcon = "";
  @Input() endIcon = "";
  @Input() isDisabled = false;

  constructor() {
    
  }


}
