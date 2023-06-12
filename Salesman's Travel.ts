/*
  "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

  To ease his travel he wants to group the list by zipcode.

  Task
    The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

    zipcode:street and town,street and town,.../house number,house number,...

    The street numbers must be in the same order as the streets where they belong.

    If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

  Examples
    r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

    travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

    travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

    travel(r, "NY 5643") --> "NY 5643:/"
*/

type TAddressesObject = { [key: string]: string };

export const travel = (r: string, zipcode: string): string => {
  if(!zipcode) return ':/';

  const splittedAddresses: Array<string> = r.split(',');
  const addressesWithRequiredZipcode: Array<string> = splittedAddresses.filter((element) => {
    return element.includes(zipcode);
  });
  
  if(!addressesWithRequiredZipcode) return `${zipcode}:/`

  const addressObject: TAddressesObject = {};
  addressesWithRequiredZipcode.map((element) => {
    const splittedEelement: Array<string> = element.split(' ');
    addressObject[splittedEelement[0]] = splittedEelement.slice(1, -2).join(' ')    
  });

  const result: string = `${zipcode}:${Object.values(addressObject).join(',')}/${Object.keys(addressObject).join(',')}`;
  
  return result
}