var https = require('https');


exports.handler = (event) => {
    const virtual_button_url = process.env.virtual_button_code;

    https.get(virtual_button_url, (res => {
        const response = {
            statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  }, 
            body: JSON.stringify('Virtual Button Pressed!'),
        };
        return response;
    }));
    
};
