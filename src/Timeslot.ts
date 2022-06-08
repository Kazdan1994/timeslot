export default class Timeslot {
  private readonly start: Date
  private readonly end: Date

  constructor(start: Date, end: Date) {
    this.start = start
    this.end = end
  }

  isEqual(slot: Timeslot) {
    return this.start === slot.start && this.end === slot.end
  }

  isBefore(slot: Timeslot) {
    return this.start < slot.start && this.end < slot.end
  }

  isAfter(slot: Timeslot) {
    return this.start > slot.start && this.end > slot.end
  }
}
