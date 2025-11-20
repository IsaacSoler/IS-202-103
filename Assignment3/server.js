//initializes the necessary modules
const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;


// function to count vowels and consonants
function countVowelsConsonants(text) {
    const vowels = (text.match(/[aeiou]/gi) || []).length;
    const consonants = (text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
    return { vowels, consonants };
}

// create server
const server = http.createServer(function(req, res) {

    if (req.url === "/" && req.method === "GET") {
        //doing this the hard way instead of using express because last time you said you wanted us to hardcode things/not do it the easy way
        fs.readFile(path.join(__dirname, "index.html"), function(err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    else if (req.url === "/index.js" && req.method === "GET") {
        fs.readFile(path.join(__dirname, "index.js"), function(err, data) {
            res.writeHead(200, { "Content-Type": "application/javascript" });
            res.end(data);
        });
    }

    // my endpoint 
    else if (req.url === "/analyze" && req.method === "POST") {
        let body = "";

        req.on("data", function(chunk) {
            body += chunk.toString();
        });

        req.on("end", function() {
            const json = JSON.parse(body);
            const result = countVowelsConsonants(json.sentence || "");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(result));
        });
    }
});

//listen on port 3000 to test the code on my laptop
server.listen(PORT, function() {
    console.log("Server running at http://localhost:" + PORT);
});
