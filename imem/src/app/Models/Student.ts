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

  public getData():string[]{
      return [ 
          String(this.id),
          this.FirstName,
          this.LastName,
          this.Faculty,
          this.Course,
          StudentStatus[this.StudentStatus],
        //   String(this.StudentStatus),
          this.Group,
          this.Department];
  }
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
