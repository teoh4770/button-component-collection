import { Directive, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective implements OnInit {
  @Input() appSize = "";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    switch (this.appSize) {
      case "sm":
        this.renderer.addClass(this.elementRef.nativeElement, "btn--small");
        break;
      case "md":
        this.renderer.addClass(this.elementRef.nativeElement, "btn--medium");
        break;
      case "lg":
        this.renderer.addClass(this.elementRef.nativeElement, "btn--large");
        break;
    }
  }

}
