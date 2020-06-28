import GDate from './gdate';

class DateRange {
  constructor(public startDate: ReturnType<GDate['toJSON']> | GDate | Date, public endDate: ReturnType<GDate['toJSON']> | GDate | Date) { }

  toJSON() {
    return {
      startDate: GDate.newDate(this.startDate).toJSON(),
      endDate: GDate.newDate(this.endDate).toJSON()
    };
  }
}

export = DateRange
