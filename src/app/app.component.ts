import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import { caretBack, caretDownOutline, caretForward, chevronDownOutline, chevronUpCircleOutline, closeOutline, createOutline, keyOutline, logOutOutline, menuOutline, personCircleOutline, personOutline, trashOutline } from 'ionicons/icons';
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
     caretForward,caretBack,createOutline,trashOutline,menuOutline,caretDownOutline,personCircleOutline,personOutline,keyOutline,logOutOutline,closeOutline
    })
  }
}
