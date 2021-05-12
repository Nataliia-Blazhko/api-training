import activityServices from './activityServices';
import activityTemplate from './templates/activity.hbs';
import eventsServices from './eventServices';
import eventServices from './eventServices';
// import eventsTemplate from './templates/events';

async function renderEvents() {
  const event = await eventServices.getEvents();
  console.log(event);
}

const button = document.querySelector('#get_random_activity');
const container = document.querySelector('#random_activity');

async function renderActivity() {
  button.disabled = true;
  const activity = await activityServices.getRandomActivity();
  container.innerHTML = activityTemplate(activity);
  button.disabled = false;
}

button.addEventListener('click', renderActivity);
