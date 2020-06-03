const shell = require("shelljs")
const { readdirSync } = require("fs")

const transfer = package => {
  shell.exec(`npm owner add npm lotusdevshack ${package}`) // Adds me as a maintainer on NPM alongside you.
  shell.exec(`npm access grant read-write Typefaces ${package}`) // Typefaces is the org name I assume.
}

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

getDirectories("./scripts").forEach(dir => {
  transfer(`typeface-${dir}`)
})
