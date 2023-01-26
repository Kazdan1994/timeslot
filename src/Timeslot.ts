import { isValid } from "./utils";

export class Timeslot {
  private start: Date;
  private end: Date;

  constructor(start: Date, end: Date) {
    if (!isValid(start)) {
      throw new Error("Invalid start date");
    }
    if (!isValid(end)) {
      throw new Error("Invalid end date");
    }
    if (end < start) {
      throw new Error("Start must be before end");
    }

    this.start = start;
    this.end = end;
  }

  isEqual(slot: Timeslot): boolean {
    return this.start === slot.start && this.end === slot.end;
  }

  isBefore(slot: Timeslot): boolean {
    return this.start < slot.start && this.end < slot.end;
  }

  isAfter(slot: Timeslot): boolean {
    return this.start > slot.start && this.end > slot.end;
  }

  isOverlaps(slot: Timeslot): boolean {
    return this.start <= slot.end && this.end >= slot.start;
  }

  getStart(): Date {
    return this.start;
  }

  getEnd(): Date {
    return this.end;
  }

  setStart(start: Date): void {
    this.start = start;
  }

  setEnd(end: Date): void {
    this.end = end;
  }
}
