import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  myRegisterForm: FormGroup;



  constructor(
    private fb: FormBuilder,
    public authSerrvice: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.myRegisterForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      role: ['User']
    });
  }



  register() {
    console.log(this.myRegisterForm.value)
    this.authSerrvice.registerService(this.myRegisterForm.value).subscribe(res => {
      this.router.navigateByUrl("auth/login")
    }, err => {
      Swal.fire({
        title: 'Erreur !',
        text: "Something went wrong",
        icon: 'error',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    })
  }

}
