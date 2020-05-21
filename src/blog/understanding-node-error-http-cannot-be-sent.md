---
title: Understanding Node Error [ERR_HTTP_HEADERS_SENT]
image: https://ucarecdn.com/e0a5b7b8-33ad-4304-9c1c-0253f97bf48c/
description: This post describes why  the Node Error [ERR_HTTP_HEADERS_SENT] cannot set headers after they are sent.
tags: nodejs api
---

Chances are as a NodeJS developer you've encountered this runtime error:
**[ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client**

You must have written the perfect code and expect a flawless code excution (i wish :laughing:), but here is this runtime error shattering your expectations and definitely keeping you from moving on to other concerns of your project. Now you begin to ask yourself why you even choose this career path or even why you picked up node in the first place.

**SPOILER ALERT**: I have run into this runtime error couple times while building restful API's and this is an effort to document what i learnt about this error, shorten your debugging time, help you understand why this error is thrown and finally how best handle it.

## Uncovering the mystry
Error [ERR_HTTP_HEADERS_SENT] is an interesting error that is fired up when a server tries to send more than one response to a client. What this means is that for a given client request the server previously sent a response (either a success responsei with the resource requested or error response for a bad request) back to the client and now is **unexpectedly** trying to send another response :(

## [Case Study] talk is cheap
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/test', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty',
    });
  }

  res.status(200).json({
    status: 'succes',
    data: req.body,
  })
});
app.listen(4000, () => {
  console.log('Server live');
});
```
![post_request.png](https://ucarecdn.com/1aa8cb2b-2e61-469b-ad36-3b0953d5a348/)

This case study is based on a simple POST request to a `/test` route using the express framework. 

By design the server should send back a 400(Bad request) JSON response to the client if a request does not have a body(req.body) added to the request to ther server from the client (handled with the javascript if statement) and lastly if the request comes with a body a 200(OK) JSON respresention of the request body is sent back to the client as response . The expectation is that the request handler should do what we've programmed it to do (return response to the client). The request handler(the anononymous function that takes the **req** & **res** arguements) is simply a javascript function and this means that the javascript engine(v8 in nodes case) keeps executing the code beyond the **if** statement when there is no explicit instruction for it to exit the function. 

Looking at the code logic you'd aggree that the request handler function has no explicit command for exiting the function in a situation a reqest body is not found and the error response is sent back to the client, therefore after the if statement condition has being resolved the server tries to send another response to the client :( and this is where the error kicks in.

The request handler function already sent a response to the client using the res.json() method which automatically sets the response header(every response to the client should contain headers) for the response(in this case the`Content-Type` to `application/json`). Node picks up this atrocity and our server crashes because express under the hood is attempting to set the response header for this second response, hence the error message:

> Cannot set headers after they are sent to the client

![headers-error.png](https://ucarecdn.com/79954b2e-1a7d-4f68-a720-205d3a030694/)

## Fixing the error

The simple fix for this error is to add javascript `return` statement to the response being sent from the if conditional to ensure that the request handler function exits(terminate) excuting code with the function once a response has being sent to the client.

The description for the **`return`** statement on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) states
> When a return statement is used in a function body, the execution of the function is stopped. If specified, a given value is returned to the function caller.

With this in mind, our request handler function should be modified to include a return statement like so:
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/test', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty',
    });
  }

  res.status(200).json({
    status: 'succes',
    data: req.body,
  })
});
app.listen(4000, () => {
  console.log('Server live');
});
```
When a client makes a server request to this endpoint with or without a request body to the server request, the server sends the correct response and stop the function execution as necessary.
![post_req.png](https://ucarecdn.com/6f506581-4f7d-4918-8c3e-5a352f65b53e/)

You'd be tempted to ask why the last server response has no return statement sending it to the client?, well in this case there is really no need to return it since there is no code further down the function to be excuted so it means the the request handler stops excuting since it has comee to the end of the road. 


> The point is that Javascript return statement exits the request handler function (to prevent further code execution) and sends **a** response object back to the client.

Hopefully, you now have a better understanding of why this error message is fired and how to resolve it :smile:, and i hope by documenting this error and it's fix I shorten your debugging time and helped you understand why this error is fired.

I have a [GitHub repository](https://github.com/OPARA-PROSPER/node-server-error) for the failing code and passing code, you can clone and play with the code by trying out some other use case (hopefully can send a PR for your use case).

Thanks for reading
upload imagesIMAGES?
PREVIEW

SAVE CHANGES