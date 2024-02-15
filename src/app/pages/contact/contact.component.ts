import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input()
  initialState: BehaviorSubject<User> = new BehaviorSubject({} as User);

  @Output()
  formValuesChanged = new EventEmitter<User>();

  @Output()
  formSubmitted = new EventEmitter<User>();

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.initialState.subscribe(user => {
      this.form = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
        subject: ['', Validators.required],
        message: ['', Validators.required],
      });
    });

    this.form.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  //onSubmit()
  onSubmit(user: User) {
    // user.submittedAt = new Date();
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    user.submittedAt = new Date(Date.parse(now.toLocaleString('en-US', options)));

    // const headers = new HttpHeaders({ 'myHeader': 'ContactUserDetails' });
    // this.http.post<{ user: User }>(this.DB_URL, user, { headers: headers })
    //   .subscribe({
    //     next: () => {
    //       this.openSuccessSnackBar();
    //     },
    //     error: () => {
    //       this.openFailureSnackBar();
    //     }
    //   });
  }

  //Successful Snackbar addDoNotSellMyInfoUser() event
  openSuccessSnackBar() {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    config.panelClass = ['snackbar-padding'];
    config.duration = 3000;
    this._snackBar.open('Message sent!', 'Close', config);
  }

  //Failure Snackbar addDoNotSellMyInfoUser() event
  openFailureSnackBar() {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    config.panelClass = ['snackbar-padding'];
    config.duration = 3000;
    this._snackBar.open('Message not sent!', 'Close', config);
  }

}
