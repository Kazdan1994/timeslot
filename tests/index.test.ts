import Timeslot from '../src/Timeslot'

describe('timeslot class test', () => {
  it('should be true', () => {
    expect(true).toBeTruthy()
  })

  const slot1 = new Timeslot(
    new Date('2022-06-08T08:00:00'),
    new Date('2022-06-08T10:00:00')
  )

  const slot2 = new Timeslot(
    new Date('2022-06-08T09:00:00'),
    new Date('2022-06-08T11:00:00')
  )

  describe('is timeslot equals', () => {
    it('should have slot1 equal to slot1', () => {
      expect(slot1.isEqual(slot1)).toBeTruthy()
    })

    it('should have slot1 and slot2 equal', () => {
      expect(slot1.isEqual(slot2)).toBeFalsy()
    })
  })

  describe('is timeslot before the other timeslot', () => {
    it('should have slot1 before slot2', () => {
      expect(slot1.isBefore(slot2)).toBeTruthy()
    })

    it('should have slot2 not before slot1', () => {
      expect(slot2.isBefore(slot1)).toBeFalsy()
    })
  })

  describe('is timeslot after the other timeslot', () => {
    it('should have slot2 after slot1', () => {
      expect(slot2.isAfter(slot1)).toBeTruthy()
    })

    it('should have slot1 not after slot2', () => {
      expect(slot1.isAfter(slot2)).toBeFalsy()
    })
  })
})
