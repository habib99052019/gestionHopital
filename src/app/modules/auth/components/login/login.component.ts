import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:any
  password:any
  constructor(
    private authService : AuthService , 
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    const obj = {
      "email": this.email,
      "password": this.password
    }
    this.authService.loginService(obj).subscribe(res=>{
      console.log(res);
      localStorage.setItem("token" , res.token)
      this.authService.userLoggedDetails.id = res.id
      this.authService.userLoggedDetails.role = res.role
      if(res.role === "SuperAdmin"){
        this.router.navigateByUrl("/liste-user")
      }else if(res.role === "Manager"){
        alert("manager medecin role")
      }else if(res.role === "Admin"){
        alert("admin medecin role")
      }else if(res.role === "User"){
        alert("user role")
      }
      
    },err => {
      Swal.fire({
        title: 'Erreur !',
        text: "Mot passe incorrect",
        icon: 'error',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    })
  }

}
