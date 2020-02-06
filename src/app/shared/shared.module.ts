import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe'

@NgModule({
  // we can declare pipes, components, or directives
  declarations: [ CapitalizePipe ],
  exports: [ CapitalizePipe ]
})

export class SharedModule {}

/* this module is what is going to be shared all through the app
    similar to like a state store? */