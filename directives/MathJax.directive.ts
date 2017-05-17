import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
declare var MathJax;

@Directive({
    selector: '[MathJax]'
})


export class MathJaxDirective implements OnChanges{

    @Input('MathJax') MathJaxInput: string;
    @Input('IsVisual') IsVisual : boolean;

    constructor(private el: ElementRef) {
    }

    ngOnChanges() {
        this.el.nativeElement.innerHTML = this.MathJaxInput;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el.nativeElement]);
        // MathJax.Hub.Register.StartupHook("End Jax",function () {
        // alert("The TeX input jax is loaded and ready!");this.IsVisual = !this.IsVisual;
        // });
        // let a = 1;
    }
}
