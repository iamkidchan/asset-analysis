function calculateResults() {
    // Get form values
    const totalAsset = parseFloat(document.getElementById('total-asset').value) || 0;
    const incomeTaxPaid = parseFloat(document.getElementById('income-tax-paid').value) || 0;
    const familyExpenses = parseFloat(document.getElementById('family-expenses').value) || 0;
    const years = parseInt(document.getElementById('years').value) || 0;
    const educationFund = parseFloat(document.getElementById('education-fund').value) || 0;
    const numChildren = parseInt(document.getElementById('num-children').value) || 0;
    const parentFund = parseFloat(document.getElementById('parent-fund').value) || 0;
    const parentYears = parseInt(document.getElementById('parent-years').value) || 0;
    const funeralExpenses = parseFloat(document.getElementById('funeral-expenses').value) || 0;
    const totalSumInsured = parseFloat(document.getElementById('total-sum-insured').value) || 0;

    // Calculations
    const estateAdminFee = totalAsset * 0.05;
    const incomeTaxExpenses = totalAsset * 0.24;
    const livingMaintenance = familyExpenses * 12 * years;
    const educationExpenses = educationFund * numChildren;
    const parentMonthlyDistribution = parentFund * 12 * parentYears;
    const totalLiabilities = estateAdminFee + incomeTaxExpenses + incomeTaxPaid + livingMaintenance + educationExpenses + parentMonthlyDistribution + funeralExpenses;
    const familyFund = totalSumInsured - totalLiabilities;

    // Output results
    document.getElementById('output').innerHTML = `
        <p>Estate Administration Fee: RM ${estateAdminFee.toFixed(2)}</p>
        <p>Income Tax & Expenses: RM ${incomeTaxExpenses.toFixed(2)}</p>
        <p>Living Maintenance: RM ${livingMaintenance.toFixed(2)}</p>
        <p>Education Expenses: RM ${educationExpenses.toFixed(2)}</p>
        <p>Parents Monthly Distribution: RM ${parentMonthlyDistribution.toFixed(2)}</p>
        <p>Total Liabilities: RM ${totalLiabilities.toFixed(2)}</p>
        <p>Total Family Fund: RM ${familyFund.toFixed(2)}</p>
    `;
}
