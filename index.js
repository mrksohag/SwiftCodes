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
    if(swiftcodeLength >= 8){
        var coutryCode = swiftcode.substring(4, 6).toUpperCase();
        var swift8 = swiftcode.substring(0, 8);
    
        try {
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
                        
                        selectedBy8 = JSON.parse(JSON.stringify(info));
                        selectedBy8.country = json.country;
                        selectedBy8.countryCode = json.country_code;
                    }
                    if(swiftcodeLength == 11 && info.swift_code.indexOf(swiftcode) !== -1){
                        var data = JSON.parse(JSON.stringify(info));
                        data.country = json.country;
                        data.countryCode = json.country_code;
                        return data;
                    }
                }
            }
            return selectedBy8 ? selectedBy8 : false;
        } catch (error) {
            return false;
        }
    } else {
        return false;
    }
}
exports.default = {
    getBankDetail: getBankDetail
};