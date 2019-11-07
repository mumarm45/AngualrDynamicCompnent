import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BComponent } from "./b.component";
@NgModule({
  declarations: [AppComponent, BComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BComponent]
})
export class AppModule {}
