const path = require("path");

module.exports = {
  entry: "./src/app.js", // this tells webpack where to look for our initial starting file.  You can rename the folder and/or the file as long as the change is reflected here
  output: {
    // this is triggered when you run 'npx webpack'
    filename: "app.js", // change the name of the file webpack will output
    path: path.resolve(__dirname, "dist", "scripts"), // change the folder into which webpack will output the above file
  },
  devServer: {
    port: 8080,
    publicPath: "/dist/scripts/", // this is the target folder for the server
    hot: true,
  },
  mode: "development", // will change to "production" when packing the final version
};
