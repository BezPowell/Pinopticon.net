const images = require("./modules/images.js");
const scripts = require("./modules/scripts.js");

const build_dir = "public";
images.optimize(build_dir);
scripts.optimize(build_dir);