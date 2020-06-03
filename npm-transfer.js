const shell = require("shelljs")
const { readdirSync } = require("fs")

const transfer = package => {
  shell.exec(`npm access grant read-write Typefaces ${package}`)
}

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

getDirectories("./scripts").forEach(dir => {
  transfer(`typeface-${dir}`)
})
