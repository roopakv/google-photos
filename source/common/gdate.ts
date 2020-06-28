import { Moment, isMoment } from "moment"

class GDate {
  constructor(public year?: number, public month?: number, public day?: number) { }

  static fromDate(date: Date) {
    if (!(date instanceof Date)) {
      throw Error('Not a valid date object');
    }
    return new GDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }

  static fromMoment(moment: Moment) {
    moment
    if (!isMoment(moment)) {
      throw Error('Not a valid moment');
    }
    return new GDate(moment.year(), moment.month() + 1, moment.date());
  }

  static newDate(date?: GDate | Date | Moment | { year: number, month: number, day: number }) {
    if (date instanceof GDate) {
      return date;
    }
    if (date instanceof Date) {
      return GDate.fromDate(date);
    }
    if (isMoment(date)) {
      return GDate.fromMoment(date);
    }
    if (date.year && date.month && date.day) {
      return new GDate(date.year, date.month, date.day);
    }
    return new GDate();
  }

  toJSON() {
    return {
      year: this.year,
      month: this.month,
      day: this.day
    };
  }
}

export = GDate
