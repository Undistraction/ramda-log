# ramda-log

Simple logging funtions for Ramda.

## Install

```
yarn add ramda-log
```

or

```
npm install ramda-log
```

## API

### logToConsole

`logToConsole` will output whatever value it receives to `console.log`:

```
const f = compose(
  logToConsole('D'),
  add(1),
  logToConsole('C'),
  add(1),
  logToConsole('B'),
  add(1),
  logToConsole('A'),
)

const result = f(0) // Logs: 'A:0', 'B:1', 'C:2', 'D:3'
result // 4
```

### log

`log` allows you to customise where the value is sent - for example you could route it to a logger. It is used by `logToConsole`:

```
const logToConsole = log(console.log)
```
