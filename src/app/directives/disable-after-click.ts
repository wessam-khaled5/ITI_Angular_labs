import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
  standalone: true
})
export class DisableAfterClickDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    const button = this.el.nativeElement;

    button.disabled = true;
    button.innerText = 'Processing...';

    setTimeout(() => {
      button.disabled = false;
      button.innerText = 'Register';
    }, 3000);
  }

}