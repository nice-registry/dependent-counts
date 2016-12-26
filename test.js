const test = require('tape')
const counts = require('.')

test('counts', function (t) {
  t.ok(Array.isArray(counts), 'is an array')
  t.ok(counts.length > 30 * 1000, 'has hella entries')
  t.comment('every count')
  t.ok(counts.every(count => count.name.length > 0), 'has a name')
  t.ok(counts.every(count => count.directDependents > -1), 'has a directDependents count')
  t.ok(counts.every(count => count.directDevDependents > -1), 'has a directDevDependents count')
  t.ok(counts.every(count => count.totalDirectDependents > -1), 'has a totalDirectDependents count')

  t.comment('express')
  const express = counts.find(count => count.name === 'express')
  t.ok(express.directDependents > 10000, 'has a directDependents count')
  t.ok(express.directDevDependents > 1000, 'has a directDevDependents count')
  t.equal(express.totalDirectDependents, (express.directDependents + express.directDevDependents), 'has a totalDirectDependents sum count')
  t.end()
})
