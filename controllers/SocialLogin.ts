import  express, { Router } from 'express'
import session from 'express-session';
import { Request, Response } from 'express';
export const router:Router=express.Router()
import * as dotenv from 'dotenv' 
import  {passport} from '../passportSocialMedia'
import db from '../Connection'
import  cors from 'cors'
import { constants } from 'buffer';
dotenv.config()

 router.post('/google_login_save',(req:Request,res:Response,next)=>{
    const { socialMediaId, name, email, accessToken }:any = req.body
    db.execute(
      'INSERT INTO users (socialMediaId, name, email, accessToken, isSocialFromMedia) VALUES (?, ?, ?, ?, ?)',
      [socialMediaId, name, email , accessToken, true]
    ).then(
        (result)=>{
            return res.status(201).send({status:'User created successfully',email:email,name:name});
        }
    ).catch(
        (err)=>{
        if(err.code=="ER_DUP_ENTRY"){
            return res.status(201).send({status:'User created successfully',email:email,name:name});
        }
        next(err)
        }
 )
})

 router.get('/error',(req,res,next)=>{
   next({status:"error "})
 })


