$(document).ready(onReady);

function onReady() {
  console.log('Jquery loaded!');
  $( '#bonusButton' ).on( 'click', clickButton );
  $( '#employeeBonus' ).on( 'click', '#hideBonus', hideBonus );
}

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


function bonusPercentage( employee ) {
  let bonus = 0;
  if ( employee.reviewRating === 3 ){
    bonus += .04;
  } else if ( employee.reviewRating === 4){
    bonus += .06;
  } else if ( employee.reviewRating === 5){
    bonus += .10;
  }
  if ( employee.annualSalary > 65000 ) {
    bonus -= .01;
  }
  if (employee.employeeNumber.length === 4) {
    bonus += .05;
  }
  if (bonus < 0) {
    bonus = 0;
  }
  if (bonus > .13) {
    bonus = .13;
  }
  return bonus;
}

//  for (let i = 0; i < employees.length; i++) {
//     const employeeObject = employees[i];
//     employeeSalaryCalc(employeeObject);

function employeeIncome(employee){
  let bonusPercent = bonusPercentage(employee);
  let totalBonus = (employee.annualSalary * bonusPercent);
  let roundedBonus = (Math.round(totalBonus));
  // assumed that total compensation would be based on adding the rounded bonus.
  let compensation = (Number(employee.annualSalary) + roundedBonus);
  let employeeBonus = {
    name : employee.name,
    bonusPercentage : bonusPercent,
    totalCompensation : compensation,
    totalBonus : roundedBonus
  } 
  return employeeBonus;
}

function clickButton() {
  console.log('click works!');
  employeeSalaryCalc(employees);
}

function hideBonus() {
  console.log('clicked hideBonus button!');
  $( '#employeeBonus' ).empty();
}

function employeeSalaryCalc( array ){
  for (let i = 0; i < array.length; i++) {
    const employee = array[i];
    let employeeSalary = employeeIncome(employee);
    console.log(employeeSalary);
    $( '#employeeBonus' ).append(
    `<li>
        <h3>Employee: ` + employeeSalary.name + `</h3>
        <p>Bonus Percentage: ` + (employeeSalary.bonusPercentage * 100) + `%</p>
        <p>Total compensation: $` + employeeSalary.totalCompensation + `</p>
        <p>Total Bonus: $` + employeeSalary.totalBonus + `</p>
    </li>`
    );
  }
  $( '#employeeBonus' ).append(`<button id="hideBonus">Hide Bonuses</button>`);
}


console.log( employees );



// employeeSalaryCalc(employees);