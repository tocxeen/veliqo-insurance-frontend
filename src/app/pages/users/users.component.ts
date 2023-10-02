import { Component, OnInit } from '@angular/core';
import { AuthService, UserService } from 'src/app/tools/services';
import { UserFormComponent } from './user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any;
  userNumbers: any;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getNumberOfUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((res: any) => {
      this.users = res;
    });
  }
  getNumberOfUsers() {
    this.userService.getNumberOfUsers().subscribe((res: any) => {
      this.userNumbers = res;
    });
  }

  activatOrDeactivate(username: string) {
    this.userService.activatOrDeactivate(username).subscribe((res: any) => {
      this.authService.autoSuccess();
      this.ngOnInit();
    });
  }

  delete(username: string) {
    this.userService.activatOrDeactivate(username).subscribe((res: any) => {
      this.authService.autoSuccess();
      this.ngOnInit();
    });
  }

  openDialog(edit: boolean, data?: any) {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '500px',
      height: '100vh',
      disableClose: true,
      position: { right: '0px' },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }
}
