import Tuple from './tuple'

declare function main<Act, Error = Act, Success = Act> (
  act: () => Act,
  onerror?: (x: any) => Error,
  onsuccess?: (x: Act) => Success
): Error | Success

declare namespace main {
  function tuple<Value> (act: () => Value): Tuple<any, null> | Tuple<null, Value>
}

export = main
