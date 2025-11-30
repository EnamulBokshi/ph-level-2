import { IncomingMessage, ServerResponse } from "http";
import { RouteHandler, routes } from "../helpers/RouteHandler";
import sendJson from "../helpers/sendJson";
import { parseBody } from "../helpers/parseBody";
import { readUsers, writeUsers } from "../helpers/fileDB";

function addRoute (method: string, path: string, handler: RouteHandler){
    if(!routes.has(method)) routes.set(method, new Map());
    routes.get(method)!.set(path, handler);
}


addRoute("GET", '/', (req, res) =>{
    // res.writeHead(200, {"content-type": "application/json"});
    // res.end(JSON.stringify({
    //     success: true,
    //     message: "Welcome to Nodejs world",
    //     path: req.url
    // }))
    sendJson(res, {success:true, message: "Welcome to Nodejs World!!", path: req.url}, 200);
})

// health checking route
addRoute("GET", "/health-check", (req, res)=>{
    //  res.writeHead(200, {"content-type":"application/json"});
    //     res.end(JSON.stringify({
    //         message: "Heath check ok",
    //         path: req.url
    //     }))

    sendJson(res, {success:true, message: "Heath check ok!!", path: req.url}, 200);
    
})


// User add

addRoute("POST", "/api/users", async (req, res)=>{
    // let body = '';
    //     req.on("data", (chunk)=>{
    //         body += chunk.toString();
    //     })

    //     req.on("end", ()=>{
    //         try {
    //             const parsedBody = JSON.parse(body);
    //             console.log(parsedBody);
    //             console.log('first');
    //              res.end(JSON.stringify(parsedBody));
    //             sendJson(res, {success:true, data:parsedBody, path: req.url}, 201);

    //         } catch (error:any) {
    //             console.log(error?.message)
    //         }
    //     })
    const body = await parseBody(req);
    const users = readUsers();
    const newUser = {
        id: Date.now(),
        ...body,
    }
    users.push(newUser);

    try {
        console.log(`Student ${newUser.id} is saving to database`);
        writeUsers(users);
        console.log('Student saved successfully!!');
        sendJson(res, {success: true, data: body, path: req.url}, 201 );
    } catch (error) {
        sendJson(res, {success: false,error, path: req.url}, 402);
    }

})

