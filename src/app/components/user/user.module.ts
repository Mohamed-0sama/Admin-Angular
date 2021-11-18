import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';
// import {MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { AppRoutingModule } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserAccountHeaderComponent } from './user-account/user-account-header/user-account-header.component';
import { UserAccountFooterComponent } from './user-account/user-account-footer/user-account-footer.component';
import { UserAccountAsideComponent } from './user-account/user-account-aside/user-account-aside.component';
import { UserAccountMainComponent } from './user-account/user-account-main/user-account-main.component';
import { OrderComponent } from './user-account/main-section/order/order.component';
import { PaymentsComponent } from './user-account/main-section/payments/payments.component';
import { NoonCreditsComponent } from './user-account/main-section/noon-credits/noon-credits.component';
import { ReturnsComponent } from './user-account/main-section/returns/returns.component';
import { PreferencesComponent } from './user-account/main-section/preferences/preferences.component';
import { ProfileComponent } from './user-account/main-section/profile/profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
// import { HighchartsChartModule } from 'highcharts-angular/public_api';
import { HighchartsChartModule } from 'highcharts-angular';
// import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './user-account/main-section/dashboard/dashboard.component';
import { ProductsComponent } from './user-account/main-section/products/products.component';
import { CustomersComponent } from './user-account/main-section/customers/customers.component';
import { SellersComponent } from './user-account/main-section/sellers/sellers.component';
import { CardDashboardComponent } from './user-account/main-section/dashboard/card-dashboard/card-dashboard.component';
import { ProductDetailsComponent } from './user-account/main-section/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes : Routes =[
  {path: 'Account', component: UserAccountComponent,
children:[
  {path: 'Orders', component: OrderComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Payments', component: PaymentsComponent},
  {path: 'noonCredits', component: NoonCreditsComponent},
  {path: 'Returns', component: ReturnsComponent},
  {path: 'Customers', component: CustomersComponent},
  {path: 'Preferences', component: PreferencesComponent},
  {path: 'Products', component: ProductsComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: 'Products/:id', component: ProductDetailsComponent },
  // { path: 'Products/:id/:totalProducts', component: ProductDetailsComponent },
]},
  {path: '', redirectTo: '/User/Account/Orders', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    UserAccountComponent,
    UserAccountHeaderComponent,
    UserAccountFooterComponent,
    UserAccountAsideComponent,
    UserAccountMainComponent,
    PaymentsComponent,
    NoonCreditsComponent,
    ReturnsComponent,
    PreferencesComponent,
    ProfileComponent,
    DashboardComponent,
    ProductsComponent,
    CustomersComponent,
    SellersComponent,
    CardDashboardComponent,
    ProductDetailsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatSidenavModule,
    HighchartsChartModule,
    MatSliderModule,
    MatSlideToggleModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    DataTablesModule,
    MatFormFieldModule,
    MatInputModule,

    // AppRoutingModule

    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class UserModule { }
