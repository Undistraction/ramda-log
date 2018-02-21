# ramda-log

[![NPM Version](https://img.shields.io/npm/v/ramda-log.svg)](https://www.npmjs.com/package/ramda-log)
[![codecov](https://img.shields.io/codecov/c/github/Undistraction/ramda-log.svg)](https://codecov.io/gh/Undistraction/ramda-log)
[![Build Status](https://img.shields.io/travis/Undistraction/ramda-log.svg)](https://travis-ci.org/Undistraction/ramda-log)
[![DUB](https://img.shields.io/dub/l/vibe-d.svg)](./LICENSE.md)
[![Node Security](https://nodesecurity.io/orgs/undistraction/projects/b891f9f0-6374-424c-948f-dc4a2b3fb46a/badge)](https://nodesecurity.io/orgs/undistraction/projects/b891f9f0-6374-424c-948f-dc4a2b3fb46a)

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
