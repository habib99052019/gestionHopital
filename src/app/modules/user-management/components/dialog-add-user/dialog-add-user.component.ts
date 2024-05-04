import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  userForm!: FormGroup;


  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastame: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      role: ['Admin', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      speciality:['tttt', [Validators.required]],
      grade:['aaaa', [Validators.required]],
      activeString:['0', [Validators.required]],
    });

    console.log(this.data)
  }

  onSubmit() {
    if (this.userForm.valid) {
      var request = this.userForm.value
      var active = this.userForm.value.activeString === "0" ? false : true

      request = {...request,is_locked:active}

      this.authService.registerService(this.userForm.value).subscribe(res => {
        Swal.fire({
          title: 'Succès !',
          text: 'L\'utilisateur a été ajouté avec succès.',
          icon: 'success',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false
        }).then(() => {
          console.log(res)
          this.userForm.reset();
          this.dialogRef.close()
        })
      }, error => {
        console.log(error)
        Swal.fire({
          title: 'Erreur !',
          text: "quelque chose s'est mal passé.",
          icon: 'error',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      })
    } else {
      Swal.fire({
        title: 'Erreur !',
        text: 'Veuillez remplir tous les champs requis correctement.',
        icon: 'error',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  }


  loadForUpdate(id:any){

    this.authService.findById(id).subscribe((res:any)=>{

      console.log(res)

    })

  }


}
