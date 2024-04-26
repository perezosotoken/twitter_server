const express = require('express');
const app = express();

// Define the route /cb
 app.get('/cb', (req, res) => {
    const oauthToken = req.query.oauth_token;
    const oauthSecret = req.query.oauth_secret;

    console.log("Received OAuth token:", oauthToken);
    console.log("Received OAuth secret:", oauthSecret);
    if (typeof oauthToken === 'undefined' || typeof oauthSecret === 'undefined') {
        res.status(400).send('Invalid OAuth token or secret');
        return;
    }
    res.send('You are authenticated!');  // Simple response for demonstration
});

     // Set the server to listen on port 31338
app.listen(31338, () => {
    console.log('Server running on port 31338');
});

