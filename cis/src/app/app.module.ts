import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './ComponentList/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './ComponentList/user/user.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './ComponentList/home/home.component';
import { HeaderComponent } from './ComponentList/header/header.component';
import { UserDetailsComponent } from './ComponentList/user-details/user-details.component';
import { AddUserComponent } from './ComponentList/add-user/add-user.component';
import { UpdateUserComponent } from './ComponentList/update-user/update-user.component';
import { UserDataComponent } from './ComponentList/user-data/user-data.component';
import { AddCategoryComponent } from './ComponentList/add-category/add-category.component';
import { UpdateCategoryComponent } from './ComponentList/update-category/update-category.component';
import { CategoryListComponent } from './ComponentList/category-list/category-list.component';
import { CategoryDataComponent } from './ComponentList/category-data/category-data.component';
import { AddCardComponent } from './ComponentList/add-card/add-card.component';
import { CardListComponent } from './ComponentList/card-list/card-list.component';
import { CardDataComponent } from './ComponentList/card-data/card-data.component';
import { UpdateCardComponent } from './ComponentList/update-card/update-card.component';
import { NavbarComponent } from './ComponentList/navbar/navbar.component';
import { ChangePasswordComponent } from './ComponentList/change-password/change-password.component';
import { CompanyListComponent } from './ComponentList/company-list/company-list.component';
import { AddCompanyInfoComponent } from './ComponentList/add-company-info/add-company-info.component';
import { UpdateCompanyInfoComponent } from './ComponentList/update-company-info/update-company-info.component';
import { CompanyInfoComponent } from './ComponentList/company-info/company-info.component';
import { OrganizationListComponent } from './ComponentList/organization-list/organization-list.component';
import { UpdateOrganizationComponent } from './ComponentList/update-organization/update-organization.component';
import { AddOrganizationComponent } from './ComponentList/add-organization/add-organization.component';
import { OrganizationInfoComponent } from './ComponentList/organization-info/organization-info.component';
import { FooterComponent } from './ComponentList/footer/footer.component';
import { AuthGuard } from './auth.guard';
import { AuthServiceService } from './Services/auth-service.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Jwtinterceptor } from './jwtinterceptor';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    HeaderComponent,
    UserDetailsComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserDataComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    CategoryListComponent,
    CategoryDataComponent,
    AddCardComponent,
    CardListComponent,
    CardDataComponent,
    UpdateCardComponent,
    NavbarComponent,
    ChangePasswordComponent,
    CompanyListComponent,
    AddCompanyInfoComponent,
    UpdateCompanyInfoComponent,
    CompanyInfoComponent,
    OrganizationListComponent,
    UpdateOrganizationComponent,
    AddOrganizationComponent,
    OrganizationInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [AuthGuard, AuthServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: Jwtinterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
