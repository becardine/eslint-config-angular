const fs = require("fs")
const path = require("path")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  "Please, enter the prefix used in your Angular project (default: app): ",
  (prefix) => {
    const eslintConfigPath = path.resolve(__dirname, "../index.js")
    const eslintConfig = fs.readFileSync(eslintConfigPath, "utf-8")

    const updatedConfig = eslintConfig
      .replace(/prefix: 'app'/, `prefix: '${prefix}'`)
      .replace(/prefix: 'app'/, `prefix: '${prefix}'`)

    fs.writeFileSync(eslintConfigPath, updatedConfig)

    console.log(`Prefix updated to: ${prefix}`)
    console.log(`Don't forget to run 'npm run lint' to apply the changes`)
    rl.close()
  }
)
