export class PortalUser {
    id: number;
    FirstName?: string;
    LastName?: string;
    Phone?: string;
    Sex?: SexType;
    Email?: string;
    Birthday?: Date;
    Faculty?: string;
    UserType?: UserType;
    StudentStatus?: StudentStatus;
    Course?: string;
    Group?: string;
    Department?: string;
}
export enum SexType {
    Male = 1, Female = 0
}

export enum UserType {
    Student,
    Lecturer
}
export enum StudentStatus {
    active,
    banned,
    disabled
}

