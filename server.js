const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

// Create rate limiter: 50 requests per second
const limiter = rateLimit({
    windowMs: 1000, // 1 second
    max: 50, // 50 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Apply rate limiter to all routes
app.use(limiter);

// API endpoint that responds after 100ms
app.get('/api', async (req, res) => {
    // Simulate processing time of 100ms
    await new Promise(resolve => setTimeout(resolve, 100));
    
    res.json({
        message: 'Response after 100ms',
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 