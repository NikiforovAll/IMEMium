export class PortalUser {
  id: number;
  FirstName?:string;
  LastName?:string;
  Phone?: string;
  Sex?: SexType;
  Birthday?: Date;
}
export enum SexType{
    Male = 1, Female = 0
}
