export class Course {
    id: number;
    Name: string;
    StartDate?: Date;
    EndDate?: Date;
    Lecturer?: string;
    CourseStatus?: CourseStatus

    public getData(): string[] {
        return [
            String(this.id),
            this.Name,
            this.StartDate.toDateString(),
            this.EndDate.toDateString(),
            CourseStatus[this.CourseStatus],
            this.Lecturer
        ];
    }
}

export enum CourseStatus {
    active,
    finished,
    stopped
}