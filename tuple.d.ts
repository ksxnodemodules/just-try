declare class TryCatchTuple<Error, Value> extends Array {
  protected static readonly ERROR = 0
  protected static readonly VALUE = 1
  readonly length: 2
  readonly error: Error
  readonly value: Value
  readonly [TryCatchTuple.ERROR]: Error
  readonly [TryCatchTuple.VALUE]: Value
  constructor (error: Error, value: Value)
}

export = TryCatchTuple
