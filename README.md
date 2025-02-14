
<body>
    <h1>DemoStreaming</h1>
    <p>Esta es una aplicación React que muestra una lista de series y películas, permitiendo filtrarlas por año y ver detalles adicionales. La aplicación está construida con React, Redux, Material-UI (MUI) y utiliza un archivo JSON local para cargar los datos.</p>
    <h2>Instalación y Uso</h2>
    <h3>Requisitos Previos</h3>
    <ul>
        <li><strong>Node.js:</strong> Primero es tener instalado Nodejs, si por casualidad no lo tiene instalarlo desde   <a href="https://nodejs.org">aquí</a>.</li>
    </ul>
    <h3>Pasos para Instalar y Ejecutar</h3>
    <ol>
        <li><strong>Clonar el Repositorio:</strong>
            <pre><code>El repositorio se puede clonar por medio de comando de GIT o por GitDesktop</code></pre>
            <strong>Preferiblemente abrir con Visual Studio Code</strong>
        </li>
        <li><strong>Instalar Dependencias:</strong>
            <p>Para instalar todas las dependencias necesarias, ejecuta los siguientes comandos en la terminal:</p>
            <pre><code>npm install</code></pre>
            <pre><code>npm install @reduxjs/toolkit react-redux axios @mui/material @emotion/react @emotion/styled</code></pre>
            <pre><code>npm install @mui/material @emotion/react @emotion/styled axios react-redux @reduxjs/toolkit</code></pre>
            <pre><code>npm install @types/react @types/react-dom</code></pre>
            <pre><code>npm install react@latest react-dom@latest @vitejs/plugin-react@latest</code></pre>
            <strong>Estos comandos se necesitan para instalar las bibliotecas y herramientas que necesitas para construir con React y Material-UI, además de integrar Redux para manejar el estado, Axios para las peticiones HTTP, y configurar Vite para un desarrollo más rápido.</strong>
        </li>
        <li><strong>Ejecutar la Aplicación:</strong>
            <pre><code>npm run dev</code></pre>
          <strong>Cuando se ejecute el comando se visualizara una URL en la terminal la que se tiene que abrir para poder visualizar la pagina</strong>
        </li>
    </ol>
    <h2>Estructura del Proyecto</h2>
    <ul>
        <li><strong>src/:</strong> Contiene el código fuente de la aplicación.</li>
        <li><strong>components/:</strong> Componentes reutilizables como Card, Healer y Footer</li>
        <li><strong>pages/:</strong> Páginas de la aplicación (Home, Series, Movies, Login, Paquetes).</li>
        <li><strong>Ultis/:</strong> Configuración de Redux en la carpeta Utils (Store, MoviesSlice).</li>
        <li><strong>public/:</strong> Archivos estáticos como imágenes y el archivo JSON (sample.json).</li>
    </ul>
    <h2>Funcionalidades Principales</h2>
    <h3>Página de Login:</h3>
    <ul>
        <li>Muestra Login donde tenemos dos texfield del email como la contraseña.</li>
        <li>Contiene para crear cuenta y olvido su contraseña</li>
        <li>Pero mensionar que el login es mas que todo diseño ya que esta por default se puede entrar ya que no trabaja con base de datos</li>
    </ul>
    <h3>Página de Inicio:</h3>
    <ul>
        <li>Muestra dos tarjetas: Series y Películas.</li>
        <li>Cada tarjeta redirige a su respectiva página.</li>
    </ul>
    <h3>Página de Series:</h3>
    <ul>
        <li>Muestra una lista de series filtradas por año.</li>
        <li>Permite filtrar las series por año específico.</li>
        <li>Muestra un círculo de carga mientras se filtra.</li>
        <li>Se puede elejir el tamaño de los resultado</li>
        <li>Se implementa la paginación</li>
        <li>Si no hay resultados, muestra un mensaje indicando que no hay coincidencias.</li>
    </ul>
    <h3>Página de Películas:</h3>
    <ul>
         <li>Muestra una lista de Peliculas filtradas por año.</li>
        <li>Permite filtrar las peliculas por año específico.</li>
        <li>Muestra un círculo de carga mientras se filtra.</li>
        <li>Se puede elejir el tamaño de los resultado</li>
        <li>Se implementa la paginación</li>
        <li>Si no hay resultados, muestra un mensaje indicando que no hay coincidencias.</li>
    </ul>
    <h3>Página de Paquetes:</h3>
    <ul>
        <li>Muestra una lista de paquetes que se pueden pagar.</li>
        <li>Más que todo como ejemplo ya que es más como diseño.</li>
    </ul>
    <h3>Carta de Detalles:</h3>
    <ul>
        <li>Al hacer clic en una serie o película, se abre un popup con detalles adicionales (title, description, releaseYear, image).</li>
    </ul>
    <h2>Mejoras Pendientes</h2>
    <ul>
        <li><strong>Optimización de Imágenes:</strong> Optimizar imágenes para mejorar el rendimiento en dispositivos móviles.</li>
        <li><strong>Deploy Automático:</strong> Configurar CI/CD para desplegar automáticamente la aplicación</li>
    </ul>
    <h2>Qué Haría con Más Tiempo</h2>
    <ul>
        <li><strong>Integración con una API Real:</strong> Usar una API real en lugar de un archivo JSON local para obtener datos dinámicos.</li>
        <li><strong>Búsqueda Avanzada:</strong> Implementar un sistema de búsqueda por título, género o año de lanzamiento.</li>
        <li><strong>Diseño Responsivo Mejorado:</strong> Mejorar los estilos para dispositivos específicos,  Agregar mas estilo para encantar al usuario por las interfaces y diseños llamativos.</li>
        <li><strong>Autenticación:</strong> Agregar autenticación para permitir a los usuarios guardar favoritos y crear listas personalizadas.</li>
    </ul>
    <h2>Capturas de Pantalla</h2>
    <ul>
        <li><strong>Página de Login:</strong> <img src="https://github.com/user-attachments/assets/767db7df-cc65-47ad-8f9c-2334d9b3c776" alt="Página de Inicio"></li>
        <li><strong>Página de Home:</strong> <img src="https://github.com/user-attachments/assets/d73362b4-c3d2-4eb7-b944-dd34a02930b3" alt="Página de Inicio"></li>
        <li><strong>Página de Series:</strong> <img src="https://github.com/user-attachments/assets/1ef8cfaa-6402-4eef-beaa-cc2c9b7f58e4" alt="Página de Series"></li>
        <li><strong>Página de Películas:</strong> <img src="https://github.com/user-attachments/assets/274fdb3d-708f-4392-9481-703a45763678" alt="Página de Películas"></li>
         <li><strong>Final de paginas:</strong> <img src="https://github.com/user-attachments/assets/ccdbc9fa-1769-4cfa-80d0-eb7be78dbcce" alt="Página de Películas"></li>
        <li><strong>Popup de Detalles:</strong> <img src="https://github.com/user-attachments/assets/bad930ab-1c57-4e1d-a5fc-d90b9c072e77" alt="Popup de Detalles"></li>
        <li><strong>Paquetes venta:</strong> <img src="https://github.com/user-attachments/assets/42a4701f-368b-4676-9426-4d265d75999f" alt="Popup de Detalles"></li>
    </ul>
    <ul>
        <li><strong>Nombre:</strong> Anthony Sibaja Granados</li>
        <li><strong>Email:</strong> <a href="asibajagranados@gmail.com">asibajagranados@gmail.com</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/AnthonySibaja" target="_blank">AnthonySibaja</a></li>
    </ul>
    <p>¡Gracias por revisar mi proyecto! 🚀</p>
</body>
</html>
