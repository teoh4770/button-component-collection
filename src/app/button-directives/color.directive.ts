import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @Input() appColor = "";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      switch (this.appColor) {
        case "default":
          this.renderer.addClass(this.elementRef.nativeElement, "btn--default")
          break;
        case "default-active":
          this.renderer.addClass(this.elementRef.nativeElement, "btn--default-active")
          break;
        case "primary":
          this.renderer.addClass(this.elementRef.nativeElement, "btn--primary")
          break;
        case "primary-active":
          this.renderer.addClass(this.elementRef.nativeElement, "btn--primary-active")
          break;
        case "secondary":
          this.renderer.addClass(this.elementRef.nativeElement, "btn--secondary")
          break;
        case "secondary-active":
          this.renderer.addClass(this.elementRef.nativeElement, "btn--secondary-active")
          break;
        case "danger":
          this.renderer.addClass(this.elementRef.nativeElement, "btn--danger")
          break;
        case "danger-active":
          this.renderer.addClass(this.elementRef.nativeElement, "btn--danger-active")
          break;
      }
  }

}
