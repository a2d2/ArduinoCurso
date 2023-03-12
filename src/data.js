import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home -' },
  { id: 2, href: '#about', text: 'acerca de -' },
  { id: 3, href: '#services', text: 'servicios -' },
  { id: 4, href: '#tours', text: 'Arduino - Desarrollo Web' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'Desarrollo de proyectos',
    // href: 'https://www.youtube.com/watch?v=pP6-ZjmYxcg',
    text: '',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'Asesoria',
    // href: 'https://www.youtube.com/watch?v=w8Vmei8IlS8',
    text: '',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'Curso',
    // href: 'https://www.youtube.com/channel/UCvqZA14Rf4l1_wyYmnqaSaA',
    text: '',
  },
];

export const toures = [
  {
    id: 1,
    image: tour1,
    date: 'Curso',
    title: 'Arduino a fondo',
    text: 'Suscribete a mi canal de YouTube y busca cada video iniciando con la leyenda "Curso Arduino ..." iniciando en la Leccion 1, 1-1,... Si quieres el curso basico de electronica para Arduino busca cada video iniciando con la leyenda "Curso Basico Electronica Virdeo #" comnezando por el video 1.',
    location: 'https://www.youtube.com/@etruacir09',
    texto: 'Acceso',
    duration: '50 videos',
    price: 'gratis',
  },
  {
    id: 2,
    image: tour2,
    date: 'Asesoria',
    title: 'Estudiantes o profesionales',
    text: 'Asesorias para el desarrollo de tus proyectos en Arduino desde basico estudiantil hasta avanzado y profesional. Revisa la muestra de proyectos que van desde desarrollos estudiantiles de colegio hasta maquinas cortadoras de canaletas, autoclave, telefono de texto con doificacion baudot, etc. Todo lo aprendido en mis 2 cursos aplicado al mundo real.',
    location: 'https://youtu.be/0cnwM4pR3TY',
    texto: 'Muestra',
    duration: 'virtual o presencial',
    price: 'contacta',
  },
  {
    id: 3,
    image: tour3,
    date: 'Desarollo web',
    title: 'Desarrollo Web',
    text: 'Desarrollador web. React, HTML, CSS.',
    location: 'React',
    texto: 'Desarrollo Web',
    duration: 'contacta',
    price: 'Variable',
  },
];
