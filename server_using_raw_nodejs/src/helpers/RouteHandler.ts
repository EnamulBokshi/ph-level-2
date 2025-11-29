import { IncomingMessage, ServerResponse } from "http";

export  type RouteHandler = (req:IncomingMessage, res: ServerResponse) => void;




export  const routes : Map<string, Map<string, RouteHandler>> = new Map();