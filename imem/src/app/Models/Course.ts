export class Course {
    id: number;
    Name: string;
    Description?: string;
    StartDate?: Date;
    EndDate?: Date;
    Lecturer?: string;
    CourseStatus?: String
}

// export enum CourseStatus {
//     active,
//     finished,
//     stopped
// }
export const CourseStatusList:any[] = [{name:'Активний', value: 'InProgress'}, {name:'Закінчений', value: 'Finished'}];