var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production:{
        db: 'mongodb://multivisionUser:multivision@ds053168.mongolab.com:53168/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}