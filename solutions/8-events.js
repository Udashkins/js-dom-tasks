export default () => {
  // BEGIN
  let alertСounter = 1;
  const button = document.getElementById('alert-generator');
  const alertsContainer = document.querySelector('.alerts');

  button.addEventListener('click', () => {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-primary');
    alertDiv.textContent = `Alert ${alertСounter}`;

  
    alertsContainer.prepend(alertDiv);

    alertСounter++;
  });
  // END
};