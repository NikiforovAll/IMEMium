export class PortalUser {
  id: number;
  FirstName?:string;
  LastName?:string;
  Phone?: string;
  Sex?: SexType;
  Birthday?: string;
}
export enum SexType{
    Male = 1, Female = 0
}
