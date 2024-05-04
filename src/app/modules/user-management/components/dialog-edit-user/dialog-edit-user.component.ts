import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UsersService,
    public dialogRef: MatDialogRef<DialogEditUserComponent>
  ) { }

  userForm = this.formBuilder.group({
    // username: new FormControl('lll', Validators.required),
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    role: ['Admin', Validators.required],
    speciality: ['a', [Validators.required]],
    grade: ['a', [Validators.required]],
    activeString: ['0', [Validators.required]],
  });

  ngOnInit(): void {

    this.loadData()
  }

  loadData() {


    this.userForm.setValue({
      email: this.data.email + "fdsd",
      phoneNumber: this.data.phoneNumber,
      role: this.data.role,
      firstname: this.data.firstname,
      lastname: this.data.lastname,
      speciality: this.data.speciality+"d",
      grade: this.data.grade+"dd",
      activeString: this.data.is_locked === false ? "0" : "1"
    })

  }

  onSubmit() {
    var request: any = this.userForm.value
    var active = this.userForm.value.activeString === "0" ? false : true

    request.is_Locked = active

    console.log(this.userForm.value)

    if (this.userForm.valid) {
      this.userService.updateUser(this.data.id, request).subscribe(res => {
        Swal.fire({
          title: 'Succès !',
          text: 'L\'utilisateur a été modifié avec succès.',
          icon: 'success',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false
        }).then(() => {
          this.dialogRef.close()
        })
      }, error => {
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
      })
    }

    // this.userService.updateUser(this.data.id , this.userForm.value).subscribe(res=>{
    //   Swal.fire({
    //     title: 'Succès !',
    //     text: 'L\'utilisateur a été modifié avec succès.',
    //     icon: 'success',
    //     timer: 4000,
    //     timerProgressBar: true,
    //     showConfirmButton: false
    //   }).then(()=>{
    //     this.dialogRef.close()
    //   })
    // },error=>{
    //   Swal.fire({
    //     title: 'Erreur !',
    //     text: "quelque chose s'est mal passé.",
    //     icon: 'error',
    //     timer: 4000,
    //     timerProgressBar: true,
    //     showConfirmButton: false
    //   });
    // })
  }

}
