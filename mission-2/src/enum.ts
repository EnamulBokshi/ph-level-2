type UserRoles = 'Amin' | 'Editor' | 'Viewer';

const candEdit = (role: UserRoles) => {
    if(role === 'Amin' || role == 'Editor') return  true;
    else return false;
}


const isEditPermissable = candEdit("Amin"); // true


// let's enhace it, make it more dynamic and reusable 



enum Roles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
}


const canModify = (role: Roles) => {
    if(role === Roles.Admin || role === Roles.Editor) return true;
    else return false;
}


//  it's not recommended to use enum in large project

