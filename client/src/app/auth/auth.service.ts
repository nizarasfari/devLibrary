import { Injectable } from "@angular/core";
import {Router} from "@angular/router";



@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private users = [
        {username: 'admin', password: 'admin', role: 'admin'},
        {username: 'user', password: 'user', role: 'user'}
    ]

    private currentUser: any = null;


    constructor(private router: Router) { }

    login(username: string, password: string) {
        const  user = this.users.find(user => user.username === username && user.password === password);
        if (user) {
            this.currentUser = user;
             return true;
        }
        return false;
    }

    logout() {
        this.currentUser = null;
        this.router.navigate(['/login']);
    }

    get isLoggedIn() {
        return this.currentUser !== null;
    }

    get currentUserRole() {
        return this.currentUser ? this.currentUser.role : '';
    }
    

}