import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormComponent } from '../form/form.component';

@Injectable()
export class DilogBoxService {

  public closeDialog: Subject<boolean>

  constructor(private overlay: Overlay) {
    this.closeDialog = new Subject();
  }

  openDialog() {
    //Globally centered position strategy
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    //Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'overlay-backdroup',
      hasBackdrop: true,
      panelClass: 'overlay-panel',
    });


    const portal = new ComponentPortal(FormComponent);
    const instance = overlayRef.attach(portal);

    //close the dialog using backdroupClick()
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    this.closeDialog.subscribe(() => {
      overlayRef.detach();
    });

    return instance
  }

}
