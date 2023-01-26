import { describe, it, expect } from "vitest";
import { Timeslot } from "../src";

describe("timeslot class test", () => {
  it("should be true", () => {
    expect(true).toBeTruthy();
  });
  const slot1 = new Timeslot(
    new Date("2022-06-08T08:00:00"),
    new Date("2022-06-08T10:00:00")
  );

  const slot2 = new Timeslot(
    new Date("2022-06-08T09:00:00"),
    new Date("2022-06-08T11:00:00")
  );

  describe("is timeslot equals", () => {
    it("should have slot1 equal to slot1", () => {
      expect(slot1.isEqual(slot1)).toBeTruthy();
    });

    it("should have slot1 and slot2 equal", () => {
      expect(slot1.isEqual(slot2)).toBeFalsy();
    });
  });

  describe("is timeslot before the other timeslot", () => {
    it("should have slot1 before slot2", () => {
      expect(slot1.isBefore(slot2)).toBeTruthy();
    });

    it("should have slot2 not before slot1", () => {
      expect(slot2.isBefore(slot1)).toBeFalsy();
    });
  });

  describe("is timeslot after the other timeslot", () => {
    it("should have slot2 after slot1", () => {
      expect(slot2.isAfter(slot1)).toBeTruthy();
    });

    it("should have slot1 not after slot2", () => {
      expect(slot1.isAfter(slot2)).toBeFalsy();
    });
  });

  describe("is timeslot valid", () => {
    it("should throw Error if start is not a valid date", () => {
      expect(() => {
        new Timeslot(new Date("invalid"), new Date("2022-06-08T10:00:00"));
      }).toThrowError("Invalid start date");
    });

    it("should throw Error if end is not a valid date", () => {
      expect(() => {
        new Timeslot(new Date("2022-06-08T10:00:00"), new Date("invalid"));
      }).toThrowError("Invalid end date");
    });

    it("should throw Error if start is before end", () => {
      expect(() => {
        new Timeslot(
          new Date("2022-06-08T11:00:00"),
          new Date("2022-06-08T10:00:00")
        );
      }).toThrowError("Start must be before end");
    });
  });

  describe("is timeslots overlaps", () => {
    it("should return true if timeslots overlaps", () => {
      const slot = new Timeslot(
        new Date("2022-06-08T10:00:00"),
        new Date("2022-06-08T12:00:00")
      );
      const slotOverlap = new Timeslot(
        new Date("2022-06-08T11:00:00"),
        new Date("2022-06-08T12:00:00")
      );

      expect(slot.isOverlaps(slotOverlap)).toBeTruthy();
    });

    it("should return false if timeslots not overlaps", () => {
      const slot = new Timeslot(
        new Date("2022-06-08T10:00:00"),
        new Date("2022-06-08T12:00:00")
      );
      const slotOverlap = new Timeslot(
        new Date("2022-06-08T13:00:00"),
        new Date("2022-06-08T14:00:00")
      );

      expect(slot.isOverlaps(slotOverlap)).toBeFalsy();
    });
  });

  describe("getters", () => {
    const start = new Date("2022-06-08T10:00:00");
    const end = new Date("2022-06-08T12:00:00");

    const slot = new Timeslot(start, end);

    it("should return start property value", () => {
      expect(slot.getStart()).toBe(start);
    });
    it("should return end property value", () => {
      expect(slot.getEnd()).toBe(end);
    });
  });

  describe("setters", () => {
    const start = new Date("2022-06-08T10:00:00");
    const newStart = new Date("2022-06-09T10:00:00");
    const end = new Date("2022-06-08T12:00:00");
    const newEnd = new Date("2022-06-09T12:00:00");

    const slot = new Timeslot(start, end);

    it("should return start property value", () => {
      slot.setStart(newStart);
      expect(slot.getStart()).toBe(newStart);
    });
    it("should return end property value", () => {
      slot.setEnd(newEnd);
      expect(slot.getEnd()).toBe(newEnd);
    });
  });
});
