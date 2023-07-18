import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { IntermediateRoutingModule } from './Intermediate-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './services/character.service';
import { AddNamePipe } from './pipes/add-name.pipe';
import { Theory1Component } from './pages/theory1/theory1.component';
import { ExampleComponent } from './pages/example/example.component';
import { Example2Component } from './pages/example2/example2.component';
import { Example3Component } from './pages/example3/example3.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddNamePipe,
    CharacterCardComponent,
    ExampleComponent,
    Theory1Component,
    Example2Component,
    Example3Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IntermediateRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CharacterService]
})
export class IntermediateModule { }
