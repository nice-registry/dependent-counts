const path = require('path')
const requireDir = require('require-dir')
const dependents = requireDir(path.join(__dirname, 'node_modules/dependent-packages/dependents'))
const devDependents = requireDir(path.join(__dirname, 'node_modules/dependent-packages/devDependents'))
var counts = []

Object.keys(dependents).forEach(packageName => {
  counts.push({
    name: packageName,
    directDependents: dependents[packageName].length,
    directDevDependents: 0
  })
  process.stderr.write('.')
})

Object.keys(devDependents).forEach(packageName => {
  var count = counts.find(count => count.name === packageName)

  if (count) {
    count.directDevDependents = devDependents[packageName].length
  } else {
    counts.push({
      name: packageName,
      directDependents: 0,
      directDevDependents: devDependents[packageName].length
    })
  }
  process.stderr.write('*')
})

counts = counts
  .map(c => Object.assign(c, {totalDirectDependents: c.directDependents + c.directDevDependents}))
  .sort((a, b) => (b.totalDirectDependents) - (a.totalDirectDependents))

process.stdout.write(JSON.stringify(counts, null, 2))
