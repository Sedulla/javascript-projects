let copyText = document.querySelector('.copy-text');

copyText.querySelector('button').addEventListener('click', async () => {
  let input = copyText.querySelector('input');
  let inputText = copyText.querySelector('input').value;

  input.select();

  if (!navigator.clipboard) {
    return;
  }
  try {
    await navigator.clipboard.writeText(inputText);
    copyText.classList.add('active');
  } catch (err) {
    console.error('Failed to copy!', err);
  }

  setTimeout(function () {
    window.getSelection().removeAllRanges();
    copyText.classList.remove('active');
  }, 2500);
});
T;
