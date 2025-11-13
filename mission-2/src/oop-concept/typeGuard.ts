// type guard 

// in this module we will learn type in and type or



type NormalUser = {
    name: string;
}

type AdminUser = { 
    name: string;
    role: "Admin";
}

// type in guard 

const getUserInfo = (user: NormalUser | AdminUser) => {
    if("role" in user) {
        console.log(`Mr. ${user.name} is an Admin`);
    }

    else console.log("Normal User");
}

getUserInfo({name: 'Hello Enam', role: "Admin"});

