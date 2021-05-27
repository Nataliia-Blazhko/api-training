import './index.js';
import activityServices from './activityServices';
import activityTemplate from './templates/activity.hbs';
import eventServices from './eventServices';
import eventsTemplate from './templates/events.hbs';
import './styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const eventsContainer = document.querySelector('#events_container');
async function renderEvents() {
  document.body.classList.remove('loaded_hiding');
  document.body.classList.remove('loaded');
  const events = await eventServices.getEvents();
  console.log(events);
  console.log(events._embedded.events);
  const EventObject = events._embedded.events;
  EventObject.forEach(event => {
    const {
      name,
      dates: {
        start: { localDate },
      },
      _embedded: { venues },
      images,
    } = event;

    const locations = venues[0];

    const { name: location, city } = locations;
    const place = location || city;
    console.log(place);

    const image = images.find(
      image => image.height === 225 && image.width === 305,
    ).url;
    eventsContainer.insertAdjacentHTML(
      'beforeend',
      eventsTemplate({
        name,
        localDate,
        image,
        place,
      }),
    );
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  });
}
renderEvents();

const button = document.querySelector('#get_random_activity');
const container = document.querySelector('#random_activity');

async function renderActivity() {
  button.disabled = true;
  const activity = await activityServices.getRandomActivity();
  container.innerHTML = activityTemplate(activity);
  button.disabled = false;
}

button.addEventListener('click', renderActivity);
