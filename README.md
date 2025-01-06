# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  This can lead to unexpected behavior on the client-side, as the client might not correctly interpret the response data.

## Bug Description
The provided `bug.js` file shows a simple HTTP server that responds with 'Hello, world!' but fails to set the `Content-Type` header.  This could cause issues such as incorrect character encoding interpretation or the client not understanding the data type.