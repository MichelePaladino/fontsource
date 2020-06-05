// Chuck this file into the root of your local Typefaces repo.

const shell = require("shelljs")
const { readdirSync } = require("fs")

const transfer = package => {
  shell.exec(`npm owner add lotusdevshack ${package}`) // Adds me as a maintainer on NPM alongside you.
  shell.exec(`npm access grant read-write Typefaces ${package}`) // Typefaces is the org name I assume.
}

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

getDirectories("./packages").forEach(dir => {
  transfer(`typeface-${dir}`)
})
