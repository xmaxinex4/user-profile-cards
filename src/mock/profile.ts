import { address, phone, internet, name, image, company } from "faker";
import { v4 as uuidv4 } from "uuid";

import { Profile } from "../modules/profile/types";

export function getMockProfile(): Profile {
  const mockStateAbbr = address.stateAbbr();

  return {
    id: uuidv4(),
    firstName: name.firstName(),
    lastName: name.lastName(),
    email: internet.email(),
    address: {
      street: address.streetAddress(true),
      city: address.city(),
      state: mockStateAbbr,
      zipCode: address.zipCodeByState(mockStateAbbr),
    },
    phone: phone.phoneNumber(),
    website: internet.url(),
    imageUrl: image.avatar(),
    companyName: company.companyName(),
    companyCatchPhrase: company.catchPhrase(),
  }
}

export function getMockProfiles(amount: number): Profile[] {
  const profiles: Profile[] = [];

  for (let n = 0; n < amount; n++) {
    profiles.push(getMockProfile());
  }

  return profiles;
}
