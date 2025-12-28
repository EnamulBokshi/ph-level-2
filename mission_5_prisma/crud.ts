import { prisma } from "./lib/prisma";

async function run(){
    const createUser = await prisma.users.create({
        data: {
            name: "Karabi",
            email: "Karabim@gmail.com"
        }
    })   

    console.log(`User created: `, createUser)
}

// run().then(()=> {prisma.$disconnect()}).catch((err)=> {console.log(err)});

async function createPost (){
    const post = await prisma.posts.create({
        data: {
            title: 'This is the title of the first post of enamul',
            content: 'I delighted to share that I am falling in love with someone, she is an angle.',
            authorId: 1
        }
    })

    console.log('Posts created : ', post)
}


// createPost().then(()=>{prisma.$disconnect()}).catch((err)=> console.log(`Error: `, err.message));
// async function getPosts(){
// const 
// }


// creating profile
async function createProfil(){

    const profile = await prisma.profile.create({
        data: {
        bio:'Level to web engineer',
        userId: 1
    }
    })

    console.log(`Profile: `, profile)
}

// createProfil().then(()=> prisma.$disconnect()).catch((err)=>console.log(`Error: `, err.message));


// Retrieving users
async function getUsers(){
    const users = await prisma.users.findMany({
        include:{
            posts:true,
            profile: true
        }
    });
    // console.log(`User Data: `, users);
    console.dir(users, {depth: Infinity});
}


// getUsers().then(()=> prisma.$disconnect()).catch((err)=>console.log(`Error: `, err.message));

// select user id and their posts
async function getUserPosts() {
    const userPosts = await prisma.users.findMany({
        select:{
            id: true,
            posts: true
        }
    })
    console.dir(userPosts, {depth: Infinity});
}

// getUserPosts().then(()=> prisma.$disconnect()).catch((err)=>console.log(`Error: `, err.message));


// update operations

async function  updateUserProfile() {
    const updateUser = await prisma.profile.update({
        where: {
            userId: 1
        },
        data: {
            bio: 'I love you to much my love!',
            dateOfBirth: '2025-12-27T07:19:01.863Z'
        },
        select:{
            id:true,
            bio: true,
            user: {
                select:{
                    id: true,
                    email: true,
                    name: true,
                }
            }
        }
    })

    console.dir(updateUser,{depth: Infinity});
}

// updateUserProfile().then(()=> prisma.$disconnect()).catch((err)=>console.log(`Error: `, err.message));


// delete a user
// we cann't delete a user who has posts or profile 
// if we want to delete the user then we must ensure his other data doesn't exists in database
// either we can delete these manually or using subquery

async function deleteUserById(id: number) {
    const deletedUser = await prisma.users.delete({
        where:{
            id 
        },

    })
    console.log(`Deleted user: `, deletedUser);
}

// deleteUserById(2).then(()=> prisma.$disconnect()).catch((err)=>console.log(`Error: `, err.message));


// upserting 
// upsert means: update if found the user or data else create one 

async function upsertUserByEmail (email: string){
    const upsertUser = await prisma.users.upsert({
        where: {
            email
        },
        update: {
            name: 'Enmaul bokshi'
        },
        create: {
            name: "Enamul bokshi",
            email
        }

    })

    console.log('Upsert user: ', upsertUser);
}

upsertUserByEmail("enamul@gmail.com").then(()=> prisma.$disconnect());
