import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appVariant]'
})
export class VariantDirective implements OnInit {
  @Input() appVariant = "";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    switch (this.appVariant) {
      case "default":
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'btn');
        break;
      case "default-active":
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'btn btn-active');
        break;
      case "outline":
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'btn btn--outline');
       
        break;
      case "outline-active":
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'btn btn--outline btn--outline-active');
        break;  
      case "text":
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'btn btn--text');
        break;  
      case "text-active":
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'btn btn--text btn--text-active');
        break;  
      case "disableShadow":
        this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'btn btn--disabled-shadow');
        break;  
    }

  }

}
