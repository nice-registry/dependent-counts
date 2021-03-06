# dependent-counts

Get counts of how many packages depend on the given package. Works offline.

If you need the actual package names (and not just counts), see
[dependent-packages](http://ghub.io/dependent-packages)

## Installation

```sh
npm install dependent-counts --save
```

## Usage

```js
const test = require('tape')
const counts = require('.')

test('counts', function (t) {
  t.ok(Array.isArray(counts), 'is an array')
  t.ok(counts.length > 30 * 1000, 'has hella entries')
  t.comment('every count')
  t.ok(counts.every(count => count.name.length > 0), 'has a name')
  t.ok(counts.every(count => count.dependents > -1), 'has a dependents count')
  t.ok(counts.every(count => count.devDependents > -1), 'has a dependents count')

  t.comment('express')
  t.ok(counts.find(count => count.name === 'express').dependents > 10000, 'has a dependents count')
  t.ok(counts.find(count => count.name === 'express').devDependents > 1000, 'has a devDependents count')
  t.end()
})
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [dependent-packages](https://github.com/zeke/dependent-packages): Offline collection of the dependents and devDependents of every package in the npm registry.
- [require-dir](https://github.com/aseemk/requireDir): Helper to require() directories.
- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
