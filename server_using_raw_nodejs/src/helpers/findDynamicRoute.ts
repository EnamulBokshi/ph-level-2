/**
 * 
 * Let's say we need to access a specific student to update their marks, assignment or attendance stuff. 
 * How can we get it? So far we have apis like /api/users
 * Now we we want a specific student using their id like: /api/users/1 
 * We can pick or get the id using params as /api/users/:id
 * so here we need to grab the id dynamically.
 * 
 * So as our intension suggest we need to create a findParams or findID method, which will help us to find id's dynamically
 * Then let's move forward.
 * 
 * 
 */

import { routes } from "./RouteHandler";

// Actual url: http://localhost:5000/api/users/1 -> what users typed on the url 
// Our api : http://localhost:5000/api/users/:id -> our api route

/*
    TODOs: 
    ?Make an array of url and path like : array(url['api','users','1']) and api path = ['api','users',':id'] 
    if you noticed the arrays then you might see their length exactly same 
    that means if we can find the index number of ':id' then using this index number we also find the id = '1' from the url
    Then let's stop talking and begin our task
*/


/* 
    For better understanding let's break it down the route map

    so our route was structured somewhat below: 

 const routes : Map<string, Map<string, RouteHandler>> = new Map();
 Which is something like below:
   map() {
    
    method: map() {
        route: (req,res)=>{}, // the handler function
    }
    }

    For better view, let's see an example
    {
        'POST': {
            '/api/users': (req,res) => {},
        },
        'GET' : {
            '/health-check': (req, res) => {}
        }

    }


*/

/**
 * 
 * @param method 
 * 
 * @param url 
 * @returns 
 */

function findDynamicRoute(method: string, url: string) {
    // now we need to find out the route or the actual api route from our route 
     const mappedRoute = routes.get(method);
     if(!mappedRoute) return null;
    for(const [routePath, handler] of mappedRoute?.entries()){
        const urlArray = url.split('/'); // e,g; ['api','students', '1'] -> l = 3
        const routeArray = routePath.split('/'); // e,g: ['api', 'students', ':id'] -> l = 3

        if(urlArray.length !== routeArray.length) continue

        // if the length is equal then we can try to get the provided id
        const params: any = {};
        let matched = true;
        // api/users/:id
        for(let i = 0; i < routeArray.length; i++){
            if(routeArray[i]?.startsWith(":")){
                params[routeArray[i]?.substring(1)!] = urlArray[i]
                /*
                    after this operation we will get something like below
                    {
                        id: 1,
                    }
                */
            }
            // if the any of the element of the arrays does not match that means it's not the url or the student we are looking for 
            // So we must break the operation and looked on to other apis
            else if(routeArray[i] !== urlArray[i]){
                matched = false;
                break;
            }
        }

        if(matched){
            return {handler, params}
        }
    }
    return null
}

export default findDynamicRoute;