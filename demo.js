const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
// Companies functions
// const retailCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// Foreach
// companies.forEach(function(company) {
//   console.log(company);
// });

const retailCompanies = companies.filter(company => company.category === 'Technology');

// console.log(retailCompanies);


// filter multiple years
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

  // console.log(eightiesCompanies);

  // Decade old companies
  const lastedTenYears = companies.filter(company => (company.end - company.start >10));

  // console.log(lastedTenYears);

// Array of company names
// const companyNames = companies.map(function(company){
//   return company.name;
// });

// Long way
// const companyNames = companies.map(function(company){
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// Short way
const companyNames = companies.map(company =>
  `${company.name} [${company.start} - ${company.end}]`);

// console.log(companyNames);

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Filtering
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// The long way - filtering ages 21 or older
// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// short way - filtering ages 21 or older
const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimesTwo = ages.map(age => age * 2);

const ageMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);

// console.log(ageMap);

// Sorting - by start year
// Long way
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1
//   }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

// ascending
const sortAgesAsc = ages.sort((a, b) => a - b);
// Descending
const sortAgesDesc = ages.sort((a, b) => b - a);

// console.log(sortAgesAsc);

// REDUCE
// let ageSum = 0;
// with a for loop
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// Long way
// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// Short way
const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

// Total years companies
// Long way
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// Short way
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);

// Combining
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

  // console.log(combined);
