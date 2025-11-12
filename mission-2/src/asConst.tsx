// as constant assertion

// a better alternative of enum
enum Roles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
}


const UserRoles = {
  Admin :"Admin",
    Editor : "Editor",
    Viewer : "Viewer",   
} as const;

const canModify = (role: keyof typeof UserRoles) => {
    if(role === Roles.Admin || role === Roles.Editor) return true;
    else return false;
}
