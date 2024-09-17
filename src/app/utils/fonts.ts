import { Anton, Poppins, Open_Sans } from 'next/font/google';

export const anton = Anton({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});
