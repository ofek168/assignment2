#  Assignment 2 readme template
## ECS 192 S22 EyeVocab Professor R. Blake
## Names: Ofek Marom

### Goals

Use Assignment 1 code and integrate it to the nestjs framework, specifically 
understanding how to modify controller, service and module in nestjs so the client data posted from html form 
gets recieved in the backend and printed to console

### Discussion

Understanding how a controller and service interact with each other in nestjs was a big part 
of this project. I had trouble at first understanding the purpose of a controller, then I realized
it makes it more organized to recieve specific requests from a server and services are essentially extra classes 
that can be used to assist with controllers.

### Instructions

1. go to new terminal
2. run command: npm run start
3. Go to live server and input data and then click submit at bottom of form
4. Go back to terminal and see console printing out the client data from form

#### Known Concerns

Limitations I had in this assignment consisted of understanding how to convert json body data to html format. 
I was not able to come up with a solution to solve this problem, so I used a different solution seen in the controller.ts
file.
