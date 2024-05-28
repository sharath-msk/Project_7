function calculateDogAge() {
    const humanAgeInput = document.getElementById('human-age').value;
    const myAge = parseInt(humanAgeInput);
  
    let earlyYears = 2;
    earlyYears *= 10.5;
  
    let laterYears = myAge - 2;
    laterYears *= 4;
  
    const myAgeInDogYears = earlyYears + laterYears;
  
    const myName = 'Your Name'.toLowerCase();
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`;
    resultElement.classList.remove('hidden');
  }
  