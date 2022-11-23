# SwiftCodes
Install SwiftCodes from NPM
```
npm install --save swiftcodes-to-bank-detail

or

yarn add swiftcodes-to-bank-detail
```
Swift Codes or BIC Codes for all the Banks in the world.

All the info is grabbed from public websites.

## Get Bank Detail by Swift Code
```
import swiftcodes from 'swiftcodes-to-bank-detail';
var bankInfo = swiftcodes.getBankDetail(yourSwiftCode);
```

## Get Banks
```
import swiftcodes from 'swiftcodes-to-bank-detail';
const banks = swiftcodes.getBanks(countryCode);
```

## Get Countries
```
import swiftcodes from 'swiftcodes-to-bank-detail';
const countries = swiftcodes.getCountries()
```