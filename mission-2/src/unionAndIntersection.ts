type UserRole = 'admin' | 'user' | 'guest';

const getDashBoard = (role:UserRole)=>{

    if(role === "admin") return "Admin DashBoard"
    else if( role === "guest") return "Guest page";
    else if (role === 'user') return "Home page";
    else return "access denied";
}

// const userRle = getDashBoard('dfsjfd') // wrong 
const userRole = getDashBoard('admin') // Admin Dashboard would returns


// Intersection  &

type Employee = {
    id: string,
    name: string,
    phoneNo: string,

}

type Manager ={
    designation: string,
    teamSize: number,

}

type EmployeeManager = Employee & Manager  // this person is an employee + an user


const ChowdhuryShabeb: EmployeeManager = {
    id: "124",
    name: "halarpo",
    phoneNo: '017871755616',
    designation: 'manager',
    teamSize: 20    
}