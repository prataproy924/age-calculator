document.getElementById('calculateButton').addEventListener('click', calculateAge);

function calculateAge() {
  const birthdateInput = document.getElementById('birthdate').value;
  const resultDiv = document.getElementById('result');

  if (!birthdateInput) {
    resultDiv.textContent = 'Please enter your birthdate.';
    return;
  }

  const birthdate = new Date(birthdateInput);
  const today = new Date();

  const ageInMilliseconds = today - birthdate;
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  const ageInDays = Math.floor(ageInMilliseconds / millisecondsPerDay);

  const years = Math.floor(ageInDays / 365.25);
  const remainingDays = ageInDays % 365.25;
  const months = Math.floor(remainingDays / 30.44);
  const days = Math.floor(remainingDays % 30.44);

  resultDiv.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
}