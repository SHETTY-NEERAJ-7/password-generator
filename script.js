const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordField = document.getElementById('password');
const copyBtn = document.getElementById('copy');
const strengthDiv = document.getElementById('strength');
const toggleTheme = document.getElementById('toggleTheme');

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+=-{}[]<>?/";

lengthInput.addEventListener('input', () => {
  lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener('click', () => {
  const length = +lengthInput.value;
  let chars = "";
  if (uppercase.checked) chars += upperChars;
  if (lowercase.checked) chars += lowerChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;
  if (chars === "") {
    passwordField.value = "Select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    password += chars[randIndex];
  }

  passwordField.value = password;
  checkStrength(password);
});

copyBtn.addEventListener('click', () => {
  passwordField.select();
  document.execCommand('copy');
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1000);
});

function checkStrength(pwd) {
  let strength = "Weak";
  if (pwd.length >= 16 && /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /\d/.test(pwd) && /[!@#$%^&*()]/.test(pwd)) {
    strength = "Strong";
  } else if (pwd.length >= 12) {
    strength = "Medium";
  }
  strengthDiv.textContent = `Strength: ${strength}`;
}

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
