import { JwtPayload } from './../../../node_modules/@types/jsonwebtoken/index.d';
import express from "express"

declare global{
    namespace Express{
        interface Request{
            user?: JwtPayload
        }
    }
}