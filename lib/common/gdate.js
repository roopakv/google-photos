'use strict';

class GDate {
  constructor(year, month, date) {
    Object.assign(this, {year, month, date});
  }

  static fromDate(date) {
    if (!(date instanceof Date)) {
      throw Error('Not a valid date object');
    }
    return new GDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }

  static fromMoment(moment) {
    if (!moment || !moment.isValid || !moment.isValid()) {
      throw Error('not a valid moment');
    }
    return new GDate(moment.year(), moment.month() + 1, moment.date());
  }

  toJSON() {
    return {
      year: this.year,
      month: this.month,
      date: this.date
    };
  }
}

module.exports = GDate;
