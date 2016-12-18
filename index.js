
var ref = require("ref");
var FFI = require('ffi');






exports.scrypt = function(data) {

                var scrypt = new FFI.Library('scrypt', {
                    'scrypt_1024_1_1_256': [
                    'int', ['string', 'string']
                ]
            });

            var returnedHash = new Buffer(32);
                              
            scrypt.scrypt_1024_1_1_256(data,returnedHash);

                return returnedHash;
            
        }
   
exports.X11 = function (data) {

    var x11 = new FFI.Library('x11', {
        'xcoin_hash': [
            'void', ['string', 'string']
        ]
    });

    var returnedHash = new Buffer(32);


    x11.xcoin_hash(data, returnedHash);

    return returnedHash;

}




exports.lyra2re2 = function (data) {

    var lyra2re = new FFI.Library('lyra2re2', {
        'lyra2re2_hash': [
            'void', ['string', 'string']
        ]
    });


    var returnedHash = new Buffer(32);

    lyra2re.lyra2re2_hash(data, returnedHash);

    return returnedHash;

}


exports.neoscrypt = function (data) {

    var neoscrypt = new FFI.Library('neoscrypt', {
        'neoscrypt': [
            'void', ['string', 'string', 'int']
        ]
    });


    var returnedHash = new Buffer(32);

    neoscrypt.neoscrypt(data, returnedHash, 0);

    return returnedHash;

}



//myr-groestl
exports.myrgroestl = function(data) {

var groestlhash = new FFI.Library('groestl', {
    'groestl_hash': [
        'void', ['string', 'string']
    ]
});
            var returnedHash = new Buffer(32);
                              
            groestlhash.groestl_hash(data,returnedHash);

                return returnedHash;
            
        }



