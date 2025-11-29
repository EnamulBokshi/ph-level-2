import http, {IncomingMessage, Server, ServerResponse} from "http";
import config from "./config";
import  { RouteHandler, routes } from "./helpers/RouteHandler";
import './routes';

const server: Server = http.createServer((req:IncomingMessage, res: ServerResponse)=>{
    console.log("Server is running......");

    const method = req.method || '';
    const path = req.url || '';
    const mappedRoute = routes.get(method);
    const handler : RouteHandler | undefined = mappedRoute?.get(path);

    if (handler){
        handler(req, res);
    }else {
        res.writeHead(404, {"content-type": "application/json"});
        res.end(JSON.stringify({
            success: false, 
            message: "Route not found!!!",
            path,
        }))
    }
    //root route
    // if(req.url == '/' && req.method == "GET"){
    //     res.writeHead(200, {"content-type": "application/json"});
    //     res.end(JSON.stringify({
    //         message: "Hello broken boy enjoy nodejs",
    //         path: req.url
    //     }))
    // }
    
    // health route
    // if(req.url === '/api' && req.method === 'GET'){
    //     res.writeHead(200, {"content-type":"application/json"});
    //     res.end(JSON.stringify({
    //         message: "Heath check ok",
    //         path: req.url
    //     }))
    // }

    // posting

    // if(req.url === '/api/users' && req.method === 'POST'){
        
    //     let body = '';
    //     req.on("data", (chunk)=>{
    //         body += chunk.toString();
    //     })

    //     req.on("end", ()=>{
    //         try {
    //             const parsedBody = JSON.parse(body);
    //             console.log(parsedBody);
    //             console.log('first');
    //             res.end(JSON.stringify(parsedBody));
    //         } catch (error:any) {
    //             console.log(error?.message)
    //         }
    //     })

        

    // }
});

server.listen(config.port, ()=>{
    console.log(`server is running on port ${config.port}`);
})

