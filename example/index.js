const swiftcodes = require("../");

(async () => {
  const countries = await swiftcodes.getCountries();
  const countryCode = countries.find(
    (el) => el.country == "Nigeria"
  ).countryCode;
  const banks = swiftcodes.getBanks(countryCode);
  const accessBank = banks.find(
    (el) => el.bank == "ACCESS BANK PLC"
  )?.swift_code;
  console.log("accessBank swiftcode", accessBank);
})();
