import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './ComponentList/admin/admin.component';
import { UserComponent } from './ComponentList/user/user.component';
import { HomeComponent } from './ComponentList/home/home.component';
import { UserDetailsComponent } from './ComponentList/user-details/user-details.component';
import { AddUserComponent } from './ComponentList/add-user/add-user.component';
import { UpdateUserComponent } from './ComponentList/update-user/update-user.component';
import { UserDataComponent } from './ComponentList/user-data/user-data.component';
import { AddCategoryComponent } from './ComponentList/add-category/add-category.component';
import { CategoryListComponent } from './ComponentList/category-list/category-list.component';
import { CategoryDataComponent } from './ComponentList/category-data/category-data.component';
import { UpdateCategoryComponent } from './ComponentList/update-category/update-category.component';
import { AddCardComponent } from './ComponentList/add-card/add-card.component'; 
import { CardDataComponent } from './ComponentList/card-data/card-data.component';
import { CardListComponent } from './ComponentList/card-list/card-list.component';
import { UpdateCardComponent } from './ComponentList/update-card/update-card.component';
import { UpdateCompanyInfoComponent } from './ComponentList/update-company-info/update-company-info.component';
import { CompanyListComponent } from './ComponentList/company-list/company-list.component';
import { AddCompanyInfoComponent } from './ComponentList/add-company-info/add-company-info.component';
import { CompanyInfoComponent } from './ComponentList/company-info/company-info.component';
import { OrganizationListComponent } from './ComponentList/organization-list/organization-list.component';
import { UpdateOrganizationComponent } from './ComponentList/update-organization/update-organization.component';
import { AddOrganizationComponent } from './ComponentList/add-organization/add-organization.component';
import { OrganizationInfoComponent } from './ComponentList/organization-info/organization-info.component';
import { AuthGuard } from './auth.guard';
import { ChangePasswordComponent } from './ComponentList/change-password/change-password.component';

const routes: Routes = [
  { path:'', redirectTo:'admin', pathMatch:'full'},
  { path:'admin', component:AdminComponent},
  { path:'user', component:UserComponent},
  { path:'home', component:HomeComponent, canActivate: [AuthGuard]},
  { path:'userDetails', component:UserDetailsComponent , canActivate: [AuthGuard]},
  { path:'addUser', component:AddUserComponent },
  { path:'update-user/:memberId', component:UpdateUserComponent , canActivate: [AuthGuard]},
  { path:'userData/:memberId', component:UserDataComponent , canActivate: [AuthGuard]},
  { path:'addCategory', component:AddCategoryComponent , canActivate: [AuthGuard]},
  { path:'updateCategory/:categoryId', component:UpdateCategoryComponent , canActivate: [AuthGuard]},
  {path:'categoryList', component:CategoryListComponent , canActivate: [AuthGuard]},
  {path:'categoryData/:categoryId', component:CategoryDataComponent , canActivate: [AuthGuard]},
  {path:'addCard', component:AddCardComponent , canActivate: [AuthGuard]},
  {path:'cardData/:cardId', component:CardDataComponent , canActivate: [AuthGuard]},
  {path:'cardList', component:CardListComponent , canActivate: [AuthGuard]},
  {path:'updateCard/:cardId', component:UpdateCardComponent , canActivate: [AuthGuard]},
  {path:'updateCompanyInfo/:cid', component:UpdateCompanyInfoComponent , canActivate: [AuthGuard]},
  {path:'companyList', component:CompanyListComponent , canActivate: [AuthGuard]},
  {path:'addCompanyInfo', component:AddCompanyInfoComponent , canActivate: [AuthGuard]},
  {path:'companyInfo/:cid', component:CompanyInfoComponent , canActivate: [AuthGuard]},
  {path:'organizationList', component:OrganizationListComponent , canActivate: [AuthGuard]},
  {path:'updateOrganization/:organizationCode', component:UpdateOrganizationComponent , canActivate: [AuthGuard]},
  {path:'addOrganization', component:AddOrganizationComponent , canActivate: [AuthGuard]},
  {path:'organizationInfo/:organizationCode', component:OrganizationInfoComponent , canActivate: [AuthGuard]},
  {path:'changePassword', component:ChangePasswordComponent , canActivate: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
