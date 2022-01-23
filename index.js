'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var getBankDetail = function(swiftcode){
    if(!swiftcode || typeof swiftcode !== 'string'){
        return false;
    }
    swiftcode = swiftcode.toUpperCase();
    var swiftcodeLength = swiftcode.length;
    var coutryCode = swiftcode.substring(4, 6).toUpperCase();
    var swift8 = swiftcode.substring(0, 8);

    var json = require('./AllCountries/'+coutryCode+'.json');
    var selectedBy8;
    if(json && json.list && json.list.length > 0){
        var sLen = json.list.length;
        for(var i = 0; i < sLen; i++){
            var info = json.list[i];
            if(
                (!selectedBy8 && info.swift_code.indexOf(swift8) !== -1) ||
                (
                    info.branch && info.swift_code.indexOf(swift8) !== -1 && (
                        info.branch.indexOf('LOCAL') !== -1 ||
                        info.branch.indexOf('MAIN') !== -1 ||
                        info.branch.indexOf('CORPORATE') !== -1 ||
                        info.branch.indexOf('PRINCIPAL') !== -1 ||
                        info.branch.indexOf('HEAD') !== -1
                    )
                )
            ){
                selectedBy8 = info;
            }
            if(swiftcodeLength == 11 && info.swift_code.indexOf(swiftcode) !== -1){
                return info;
            }
        }
    }
    return selectedBy8 ? selectedBy8 : false;
}
exports.default = {
    getBankDetail: getBankDetail
};