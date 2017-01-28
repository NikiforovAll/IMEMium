export class Course {
    id: number;
    Name: string;
    StartDate?: Date;
    EndDate?: Date;
    Lecturer?: string;
    CourseStatus?: String

    public getData(): any[] {
        return [
            String(this.id),
            this.Name,
            this.StartDate.toDateString(),
            this.EndDate.toDateString(),
            this.CourseStatus,//CourseStatus[this.CourseStatus],
            this.Lecturer
        ];
    }
}

// export enum CourseStatus {
//     active,
//     finished,
//     stopped
// }