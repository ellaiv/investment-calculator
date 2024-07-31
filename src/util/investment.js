export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let year = 1; year <= duration; year++) {
    const interest = investmentValue * (expectedReturn / 100);
    investmentValue += interest + annualInvestment;

    annualData.push({
      year,
      valueEndOfYear: investmentValue,
      interest,
      annualInvestment,
    });
  }

  return annualData;
}
