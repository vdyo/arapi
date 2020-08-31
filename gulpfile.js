const { watch, src, dest } = require('gulp');
const concat = require('gulp-concat');

var dest_path = 'dist';


//this player is mainly for the hosted version of flowplayer
var scripts = [
        'node_modules/mux-embed/dist/mux.js',
        'node_modules/easejs/build/ease-full.min.js',
        'node_modules/es6/ES6.js',        
        'src/app.js',         
    ];

function build(cb) {
    return src(scripts) //files separated by comma
        .pipe(concat('player-api.js'))   //resultant file name
        .pipe(dest('./dist/')); //Destination where file to be exported

    cb();
}

exports.build = build;
exports.default = function() {
    watch('src/app.js', build);
};