import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appCounter]'
})

export class CounterDirective implements OnChanges {

    constructor(private template: TemplateRef<Object>,
                private container: ViewContainerRef) {
    }

    @Input() appCounterOf: number;

    ngOnChanges(changes: SimpleChanges) {
        this.container.clear();
        for (let i = 0; i < this.appCounterOf; i++) {
            this.container.createEmbeddedView(this.template,
                {$implicit: i + 1});
        }
    }
}
