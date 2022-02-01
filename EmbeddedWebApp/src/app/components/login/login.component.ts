import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  user = {userId: '', password: '' };
  loginForm: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('User:', this.user);
    if (this.user.userId == "userid" && this.user.password == "password"){
      this.router.navigate(['/default']);
    }
    else{
      alert("Please enter correct userId and password. Thankyou !");
    }
    
  }

}