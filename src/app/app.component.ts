import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { BComponent } from "./b.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private resolver: ComponentFactoryResolver) {}
  @ViewChild("bcontainer", { read: ViewContainerRef })
  bcontainer: ViewContainerRef;
  title = "CodeSandbox";
  text: string;

  createComponent() {
    this.bcontainer.clear();
    const factory = this.resolver.resolveComponentFactory(BComponent);
    const componentRef = this.bcontainer.createComponent(factory);
    componentRef.instance.text = this.text;
  }

  destroyComponent() {
    this.bcontainer.destroy();
  }
}
