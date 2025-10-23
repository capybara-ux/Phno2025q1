const sheeps = [0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const stado = sheeps.length
const result = sheeps.filter(capybara => capybara === 0).length
console.log('количество маленьких капибар ' + result + ' штук')
console.log('количество больших капибар ' + (stado-result) + ' штук')