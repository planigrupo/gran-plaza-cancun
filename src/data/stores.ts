export interface Store {
  title: string;
  imagePath: string;
  alt: string;
  horario: string;
  categoria:
    | 'Restaurantes'
    | 'Ropa'
    | 'Electronicos'
    | 'Salud'
    | 'Entretenimiento'
    | 'Otros';
}

export const stores: Store[] = [
  {
    title: 'McDonals',
    imagePath: 'logo_McDonalds.png',
    alt: 'Store 1',
    horario: `<strong>L-V: </strong> 9:00am - 9:00pm 
      <br/> 
      <strong>S-D: </strong> 10:00am - 7:30pm`,
    categoria: 'Restaurantes',
  },
  {
    title: 'HEB',
    imagePath: 'logo_HEB.png',
    alt: 'Store 2',
    horario: '10:00am - 8:00pm',
    categoria: 'Electronicos',
  },
  {
    title: 'Coopel',
    imagePath: 'logo_Coppel.png',
    alt: 'Store 2',
    horario: '10:00am - 8:00pm',
    categoria: 'Electronicos',
  },
];
