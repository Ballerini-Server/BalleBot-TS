export default class BreakFlow extends Error {
  constructor(message) {
    super(message);
    this.name = "BreakFlow";
  }
}
