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
  const allNumbers = generateLottoNumbers();
  const mainNumbers = allNumbers.slice(0, 6).sort((a, b) => a - b);
  const bonusNumber = allNumbers[6];
  
  const ballElements = document.querySelectorAll('.ball');
  
  // 일반 번호 6개 표시
  mainNumbers.forEach((number, index) => {
    updateBall(ballElements[index], number);
  });
  
  // 보너스 번호 표시
  updateBall(ballElements[6], bonusNumber);
});

function updateBall(ball, number) {
  ball.textContent = number;
  
  // 이전 색상 클래스 제거 (bonus 클래스는 유지)
  const isBonus = ball.classList.contains('bonus');
  ball.className = isBonus ? 'ball active bonus' : 'ball active';
  
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
}

function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 7) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}