export class InvalidInsertItem extends Error {
  constructor() {
    super("Item já existe!");
  }
}

export class InvalidUnknownItem extends Error {
  constructor() {
    super("Item não existe!");
  }
}
