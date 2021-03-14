const fs = require("fs");
const globby = require("globby");
const imagemin = require('imagemin-overwrite');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const gifsicle = require("imagemin-gifsicle");
const optipng = require("imagemin-optipng");
const svgo = require("imagemin-svgo");

exports.optimize = async (path) => {
    const files = [];
    const glob = `${path}/**/*.{gif,jpg,jpeg,png,svg}`;
    const paths = await globby(glob);

    // Record initial filesize.
    paths.forEach(function (path) {
        const stats = fs.statSync(path);

        files[path] = {
            pre: stats.size
        };
    });

    // Optimize files.
    const optimizedFiles = await imagemin([glob], {
        plugins: [
            imageminJpegRecompress({ quality: "low" }),
            gifsicle(),
            optipng(),
            svgo()
        ]
    });

    // Record size change.
    optimizedFiles.forEach(function (file) {
        const path = file.sourcePath;
        const stats = fs.statSync(path);

        files[path].post = stats.size;
        files[path].diff = ((files[path].pre - files[path].post) / files[path].pre) * 100;
    });

    console.log(files);
};