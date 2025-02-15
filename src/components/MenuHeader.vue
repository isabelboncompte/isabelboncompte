<template>
    <header>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <span>Obra</span>
            <ul>
              <li>
                <RouterLink to="/obra/retrats">Retrats</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/postals">Postals</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/picorandan">Picorandan</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/naturesmortes">Natures Mortes</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/mursicamins">Murs i camins</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/miscellania">Miscel·lània</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/homenatgeachantalmaillard">Homenatge a Chantal Maillard</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/gravat">Gravat</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/espriu">Espriu</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/elsllibresilarosa">Els llibres i la rosa</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/donesavançant">Dones Avançant</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/dibuix">Dibuix</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/botanica">Botànica</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/apuntsfigura">Apunts Figura</RouterLink>
              </li>
              <li>
                <RouterLink to="/obra/apuntspaisatge">Apunts Paisatge</RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router'
  
  export default {
    components: { RouterLink }
  }
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }
  
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  
  nav li {
    margin-right: 20px;
    position: relative;
  }
  
  nav li ul {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    padding: 10px;
    display: none;
  }
  
  nav li:hover ul {
    display: block;
  }
  
  nav a {
    color: #fff;
    text-decoration: none;
  }
  
  nav a:hover {
    color: #ccc;
  }
  </style>