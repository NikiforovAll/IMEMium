export class Student {
  id: number;
  FirstName?:string;
  LastName:string;
  Faculty?:string;
  UserType?:UserType;
  StudentStatus?:StudentStatus;
  Course?:string;
  Group?:string;
  Department?:string;
}

export enum UserType{
    Student,
    Lecturer
}
export enum StudentStatus{
    active,
    banned, 
    disabled
}
