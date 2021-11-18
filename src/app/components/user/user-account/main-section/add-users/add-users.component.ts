import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import{FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import{UsersServiceService} from '../../../../../services/users-service.service'
import { Subscription } from 'rxjs';
import { UserAPI } from 'src/app/models/user-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  myForm2: FormGroup;
  private subscriptionsAdmin:Subscription[]=[];
  constructor(private fb: FormBuilder,private fb2:FormBuilder, private AddUsersServ:UsersServiceService,private router:ActivatedRoute) {

    this.myForm2=this.fb.group({
      username:['',[Validators.required,Validators.minLength(10)]],
      email:['',[Validators.required,Validators.minLength(10),Validators.maxLength(40),Validators.email]],
      password:['',[Validators.required,Validators.maxLength(20),Validators.minLength(6)]]
    })
    
   }

  ngOnInit(): void {
    this.myForm2.valueChanges.subscribe() 
  }

  addUser(user:UserAPI){
     this.subscriptionsAdmin.push(
       this.AddUsersServ.insertUser(user)
       .subscribe(newUser=>
         {user=newUser;
           console.log(newUser)
           alert(`you have Added ${user.username}, Successfully.!`);

         },(err)=>{alert(`the name ${user.email}, is used`)}
         ))
   }

   updateUser(u:UserAPI){
     this.AddUsersServ.updateUser(u).subscribe(newupdated=>{
       u=newupdated;
     })
   }

}
