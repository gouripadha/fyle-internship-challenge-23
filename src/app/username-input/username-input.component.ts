import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.scss'],
})
export class UsernameInputComponent {
  usernameForm: FormGroup = new FormGroup({
    username: new FormControl(''),
  });

  ngOnInit() {
    this.usernameForm = new FormGroup({
      username: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.usernameForm.value);
  }
}
