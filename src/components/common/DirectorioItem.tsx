import type { Store } from 'src/data/stores';

const CATEGORY_ICONS: any = {
  Restaurantes: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3'></path>
    </svg>
  ),
  Ropa: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428'></path>
    </svg>
  ),
  Electronicos: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 5h6v14h-6z' />
      <path d='M12 9h10v7h-10z' />
      <path d='M14 19h6' />
      <path d='M17 16v3' />
      <path d='M6 13v.01' />
      <path d='M6 16v.01' />
    </svg>
  ),
  Salud: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
    </svg>
  ),
  Entretenimiento: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
      <path d='M7 3m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z'></path>
      <path d='M12 3v2'></path>
      <path d='M10 15v.01'></path>
      <path d='M10 18v.01'></path>
      <path d='M14 18v.01'></path>
      <path d='M14 15v.01'></path>
    </svg>
  ),
  Otros: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
      <path d='M8 12l0 .01'></path>
      <path d='M12 12l0 .01'></path>
      <path d='M16 12l0 .01'></path>
    </svg>
  ),
};

interface Props extends Store {
  color: string;
}

const DirectorioItem = ({
  imagePath,
  title,
  categoria,
  color,
  horario,
}: Props) => {
  const imageSrc = `/src/images/stores/${imagePath}`;

  return (
    <div className='group bg-white outline outline-1 outline-gray-200 aspect-square flex flex-col items-center relative justify-center p-8'>
      <img
        className='grayscale transition group-hover:grayscale-0'
        src={imageSrc}
        alt={`${title}-logo`}
        width={200}
        height={150}
      />
      <div className='absolute inset-0 flex flex-col justify-between items-start'>
        <span
          className={`py-2 px-2 mt-4 ml-auto text-sm font-semibold rounded-s-md text-white ${color}`}
        >
          {CATEGORY_ICONS[categoria]}
        </span>
        <p
          className={`py-2 px-4 mb-4 mr-4 text-sm text-white opacity-0 transition-all font-semibold rounded-e-md group-hover:opacity-100 ${color}`}
          dangerouslySetInnerHTML={{ __html: horario }}
        ></p>
      </div>
    </div>
  );
};

export default DirectorioItem;
