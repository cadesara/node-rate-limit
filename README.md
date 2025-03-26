# Rate Limited API Server

A simple Node.js server that provides a rate-limited API endpoint with a 100ms response time.

## Features

- API endpoint that responds after 100ms
- Rate limiting of 50 requests per second
- Built with Express.js

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will start on http://localhost:3000

## API Endpoint

- **URL**: `/api`
- **Method**: GET
- **Rate Limit**: 50 requests per second
- **Response Time**: 100ms
- **Response Format**: JSON

Example response:
```json
{
    "message": "Response after 100ms",
    "timestamp": "2024-03-21T12:34:56.789Z"
}
``` 