export declare function getBankDetail(swiftCode: string): Bank;

export declare function getBanks(countryCode: string): Bank[];

export declare function getCountries(): Promise<Country[]>;

export declare interface Country {
  countryCode: string;
  country: string;
}

export declare interface Bank {
  id: number;
  bank: string;
  city: string;
  branch?: string;
  swift_code: string;
}
