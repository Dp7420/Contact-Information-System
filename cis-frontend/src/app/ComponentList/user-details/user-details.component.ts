import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDetailsService } from '../../Services/user-details.service';
import { Router } from '@angular/router';
import { UserDetail } from '../../Classes/user-detail';
import { AuthServiceService } from '../../Services/auth-service.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

interface UserDetails {
  memberId: bigint;
  name: string;
  emailId: string;
  mobile: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userdetails: UserDetail[];
  isAdmin: boolean = false;
  searchQuery: string = '';
  searchResults: UserDetail[] = [];
  dataSource =new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private userService: UserDetailsService,
    private router: Router,
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.userList();
  }

  userList(): void {
    this.userService.getUserList().subscribe(data => {
      this.userdetails = data;
      this.searchResults=data;
      // this.dataSource=data;
      console.log(data);
    });
  }

  updateUser(memberId: bigint): void {
    this.router.navigate(['/update-user', memberId]);
  }

  deleteUser(memberId: bigint): void {
    this.userService.deleteUserData(memberId).subscribe(data => {
      console.log(data);
      this.userList();
    }, error => console.log(error));
  }

  UserDataView(memberId: bigint): void {
    this.router.navigate(['/userData', memberId]);
  }

  onSearch(event: Event): void {
    event.preventDefault();
    if (this.searchQuery) {
      this.searchResults = this.userdetails.filter(user =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.searchResults = this.userdetails;
    }
  }
}
