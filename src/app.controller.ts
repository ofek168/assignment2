import { Controller, Get, Body, Param, Post, Query, Req} from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController 
{
  /*
    @Get('/user/:id') //http:localhost:3000/user/[#]
    getParamRoute(@Param('id') id: string): string 
    { // user inputs id type string
      console.log('id', id); // console log id
      console.log('typeof id', typeof id); // console log type of id
      return 'getParamRoute()';
    }

    @Get('/user')
    getQueryRoute(@Query('id') id: number): string 
    { //http:localhost:3000/user?id=[#]
      console.log('id', id);
      console.log('typeof id', typeof id);
      return 'getQueryRoute()';
    }
  */
    @Post('user') //http://localhost:3000/user

    test(@Body() body, @Req() req): string {
      let FirstName = req.body.empFirst;
      let LastName = req.body.empLast; // req.body makes variable retrievable
      let Pronouns = req.body.empPronouns;
      let Email = req.body.empEmail;
      let Birth =req.body.empBirth;
      let Password = req.body.empPassword;
      //console.log(body);
      console.log("First name:",FirstName); //view FirstName attribute within object
      console.log("Last name:", LastName); //view LastName attribute within object
      console.log("Pronouns: ", Pronouns);
      console.log("Email: ", Email);
      console.log("Birth-date: ", Birth);
      console.log("Create Password: ", Password);
      
      return 'Form submitted';
    }

   // postRoute(@Body() AppService) 
   // {
      //console.log('AppService', AppService); prints entire post body

      /*
      const newUser = Object.assign({}, AppService); //access to AppService
      
        //newUser.id = AppService.id;
        newUser.firstname = AppService.firstname; // get firstname from AppService class
        newUser.lastname = AppService.lastname;
        newUser.pronouns = AppService.pronouns;
        newUser.birthdate = AppService.birthdate;
        newUser.email = AppService.email;
        newUser.password = AppService.password;

      //console.log("id: ",newUser.id); 
      console.log("First name: ", newUser.firstname); // print to console
      console.log("Last name: ", newUser.lastname); 
      console.log("Pronouns: ", newUser.pronouns); 
      console.log("Birhtdate: ", newUser.birthdate);  
      console.log("Password: ", newUser.password);
      console.log("Email: ", newUser.email);
      
      return 'postRoute()';
      */
    }


