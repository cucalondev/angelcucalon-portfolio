<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">ÁNGEL CUCALÓN</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#inicio">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#perfil">Perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonios">Testimonios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero bg-dark text-white text-center py-5" id="inicio">
      <div class="container">
        <img
          src="../assets/me.png"
          alt="Tu foto"
          class="img-fluid rounded-circle mb-4"
          width="200"
        />
        <h1 class="display-3 font-weight-bold">ÁNGEL CUCALÓN</h1>
        <p class="lead">FULLSTACK DEVELOPER</p>
        <a
          href="/assets/cv.pdf"
          class="btn btn-outline-light btn-lg"
          target="_blank"
          >Descargar CV</a
        >
      </div>
    </header>

    <!-- Perfil Section -->
    <section class="perfil bg-secondary text-white" id="perfil">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6">
  <h2 class="display-4 font-weight-bold mb-4">Sobre Mí</h2>
  <p class="lead">
    Soy un apasionado desarrollador fullstack con un sueño: convertir ideas creativas en poderosas aplicaciones web y móviles. Mi búsqueda constante de la excelencia y la innovación me impulsa a explorar y dominar nuevas tecnologías.
  </p>
  <p class="lead">
    Mi enfoque va más allá del código. Me encanta colaborar en equipos multidisciplinarios, transformar desafíos en oportunidades y crear soluciones que mejoren la vida de las personas.
  </p>
  <p class="lead">
    ¿Tienes una idea emocionante o un proyecto desafiante? ¡Hablemos y hagámoslo realidad!
  </p>
</div>

          <div class="col-lg-6">
            <h2 class="display-4 font-weight-bold mb-4">Habilidades</h2>
            <!-- Sección de habilidades original (HTML y CSS) -->
            <div class="habilidades">
              <!-- Widgets de habilidades -->
              <div class="ui-widget">
                <div class="ui-values">85%</div>
                <div class="ui-labels">JAVA</div>
              </div>
              <div class="ui-widget">
                <div class="ui-values">50%</div>
                <div class="ui-labels">HTML</div>
              </div>
              <div class="ui-widget">
                <div class="ui-values">100%</div>
                <div class="ui-labels">VUE</div>
              </div>
              <div class="ui-widget">
                <div class="ui-values">95%</div>
                <div class="ui-labels">MONGO</div>
              </div>
              <div class="ui-widget">
                <div class="ui-values">100%</div>
                <div class="ui-labels">NODE JS</div>
              </div>
              <div class="ui-widget">
                <div class="ui-values">45%</div>
                <div class="ui-labels">LARAVEL</div>
              </div>
              <!-- Agrega más widgets de habilidades según sea necesario -->
            </div>
            <!-- Fin de la sección de habilidades original -->
          </div>
        </div>
      </div>
    </section>
    <!-- Proyectos Section -->
    <section class="proyectos bg-secondary text-white" id="proyectos">
      <div class="container py-5">
        <h2 class="display-4 font-weight-bold text-center mb-5">
          Mis Proyectos
        </h2>
        <div class="row">
          <!-- Proyectos (iterados desde el array) -->
          <div
            class="col-md-4"
            v-for="(proyecto, index) in proyectos"
            :key="index"
          >
            <div class="proyecto mb-5">
              <h4 class="font-weight-bold">{{ proyecto.nombre }}</h4>
              <p>{{ proyecto.descripcion }}</p>
              <!-- Imagen previa del proyecto y enlace a la URL -->
              <a :href="proyecto.url" target="_blank">
                <img
                  :src="proyecto.imagen"
                  alt="Imagen de {{ proyecto.nombre }}"
                  class="img-fluid mb-3"
                />
              </a>
              <div class="tecnologias mt-3">
                <i
                  v-for="(icon, i) in proyecto.iconos"
                  :key="i"
                  :class="icon"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonios Section -->
    <section class="testimonios bg-dark text-white" id="testimonios">
      <div class="container py-5">
        <h2 class="display-4 font-weight-bold text-center mb-5">Testimonios</h2>
        <div class="row">
          <!-- Testimonio 1 -->
          <div class="col-md-6 offset-md-3">
            <div class="testimonio text-center p-4">
              <i class="fas fa-quote-left fa-2x"></i>
              <p class="lead">
                Fue un verdadero placer trabajar con Ángel Cucalón en nuestro
                proyecto web. Su nivel de profesionalismo, experiencia y
                dedicación realmente sobresalió en todo momento. Desde el
                principio, Ángel Cucalón demostró una profunda comprensión de
                nuestras necesidades y objetivos. Escuchó atentamente nuestras
                ideas y visiones para el sitio web y, lo que es aún más
                impresionante, las llevó a la vida de una manera que superó
                nuestras expectativas.
              </p>
              <p><strong>John Doe</strong></p>
            </div>
          </div>
          <!-- Testimonio 2 -->
          <div class="col-md-6 offset-md-3">
            <div class="testimonio text-center p-4">
              <i class="fas fa-quote-left fa-2x"></i>
              <p class="lead">
                No podríamos estar más satisfechos con el trabajo de Ángel
                Cucal. Su experiencia en desarrollo web se refleja claramente en
                el sitio que creó para nosotros. Es un profesional comprometido
                y eficiente que entregó exactamente lo que necesitábamos.
                ¡Gracias, Ángel Cucalón!
              </p>
              <p><strong>Jane Smith</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto Section -->
    <!-- Redes Sociales Section -->
    <section class="redes-sociales bg-secondary text-white" id="contacto">
      <div class="container py-5">
        <h2 class="display-4 font-weight-bold text-center mb-5">
          Mis Redes Sociales
        </h2>
        <div class="text-center">
          <!-- Enlaces a redes sociales con iconos -->

          <a href="https://www.instagram.com/kukaloon/" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              size="3x"
              class="mx-2"
              style="color: #e4405f"
            ></font-awesome-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%A1ngel-cucal%C3%B3n-guti%C3%A9rrez-b51102230/"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              size="3x"
              class="mx-2"
              style="color: #0a66c2"
            ></font-awesome-icon>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer text-center py-3">
      <p>&copy; 2023 Ángel Cucalón. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import alimentaExpress from "../assets/images-projects/alimenta-express.png";
import rickandmorty from "../assets/images-projects/rick-and-morty.png";
import poker from "../assets/images-projects/poker.png";
export default {
  data() {
    return {
      proyectos: [
        {
          nombre: "Alimenta Express",
          descripcion:
            "Simulación de una tienda de productos a domicilio con carrito UI  ",
          iconos: ["fab fa-html5", "fab fa-css3", "fab fa-js"],
          url: "https://alimentacionexpress.vercel.app/",
          imagen: alimentaExpress,
        },
        {
          nombre: "Rick and Morty Wiki",
          descripcion:
            "Wiki de Rick and Morty mediante el uso de una API donde puedes encontrar los personajes por paginación y filtrar estos mismos",
          iconos: ["fab fa-react", "fab fa-node-js", "fab fa-mongodb"],
          url: "https://rickandmorty-apki.netlify.app/",
          imagen: rickandmorty,
        },
        {
          nombre: "Pokerzone",
          descripcion:
            "Proyecto final de curso realizado con unos compañeros. Puedes jugar al poker mediante monedas virtuales.",
          iconos: ["fab fa-react", "fab fa-node-js", "fab fa-mongodb"],
          url: "https://pokerzone-eb346.web.app/",
          imagen: poker,
        },
        // Agrega más proyectos según sea necesario
      ],
      temaOscuro: false,
      skills: [
        { nombre: "HTML5", porcentaje: 75 },
        { nombre: "CSS3", porcentaje: 70 },
        { nombre: "JavaScript", porcentaje: 80 },
        // Agrega más habilidades según sea necesario
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos personalizados aquí */

/* Navbar */
.navbar {
  background-color: #1a1a1a; /* Color de fondo más oscuro */
}

/* Estilos para el modo oscuro */
.dark-mode {
  background-color: #111;
  color: #fff;
}

/* Hero Section */
.hero {
  background-color: #1a1a1a; /* Color de fondo más oscuro */
  background-image: url("../assets/hero-bg.jpg"); /* Agrega una imagen de fondo */
  background-size: cover;
  background-position: center;
  padding: 150px 0;
}

.hero h1 {
  font-size: 3.5rem;
}

/* Perfil Section */
.perfil {
  background-color: #333;
  padding: 60px 0;
}

.perfil h2 {
  font-size: 2.5rem;
}

.perfil .list-group-item {
  background-color: transparent;
  border: none;
  color: #fff;
}

/* Habilidades Section */
.habilidades {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  ); /* Diseño de cuadrícula adaptable */
  gap: 20px; /* Espacio entre widgets */
}

.ui-widget {
  width: 150px; /* Ancho igual al alto para crear un círculo perfecto */
  height: 150px; /* Ancho igual al alto para crear un círculo perfecto */
  border-radius: 50%; /* Hace que los widgets sean circulares */
  border: 1.2rem solid #2c3e50; /* Cambia el color del borde a uno oscuro */
  box-shadow: inset 0 0 7px grey;
  border-left-color: #2c3e50; /* Cambia el color del borde izquierdo */
  border-top-color: #34495e; /* Cambia el color del borde superior */
  border-right-color: #2c3e50; /* Cambia el color del borde derecho */
  border-bottom-color: #95a5a6; /* Cambia el color del borde inferior */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;
}
/*  Apply css properties to the second 
            child of ui-widgets class */
            .ui-widgets:nth-child(2) {
  border-top-color: #34495e; /* Cambia el color del borde superior */
  border-right-color: #95a5a6; /* Cambia el color del borde derecho */
  border-left-color: #2c3e50; /* Cambia el color del borde izquierdo */
  border-bottom-color: #95a5a6; /* Cambia el color del borde inferior */
}
/*  Apply css properties to ui-widgets class 
            and ui-values class*/
.ui-widgets .ui-values {
  top: 40px;
  position: absolute;
  left: 10px;
  right: 0;
  font-weight: 700;
  font-size: 2rem;
}

/*  Apply css properties to ui-widgets 
            class and ui-labels class*/
.ui-widgets .ui-labels {
  left: 0;
  bottom: -16px;
  text-shadow: 0 0 4px grey;
  color: black;
  position: absolute;
  width: 100%;
  font-size: 16px;
}
.ui-values {
  font-weight: 700;
  font-size: 2rem;
}

.ui-labels {
  text-shadow: 0 0 4px grey;
  color: black;
  font-size: 16px;
}

/* Proyectos Section */
.proyectos {
  padding: 60px 0;
}

.proyecto {
  background-color: #1a1a1a; /* Color de fondo más oscuro para proyectos */
  padding: 20px;
  margin-bottom: 30px;
  transition: transform 0.3s;
}

.proyecto:hover {
  transform: scale(1.05);
}

.proyecto h4 {
  font-size: 1.5rem;
  color: #fff;
}

.proyecto p {
  color: #ccc;
}

.tecnologias {
  margin-top: 10px;
}

.tecnologias i {
  font-size: 1.5rem;
  margin-right: 10px;
}

/* Testimonios Section */
.testimonios {
  background-color: #1a1a1a; /* Color de fondo más oscuro para testimonios */
  padding: 60px 0;
}

.testimonio {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 30px;
}

.testimonio i {
  color: #fff;
  margin-bottom: 10px;
}

.testimonio p {
  font-style: italic;
}

.testimonio strong {
  font-weight: bold;
}

/* Contacto Section */
.contacto {
  padding: 60px 0;
  background-color: #333;
}

/* Footer Section */
.footer {
  background-color: #1a1a1a;
  color: #fff;
}
</style>
