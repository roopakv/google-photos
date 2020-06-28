'use strict';

class GDate {
  constructor(year, month, day) {
    Object.assign(this, {year, month, day});
  }

  static fromDate(date) {
    if (!(date instanceof Date)) {
      throw Error('Not a valid date object');
    }
    return new GDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }

  static fromMoment(moment) {
    if (!moment || !moment.isMoment || !moment.isMoment()) {
      throw Error('not a valid moment');
    }
    return new GDate(moment.year(), moment.month() + 1, moment.date());
  }

  static newDate(d) {
    if (d instanceof GDate) {
      return d;
    }
    if (d instanceof Date) {
      return GDate.fromDate(d);
    }
    if (d && d.isMoment && d.isMoment()) {
      return GDate.fromMoment(d);
    }
    if (d.year && d.month && d.day) {
      return new GDate(d.year, d.month, d.day);
    }
    return new GDate();
  }

  toJSON() {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
    };
  }
}

module.exports = GDate;
