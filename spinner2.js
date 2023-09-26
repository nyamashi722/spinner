let input = "|/-\\|/-\\|";
let delay = 100;

for(let char of input) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `)
  }, delay)
  delay += 200
}