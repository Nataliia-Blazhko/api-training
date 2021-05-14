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
  const events = await eventServices.getEvents();
  console.log(events);
  console.log(events._embedded.events);
  eventsContainer.innerHTML = eventsTemplate(events._embedded.events);
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
