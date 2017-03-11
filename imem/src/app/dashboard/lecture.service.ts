import { Injectable } from '@angular/core';
import { Lecture } from '../Models/Lecture';

@Injectable()
export class LectureService {

  constructor() { }

  /**
   * getLectures
   */
  public getLectures(num: number) {
     let lectures: Lecture[] = [];
        for (let i = 0; i < num; i++) {
            lectures.push(
              {
                id: i,
                Name: 'Name' + i,
                RelatedCourse: {id: 1, Name: 'Related'}
              });
        }
        return lectures;
  }

}
