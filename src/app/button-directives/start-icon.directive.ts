import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStartIcon]'
})

export class StartIconDirective implements OnInit {
  @Input() appStartIcon = "";

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    let iconUrl = "";
    let img = document.createElement("img");
    
    if (this.appStartIcon === "") {
      return;
    }

    if (this.appStartIcon === "local_grocery_store") {
      iconUrl = "https://placehold.co/18x18"
      img.src = iconUrl;
      img.setAttribute("alt", "local_grocery_store");
    } 

    this.elementRef.nativeElement.prepend(img);

   
  }
}
