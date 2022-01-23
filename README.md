# SwiftCodes
Install SwiftCodes from NPM
```
npm i swiftcodes-to-bank-detail
```
Swift Codes or BIC Codes for all the Banks in the world.

All the info is grabbed from public websites.

## Get Bank Detail by Swift Code
```
import swiftcodes from 'swiftcodes-to-bank-detail';
var bankInfo = swiftcodes.getBankDetail(yourSwiftCode);
```