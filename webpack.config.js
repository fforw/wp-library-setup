var path = require("path");
var webpack = require("webpack");

module.exports =
    {

    entry: {
        main: "./index.js"
    },

    output: {
        path: path.join(__dirname),
        filename: "MyLib.js",

        library: "MyLib",
        libraryTarget: "var"
    }
};
