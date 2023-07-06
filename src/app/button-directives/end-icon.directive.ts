import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEndIcon]'
})
export class EndIconDirective implements OnInit {
  @Input() appEndIcon = "";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    let iconUrl = "";
    let img = document.createElement("img");

    if (this.appEndIcon === "") {
      return;
    }

    if (this.appEndIcon === "local_grocery_store") {
      iconUrl = "https://placehold.co/18x18"
      img.src = iconUrl;
      img.setAttribute("alt", "local_grocery_store");
    }
    
    this.elementRef.nativeElement.append(img);
  }
}
