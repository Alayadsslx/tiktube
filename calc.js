// Helpers (one time job, you can use some library for this):

const objectFromEntries = entries => [...entries]
  .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {})

const formToObject = form => objectFromEntries(new FormData(form).entries())

// Separate logic:

const rates = {
  LBP: 0.000121581,
  SYP: 0.00037037,
  USD: 1,
  EUR: 0.824827,
}

const convert = (amount, from, to) => rates[from] / rates[to] * amount

// DOM manipulation:

const output = document.getElementById('output')

document
  .getElementById('converter')
  .addEventListener('submit', event => {
    event.preventDefault()
 
    const { amount, from, to } = formToObject(event.target)
    const result = convert(amount, from, to)
    
    output.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`
  })








