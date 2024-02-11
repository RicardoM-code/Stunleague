
const cardElements = document.querySelectorAll('.card');


function updateCountdownForCard(cardElement) {
  
  const campDataElement = cardElement.querySelector('.campData');
  const campHourElement = cardElement.querySelector('.campHour');
  
  if (!campDataElement || !campHourElement) {
    console.error('Elemento campData ou campHour não encontrado no card:', cardElement);
    return;
  }


  const eventData = campDataElement.textContent;
  const eventHour = campHourElement.textContent;
  const eventDateTime = new Date(`${eventData} ${eventHour}`);

  
  const countdownElement = cardElement.querySelector('.countdown');
  if (!countdownElement) {
    console.error('Elemento countdown não encontrado no card:', cardElement);
    return;
  }

  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDateTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    countdownElement.textContent = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;

    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = 'O evento começou!';
    }
  }


  const countdownInterval = setInterval(updateCountdown, 1000);


  updateCountdown();
}


cardElements.forEach(updateCountdownForCard);
