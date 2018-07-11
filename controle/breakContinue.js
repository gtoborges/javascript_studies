const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x==5) {
        break
    }
    console.log(`[${x}] = ${nums[x]}`)
}

console.log('\n')

for (let x in nums) {
    if (x==5) {
        continue // o comando continue passa direto para a próxima iteração.
    }
    console.log(`[${x}] = ${nums[x]}`)
}