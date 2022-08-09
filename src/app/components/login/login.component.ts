import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username:string = '';
	password:string = '';
	flag = false;
	//public user={'username':'','password':''};
	validUsers= [ 
	  {'username':'chandler@friends.com', 'password':'1234'},
	  {'username':'ross@friends.com', 'password':'1234'},
	  {'username':'joey@friends.com', 'password':'1234'},
	  {'username':'rechal@friends.com', 'password':'1234'}
	];  
  
	
  constructor(    private router: Router,
    ) { }

  ngOnInit(): void {
  
  }  
  login(username:string,password:string): void {
	for (var i in this.validUsers)
	if(username == this.validUsers[i].username && password == this.validUsers[i].password){

			this.router.navigate(['streampage']);
			break;

		}
	else{this.flag = true;}
	
  }
}
