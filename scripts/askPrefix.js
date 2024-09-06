import { readFileSync, writeFileSync } from "fs"
import { resolve } from "path"
import { createInterface } from "readline"

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  "Please, enter the prefix used in your Angular project (default: app): ",
  (prefix) => {
    const eslintConfigPath = resolve(__dirname, "../index.js")
    const eslintConfig = readFileSync(eslintConfigPath, "utf-8")

    const updatedConfig = eslintConfig
      .replace(/prefix: 'app'/, `prefix: '${prefix}'`)
      .replace(/prefix: 'app'/, `prefix: '${prefix}'`)

    writeFileSync(eslintConfigPath, updatedConfig)

    console.log(`Prefix updated to: ${prefix}`)
    console.log(`Don't forget to run 'npm run lint' to apply the changes`)
    rl.close()
  }
)
