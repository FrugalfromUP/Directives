import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  private hasView = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appCustom(condition: any) {
    condition.map(
      (el: any) =>
        el % 2 === 0 && this.viewContainer.createEmbeddedView(this.templateRef)
    );
  }
}
