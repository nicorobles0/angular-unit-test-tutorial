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

@NgModule({
  declarations: [
    AddNamePipe,
    CharacterCardComponent,
    ExampleComponent,
    Theory1Component,
    Example2Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IntermediateRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService]
})
export class IntermediateModule { }
