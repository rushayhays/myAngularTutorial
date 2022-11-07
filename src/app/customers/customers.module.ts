import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { CapitalizePipe } from '../shared/capitalize.pipe';

@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [CustomersComponent],
  providers: [],
  bootstrap: [CustomersComponent]
})
export class CustomersModule { }