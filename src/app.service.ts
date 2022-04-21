import { Injectable, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator';

@Injectable()
export class AppService // recieve form data from html form and intialize variables
{
 
     //username: string
    // firstname: string;
    // lastname: string;
     //pronouns: string;
     //email: string;
     //password: string;
    // birthdate: string;
    //@IsNumber()
    //id: number;
}
