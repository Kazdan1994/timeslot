import { isValid } from "./utils";

export default class Timeslot {
  private readonly start: Date;
  private readonly end: Date;

  constructor(start: Date, end: Date) {
    if (!isValid(start)) {
      throw new Error("Invalid start date");
    }
    if (!isValid(end)) {
      throw new Error("Invalid end date");
    }

    this.start = start;
    this.end = end;
  }

  isEqual(slot: Timeslot) {
    return this.start === slot.start && this.end === slot.end;
  }

  isBefore(slot: Timeslot) {
    return this.start < slot.start && this.end < slot.end;
  }

  isAfter(slot: Timeslot) {
    return this.start > slot.start && this.end > slot.end;
  }
}
