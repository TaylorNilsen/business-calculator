// Business evaluation calculator //

// Business value = yearly profit * industry multiple; //
// yearlyProfit = monthlyProfit * 12;
// monthlyProfit = monthlyRevenue - expenses;
// revenue = customers * monthlyPrice;

console.log("Business Valuation Calculator\n");

const yearlyProfit = 100000;
const multiple = 12;
const valuation = yearlyProfit * multiple;

const startingPoint = {
  month:0,
  customers: 3,
  monthlyPrice: 10,
  revenue: 3 * 10,
}

const customerGrowthRate = 2;
const priceGrowthRate = 1.1;
const months = 12;

// history log of monthly accounting
let accountingLog = [startingPoint];

//builds the history log month by month.
for (let index = 1; index < months ; index++){
  //get previous month
  const previousMonth = accountingLog[index - 1];
  // create a new month
  // apply compound growth rate
  let newMonth = {
    month: previousMonth.month + 1,
    customers: previousMonth.customers * customerGrowthRate,
    monthlyPrice: previousMonth.monthlyPrice * priceGrowthRate,
  };

  // calculate the revenue and add it to the newMonth object
  newMonth.revenue = newMonth.customers * newMonth.monthlyPrice;

  // save month to accounting log
  accountingLog.push(newMonth);
  
}

// add up the revenue from each month to show yearlyRevenue by looping through
// accounting log and adding up monthly revenue.
let yearlyRevenue = 0;

for (let index = 0; index < accountingLog.length; index++) {
  const month = accountingLog[index];
  yearlyRevenue += month.revenue;

}


console.log("\n\n",JSON.stringify(
  {
    accountingLog,
    yearlyRevenue
  }, 0,2 ));