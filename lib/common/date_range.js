'use strict';

const GDate = require('./gdate');

class DateRange {
  constructor(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  toJSON() {
    let startJson = {};
    let endJson = {};

    if (this.startDate.year && this.startDate.month && this.startDate.day) {
      startJson = {
        year: this.startDate.year,
        month: this.startDate.month,
        day: this.startDate.day,
      };
    } else {
      startJson = GDate.newDate(this.startDate).toJSON();
    }

    if (this.endDate.year && this.endDate.month && this.endDate.day) {
      endJson = {
        year: this.endDate.year,
        month: this.endDate.month,
        day: this.endDate.day,
      };
    } else {
      endJson = GDate.newDate(this.endDate).toJSON();
    }

    return {
      startDate: startJson,
      endDate: endJson,
    };
  }
}

module.exports = DateRange;
