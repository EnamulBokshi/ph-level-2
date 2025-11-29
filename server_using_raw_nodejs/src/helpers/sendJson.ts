import { ServerResponse } from "http";

const sendJson = (res: ServerResponse, data: any, status: number) => {
    res.writeHead(status, {"content-type": "application/json"});
    res.end(JSON.stringify(data));
}

export default  sendJson;