import { FormsModule } from '@angular/forms';
// export class User {
//     constructor(
//         public first_name: string = '',
//         public last_name: string = '',
//         public email: string = '',
//         public password: string = '',
//         public password_confirm: string = '',
//         public street: string = '',
//         public apt: string = '',
//         public city: string = '',
//         public state: string = '',
//         public answer: string = '',
//
//     ){}
// }

export class User {

    public first_name: string = "";
    public last_name: string = "";
    public email: string = "";
    public password: string = "";
    public password_confirm: string = "";
    public street: string = "";
    public unit: string = "";
    public city: string = "";
    public state: string = "";

    constructor(){
        this.first_name="";
        this.last_name="";
        this.email="";
        this.password="";
        this.password_confirm="";
        this.street="";
        this.unit="";
        this.city="";
        this.state="";
    }
}
