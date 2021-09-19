export type Profile = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  imageUrl?: string,
  companyName: string,
  companyCatchPhrase: string,
}

export type Address = {
  street: string,
  city: string,
  state: string,
  zipCode: string,
}