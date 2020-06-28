import GDate from "./gdate"
import DateRange from "./date_range"

class DateFilter {
  public dates: ReturnType<typeof GDate.newDate>[] = []
  public ranges: DateRange[] = []

  addDate(date) {
    this.dates.push(GDate.newDate(date));
  }

  addRange(startDate, endDate) {
    this.ranges.push(new DateRange(startDate, endDate));
  }

  toJSON() {
    return {
      dates: this.dates.map(date => date.toJSON()),
      ranges: this.ranges.map(range => range.toJSON())
    }
  }
}

export = DateFilter
