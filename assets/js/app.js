const app = {
  timezone: undefined,
  init() {
    console.log('app init');

    document
      .querySelector('.open-modal')
      .addEventListener('click', app.openModal);

    document
      .getElementById('update-timezone')
      .addEventListener('click', app.updateCurrentTimezone);

    setInterval(app.updateCurrentTime, 1000);
    app.updateCurrentTimezone();
    app.updateCurrentDate();
    app.getRandomQuote();
    app.setBackgroundImage();
  },
  openModal() {
    MicroModal.show('timezone-modal');
  },
  updateCurrentTimezone() {
    app.timezone = document.getElementById('timezone-select').value;
    let formattedTimezone = app.timezone.replace('_', ' ');
    formattedTimezone = formattedTimezone.split('/');
    document.getElementById('timezone').textContent = formattedTimezone[1];
    app.updateCurrentTime();
  },
  updateCurrentTime() {
    const now = dayjs();
    const nowLocal = now.tz(app.timezone).format('HH:mm');

    document.getElementById('current-time').textContent = nowLocal;
    app.setBackgroundImage();
  },
  updateCurrentDate() {
    const now = dayjs.utc();
    const nowLocal = now.tz(app.timezone).format('dddd,D MMMM, YYYY');
    document.getElementById('current-date').textContent = nowLocal;
  },
  async getRandomQuote() {
    try {
      const result = await fetch('https://api.quotable.io/quotes/random');

      if (!result.ok) {
        throw new Error('Unable to fetch quote');
      }

      const response = await result.json();

      document.getElementById('quote').textContent = response[0].content;
      document.getElementById(
        'quote-author'
      ).textContent = `—${response[0].author}`;
    } catch (error) {
      console.log(error);
    }
  },
  setBackgroundImage() {
    const currentTime = document.getElementById('current-time').textContent;
    const parsedCurrentTime = parseInt(currentTime);

    if (parsedCurrentTime > 7 && parsedCurrentTime < 20) {
      const mainElement = document.querySelector('.main');
      mainElement.classList.remove('bg--night');
      mainElement.classList.add('bg--day');
    } else {
      const mainElement = document.querySelector('.main');
      mainElement.classList.remove('bg--day');
      mainElement.classList.add('bg--night');
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init());
