import aboutImg from '../images/about.png';
const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          Acerca <span>de</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Arduino profesional - Desarrollo Web</h3>
          <p></p>
          <p>
            La imagen a la derecha es de una cortadora de canaletas plasticas
            completamente desarrollada en Arduino. Si tomas el curso gratuito
            podrias ofrecer este tipo de servicios de desarrollo profesionales.
            Aprenderas sobre puertos, interrupciones o polling, timers, es decir
            muchos conceptos a fondo que no vienen en otros cursos. Si le sumas
            que tambien soy desarrollardor Web comprenderas que no estoy
            precisamente en tareas sencillas de desarrollo en el dia a dia. Si
            deseas asesoria para tus proyectos estudiantes o preofesionales no
            dudes en contactarnos.
          </p>
          <a
            href="https://www.youtube.com/watch?v=0pFOdfs2c9I&t=44s"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Continuar
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
