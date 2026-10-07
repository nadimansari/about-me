document.getElementById('year').textContent = new Date().getFullYear();

const copyBtn = document.getElementById('copy-email');
copyBtn.addEventListener('click', async () => {
  const email = 'nadimbxr2003@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = 'Copied';
  } catch (e) {
    copyBtn.textContent = email;
  }
  setTimeout(() => (copyBtn.textContent = 'Copy email'), 2000);
});
