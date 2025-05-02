/*window.onload = function() {
    // Get the values from localStorage

const investAmount = localStorage.getItem('investAmount');


 // Display the values in the page
   document.getElementById('AccountBln').textContent = investAmount;

document.getElementById('totalInvestBln').textContent = investAmount;

} */


window.onload = function() {
  const newBalance = localStorage.getItem('balance');
  /*const investAmount = localStorage.getItem('investAmount');*/
  const pack1History = localStorage.getItem('pack1History');
  const pack2History = localStorage.getItem('pack2History');
  const pack3History = localStorage.getItem('pack3History');
  const pack4History = localStorage.getItem('pack4History');
  const pack5History = localStorage.getItem('pack5History');
  document.getElementById('result').textContent = pack1History;
  document.getElementById('pack2').textContent = pack2History;
  document.getElementById('pack3').textContent = pack3History;
  document.getElementById('pack4').textContent = pack4History;
  document.getElementById('pack5').textContent = pack5History;
  let totalPack = 0;
  if (pack1History) totalPack += pack1History.split(',').length * 2000;
  if (pack2History) totalPack += pack2History.split(',').length * 4000;
  if (pack3History) totalPack += pack3History.split(',').length * 8000;
  if (pack4History) totalPack += pack4History.split(',').length * 10000;
  if (pack5History) totalPack += pack5History.split(',').length * 100000;

function calculateInterest() {
  const pack1History = localStorage.getItem('pack1History');
  const pack2History = localStorage.getItem('pack2History');
  const pack3History = localStorage.getItem('pack3History');
  const pack4History = localStorage.getItem('pack4History');
  const pack5History = localStorage.getItem('pack5History');
  const lastCalculationTime = parseInt(localStorage.getItem('lastCalculationTime')) || Date.now();

  const currentTime = Date.now();
  const timeElapsed = (currentTime - lastCalculationTime) / 1000; // in seconds

  let interest = 0;
  if (pack1History) {
    const pack1Values = pack1History.split(',').map(Number);
    interest += pack1Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }
  if (pack2History) {
    const pack2Values = pack2History.split(',').map(Number);
    interest += pack2Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }
  if (pack3History) {
    const pack3Values = pack3History.split(',').map(Number);
    interest += pack3Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }
  if (pack4History) {
    const pack4Values = pack4History.split(',').map(Number);
    interest += pack4Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }
  if (pack5History) {
    const pack5Values = pack5History.split(',').map(Number);
    interest += pack5Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }

  const currentInterest = parseFloat(localStorage.getItem('interestBln')) || 0;
  localStorage.setItem('interestBln', currentInterest + interest);
  localStorage.setItem('lastCalculationTime', currentTime);
  document.getElementById('interestBln').textContent = parseFloat(localStorage.getItem('interestBln')).toFixed(2);
}

setInterval(calculateInterest, 3000);
}