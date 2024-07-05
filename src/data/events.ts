export interface Event {
  title: string;
  imagePath: string;
  alt: string;
}

export const events: Event[] = [
  {
    title: 'Cruz Roja',
    imagePath: 'event-1.jpg',
    alt: 'Evento Cruz Roja',
  },
  {
    title: 'Blipy',
    imagePath: 'event-2.jpg',
    alt: 'Evento Blipy',
  },
  {
    title: 'Trolls',
    imagePath: 'event-3.jpg',
    alt: 'Evento Trolls',
  },
];
