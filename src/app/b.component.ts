import { Component, Input } from "@angular/core";
@Component({
  selector: "app-message",
  template: `
    <p [innerHtml]="text"></p>
  `
})
export class BComponent {
  @Input() text: string;
}
