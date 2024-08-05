import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CompanyInformation } from '../Classes/company-information';
import { Organization } from '../Classes/organization';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private companyBaseURL = "http://localhost:8080/api/admin/company";
  private organizationBaseURL = "http://localhost:8080/cis/api/organization";
  private apiUrl = "http://localhost:8080/cis/admin";
  private userUrl="http://localhost:8080/cis/api/user";
  
  private role: string = '';  // Initially empty, set after login

  constructor(private httpClient: HttpClient) { }

  getAllCompanyInformations(): Observable<CompanyInformation[]> {
    return this.httpClient.get<CompanyInformation[]>(`http://localhost:8080/api/user/company/getAllCompanyInfo`);
  }

  createCompanyInformation(companyInformation: CompanyInformation): Observable<object> {
    return this.httpClient.post(`http://localhost:8080/api/admin/company/saveCompany`, companyInformation);
  }

  fetchCompanyById(cid: bigint): Observable<CompanyInformation> {
    return this.httpClient.get<CompanyInformation>(`http://localhost:8080/api/user/company/fetch/${cid}`);
  }

  updateCompanyInformation(cid: bigint, companyInformation: CompanyInformation): Observable<object> {
    return this.httpClient.put(`http://localhost:8080/api/admin/company/updateCompanyInfo/${cid}`, companyInformation);
  }

  deleteCompanyInformation(cid: bigint): Observable<object> {
    return this.httpClient.delete(`http://localhost:8080/api/admin/company/deleteComoanyInfo/${cid}`);
  }

  getAllorganizationInfo(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(`http://localhost:8080/api/user/organization/getAllOrgs`);
  }

  createOrganizationInfo(organization: Organization): Observable<object> {
    return this.httpClient.post(`http://localhost:8080/api/admin/organization/saveOrganization`, organization);
  }

  fetchOrganizationById(organizationCode: bigint): Observable<Organization> {
    return this.httpClient.get<Organization>(`http://localhost:8080/api/user/organization/fetch/${organizationCode}`);
  }

  updateOrganizationInformation(organizationCode: bigint, organization: Organization): Observable<object> {
    return this.httpClient.put(`http://localhost:8080/api/admin/organization/updateOrg/${organizationCode}`, organization);
  }

  deleteOrgById(organizationCode: bigint): Observable<object> {
    return this.httpClient.delete(`http://localhost:8080/api/admin/organization/deleteOrg/${organizationCode}`);
  }

  adminChangePassword(id: bigint, oldPassword: string, newPassword: string): Observable<any> {
    const requestBody = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.httpClient.put(`${this.apiUrl}/changePassword/${id}`, requestBody)
      .pipe(
        catchError(this.handleError)
      );
  }
  userChangePassword(memberId: bigint, oldPassword: string, newPassword: string): Observable<any> {
    const requestBody = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.httpClient.put(`${this.userUrl}/changePassword/${memberId}`, requestBody)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = error.error;
    }
    return throwError(errorMessage);
  }

  // Method to set role, called after user logs in
  setRole(role: string): void {
    this.role = role;
  }
  getRole(){
    return this.role;
  }

  isAdmin(): boolean {
    const data=localStorage.getItem('adminData');
    if(data!=null){
      return JSON.parse(data);
    }
    return this.role === 'user';
  }
}
