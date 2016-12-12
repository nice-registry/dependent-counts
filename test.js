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
