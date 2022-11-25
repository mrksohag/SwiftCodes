# SwiftCodes

Install SwiftCodes from NPM

```
npm install --save swiftcodes-toolkit

or

yarn add swiftcodes-toolkit
```

Swift Codes or BIC Codes for all the Banks in the world.

All the info is grabbed from public websites.

## Get Bank Detail by Swift Code

```
import swiftcodes from 'swiftcodes-toolkit';
var bankInfo = swiftcodes.getBankDetail(yourSwiftCode);
```

## Get Banks

```
import swiftcodes from 'swiftcodes-toolkit';
const banks = swiftcodes.getBanks(countryCode);
```

## Get Countries

```
import swiftcodes from 'swiftcodes-toolkit';
const countries = swiftcodes.getCountries()
```
