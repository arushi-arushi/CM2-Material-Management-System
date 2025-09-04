import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import { caretBack, caretDownOutline, caretForward, chevronDownOutline, chevronUpCircleOutline } from 'ionicons/icons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.addAllIcons();
  }
  addAllIcons(){
    addIcons({
     caretForward,caretBack
    })
  }
}
