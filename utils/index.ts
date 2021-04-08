export const splitValue = (value : number | string, padSize : number = 2) => `${value}`.padStart(padSize, '0').split('');
export const playAudio = (path : string) => new Audio(path).play();
export const sendNotification = (title : string, options : object) => new Notification(title, options);
export const getRandomNumber = (min : number, max : number) => Math.floor(Math.random() * (max - min) + min);
export const scrollToElement = (elem : string) => {
  const element : HTMLElement | null = document.querySelector(elem);
  const mq = window.matchMedia('max-width: 639px');

  if(element && mq.matches) element.scrollIntoView({ block: 'start', behavior: 'smooth' });
}