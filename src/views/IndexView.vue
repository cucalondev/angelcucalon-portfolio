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
              <a class="nav-link" href="#experiencia">Experiencia</a>
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
          href="https://drive.google.com/file/d/1T5ENJsIkBhdFu3lCpGDYOMxQyquaCypY/view?usp=sharing"
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
          Soy un desarrollador fullstack apasionado con una sólida experiencia en la creación de aplicaciones web y servicios financieros. He trabajado en proyectos desafiantes, utilizando tecnologías como .NET, Angular y React.js, lo que me ha permitido desarrollar habilidades en el manejo de bases de datos como SQL Server y MongoDB.
        </p>
        <p class="lead">
          Mi enfoque se basa en la colaboración en equipos multidisciplinarios, donde convierto ideas creativas en soluciones efectivas. Estoy siempre en busca de la innovación, adaptándome rápidamente a nuevas tecnologías y metodologías. Si tienes una idea emocionante o un proyecto desafiante, no dudes en contactarme; ¡estoy listo para hacerlo realidad!
        </p>
      </div>
      <div class="col-lg-6">
        <h2 class="display-4 font-weight-bold mb-4">
          Conocimientos y Aptitudes
        </h2>
        <div class="conocimientos">
          <div
            class="conocimiento"
            v-for="(conocimiento, index) in conocimientos.slice(0, 2)"
            :key="index"
          >
            <strong>{{ conocimiento.nombre }}</strong>
            <div class="empresa">
              <img
                v-if="conocimiento.empresa === 'Minsait'"
                src="../assets/empresas/minsait_logo.jpeg"
                alt="Minsait Logo"
                class="empresa-logo"
              />
              <img
                v-else-if="conocimiento.empresa === 'Seitech'"
                src="../assets/empresas/seitechfso_logo.jpeg"
                alt="Seitech Logo"
                class="empresa-logo"
              />
              {{ conocimiento.empresa }}
            </div>
            <hr />
          </div>
          <button
            class="btn btn-outline-light mt-3"
            data-bs-toggle="modal"
            data-bs-target="#modalConocimientos"
          >
            Ver Más Aptitudes
          </button>
        </div>
      </div>
    </div>
  </div> 
</section>


    <!-- Modal -->
    <div
      class="modal fade"
      id="modalConocimientos"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Mis Aptitudes</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div
              class="conocimiento"
              v-for="(conocimiento, index) in conocimientos"
              :key="index"
            >
              <strong>{{ conocimiento.nombre }}</strong>
              <div class="empresa">
                <img
                  v-if="conocimiento.empresa === 'Minsait'"
                  src="../assets/empresas/minsait_logo.jpeg"
                  alt="Minsait Logo"
                  class="empresa-logo"
                />
                <img
                  v-else-if="conocimiento.empresa === 'Seitech'"
                  src="../assets/empresas/seitechfso_logo.jpeg"
                  alt="Seitech Logo"
                  class="empresa-logo"
                />
                {{ conocimiento.empresa }}
              </div>
              <hr />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Proyectos Section -->
    <section class="proyectos bg-secondary text-white" id="proyectos">
      <div class="container py-5">
        <h2 class="display-4 font-weight-bold text-center mb-5">
          Mis Proyectos
        </h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="(proyecto, index) in proyectos"
            :key="index"
          >
            <div class="proyecto card mb-5" style="height: 100%">
              <div class="card-body">
                <h4 class="card-title font-weight-bold">
                  {{ proyecto.nombre }}
                </h4>
                <p class="card-text">{{ proyecto.descripcion }}</p>
                <a :href="proyecto.url" target="_blank">
                  <img
                    :src="proyecto.imagen"
                    alt="Imagen de {{ proyecto.nombre }}"
                    class="img-fluid mb-3"
                    style="max-height: 200px; width: auto"
                  />
                </a>
                <div class="tecnologias">
                  <i class="fab fa-html5"></i>
                  <i class="fab fa-css3"></i>
                  <i class="fab fa-js"></i>
                  <i class="fab fa-react"></i>
                  <i class="fab fa-node-js"></i>
                  <i class="fab fa-python"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experiencia Section con Línea de Tiempo -->
    <section class="experiencia bg-secondary text-white" id="experiencia">
      <div class="container py-5">
        <h2 class="display-4 font-weight-bold text-center mb-5">Experiencia</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-content">
              <h3 class="font-weight-bold">
                <img
                  src="../assets/empresas/minsait_logo.jpeg"
                  alt="Minsait Logo"
                  class="empresa-logo"
                />
                Minsait
              </h3>
              <p>Oct. 2023 - Sept. 2024 · 1 año</p>
              <p>
                Desarrollo de sistemas y servicios financieros con .NET.
                Realización de informes con RDL, almacenados y jobs SQL.
              </p>
              <p>
                <strong>Stack:</strong> C#, ASP.NET, Visual Basic .NET, SQL
                Server, C, C++, Report Services.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3 class="font-weight-bold">
                <img
                  src="../assets/empresas/seitechfso_logo.jpeg"
                  alt="Seitech Logo"
                  class="empresa-logo"
                />
                Seitech
              </h3>
              <p>Mar. 2023 - Jun. 2023 · 4 meses</p>
              <p>
                Creación de API Rest y comprobación con Postman. Desarrollo de
                aplicaciones web con Wordpress y React.js.
              </p>
              <p><strong>Stack:</strong> Python, JavaScript, MongoDB, Redis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto Section -->
    <section class="contacto bg-dark text-white" id="contacto">
      <div class="container py-5">
        <h2 class="display-4 font-weight-bold text-center mb-5">Contacto</h2>
        <p class="lead text-center">
          Si deseas ponerte en contacto conmigo, no dudes en enviarme un mensaje
          a través de mis redes sociales.
        </p>
        <div class="text-center">
          <a
            href="https://linkedin.com/in/ángel-cucalón-gutiérrez-b51102230"
            class="btn btn-outline-light mx-2"
            target="_blank"
            >LinkedIn</a
          >
          <a
            href="https://github.com/cucalondev"
            class="btn btn-outline-light mx-2"
            target="_blank"
            >GitHub</a
          >
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4">
      <p>&copy; 2024 Ángel Cucalón. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import alimentaExpress from "../assets/images-projects/alimenta-express.png";
import rickandmorty from "../assets/images-projects/rick-and-morty.png";
import poker from "../assets/images-projects/poker.png";
import mirae from "../assets/images-projects/mirae.png";
import seitechlogo from "../assets/empresas/seitechfso_logo.jpeg";
import minsaitlogo from "../assets/empresas/minsait_logo.jpeg";
export default {
  data() {
    return {
      proyectos: [
        {
          nombre: "Mirae",
          descripcion: "Ecommerce profesional para una empresa",
          iconos: ["fab fa-wordpress"],
          url: "https://mirae.es/",
          imagen: mirae,
        },

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
      conocimientos: [
        { nombre: "React.js", empresa: "Seitech" },
        { nombre: "Redis", empresa: "Seitech" },
        { nombre: "Postam", empresa: "Seitech" },
        { nombre: "Python", empresa: "Seitech" },
        { nombre: "ClickUp", empresa: "Seitech" },
        { nombre: "Slack", empresa: "Seitech" },
        { nombre: "MongoDB", empresa: "Seitech" },
        { nombre: "Javascript", empresa: "Seitech" },
        { nombre: "Microsoft SQL Server", empresa: "Minsait" },
        { nombre: "C#", empresa: "Minsait" },
        { nombre: "ASP.NET", empresa: "Minsait" },
        { nombre: "C++", empresa: "Minsait" },
        { nombre: "C", empresa: "Minsait" },
        { nombre: "Report services", empresa: "Minsait" },
        { nombre: "Facturación", empresa: "Minsait" },
        { nombre: "Centro autorizador", empresa: "Minsait" },
        { nombre: "XAML", empresa: "Minsait" },
        // Agrega más conocimientos según sea necesario
      ],
    };
  },
};
</script>

<style scoped>
/* Custom styles */
.empresa-logo {
  width: 50px; /* Tamaño del logo ajustado */
  height: auto;
  margin-right: 10px;
}
.hero {
  background-image: url("../assets/hero-bg.jpg");
  background-size: cover;
  background-position: center;
}

.progress-skill {
  margin-bottom: 15px;
}

.progress {
  height: 20px;
  background-color: #343a40;
}

.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  width: 4px;
  background-color: #007bff;
}

.timeline-item {
  position: relative;
  margin: 20px 0;
}

.timeline-item .timeline-content {
  padding: 20px;
  background-color: #343a40;
  border-radius: 5px;
  color: white;
}

.timeline-item:nth-child(even) .timeline-content {
  float: right;
}

.timeline-item:nth-child(odd) .timeline-content {
  float: left;
}

.timeline-item::after {
  content: "";
  display: table;
  clear: both;
}
</style>
