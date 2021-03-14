const fs = require("fs");
const globby = require("globby");
const terser = require('terser');

exports.optimize = async (path) => {
    const files = [];
    const glob = `${path}/**/*.{js,mjs}`;
    const paths = await globby(glob);

    // Record initial filesize.
    paths.forEach(async function (file) {
        const terserResult = await terser.minify(fs.readFileSync(file, 'utf8'));

        if (terserResult.error) {
            console.log(`Minifying ${file} error.`, terserResult.error);
        }
        else {
            fs.writeFileSync(file, terserResult.code);
            console.log(`Minifying ${file} (${getSize(file)}) success.`);
        }
    });

    function getSize(file) {
        const stats = fs.statSync(path);
        return stats.size;
    }
};