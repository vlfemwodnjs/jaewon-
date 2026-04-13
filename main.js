// 테마 전환 기능
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 초기 테마 설정 확인
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  let theme = 'light';
  if (body.classList.contains('dark')) {
    theme = 'dark';
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
  localStorage.setItem('theme', theme);
});

document.getElementById('draw-btn').addEventListener('click', function() {
  const lottoNumbers = generateLottoNumbers();
  const ballElements = document.querySelectorAll('.ball');
  
  lottoNumbers.forEach((number, index) => {
    const ball = ballElements[index];
    ball.textContent = number;
    
    // 이전 색상 클래스 제거
    ball.className = 'ball active';
    
    // 번호 범위에 따른 색상 추가
    if (number <= 10) {
      ball.classList.add('color-1');
    } else if (number <= 20) {
      ball.classList.add('color-11');
    } else if (number <= 30) {
      ball.classList.add('color-21');
    } else if (number <= 40) {
      ball.classList.add('color-31');
    } else {
      ball.classList.add('color-41');
    }
  });
});

function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.sort((a, b) => a - b);
}