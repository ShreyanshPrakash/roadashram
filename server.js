const express = require('express');
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 4200;

app.use(
    express.static(
        path.join(
            __dirname,
            "build"
        )
    )
);


app.get("**", (req,res) => {

    fs.createReadStream(
        path.join(
            __dirname,
            "build",
            "index.html",
        )
    ).pipe(res);

});





app.listen(
    PORT,
    () => console.log(`Listening at port : ${PORT}`)
)