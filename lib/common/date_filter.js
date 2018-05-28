'use strict';

const GDate = require('./gdate');
const DateRange = require('./date_range');

class DateFilter {
  constructor() {
    this.dates = [];
    this.ranges = [];
  }

  addDate(date) {
    this.dates.push(GDate.newDate(date));
  }

  addRange(startDate, endDate) {
    this.ranges.push(new DateRange(startDate, endDate));
  }

  toJSON() {
    const obj = {};
    obj.dates = this.dates.map((d) => d.toJSON());
    obj.ranges = this.ranges.map((r) => r.toJSON());
    return obj;
  }
}

module.exports = DateFilter;
