import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { IntermediateRoutingModule } from './Intermediate-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './services/character.service';
import { AddNamePipe } from './pipes/add-name.pipe';
import { IntermediateIndexComponent } from './pages/index/intermediate-index.component';

@NgModule({
  declarations: [
    CharacterCardComponent,
    IntermediateIndexComponent,
    AddNamePipe
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
