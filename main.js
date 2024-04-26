const express = require('express');
const app = express();

// Define the route /cb
 app.get('/cb', (req, res) => {
    const oauthToken = req.query.oauth_token;
    const oauthVerifier = req.query.oauth_verifier;

    console.log("Received OAuth token:", oauthToken);
    console.log("Received OAuth verifier:", oauthVerifier);

    // Verify the token matches the initial token you received
    // Proceed to exchange the verifier and token for an access token
    res.send('You are authenticated!');  // Simple response for demonstration
});

     // Set the server to listen on port 31338
app.listen(31338, () => {
    console.log('Server running on port 31338');
});

