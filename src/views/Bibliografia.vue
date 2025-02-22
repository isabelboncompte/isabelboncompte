<template>
    <div>
      <h1 class="title is-1 has-text-centered m-6">ISABEL BONCOMPTE</h1>
      <div class="has-text-centered m-6">
        <div>
          <h2 class="title is-2 has-text-centered">BIOGRAFIA</h2>
          <p>Naixement: Abril 1960 Portbou, Girona</p> 
          <br> 
          <p>Arquitecte per la Universitat Politècnica de Catalunya, Barcelona 1984</p>
          <br>
          <p>Master d’estudis territoirals i urbanístics de la Universitat Pompeu Fabra, Barcelona 2002</p> 
          <br>
          <p>Grau en Belles Arts per la Universitat de Barcelona, 2017</p>
          <br>


          <h2 class="title is-2 has-text-centered">FORMACIÓ COMPLEMENTÀRIA</h2>

          <p>Pintura i dibuix: Taller de pintura Serra de Rivera, Taller de pintura de Joan Fercó, Cercle artístic de Sant Lluc: Oscar Sanchís, Francec Artigau, Ingrid Garcia Moya i Diego Mallo Ferrer. Escola Massana: Retrat i figura amb Josep Maria Cabané</p>
          <br>

          <p>Ceràmica: Escola de Ceràmica de la Bisbal: Torn i engalbes amb Dolors Ros, Taller de ceràmica Josep Papasseit a Miravet, Curs de Motlles a “La industrial” amb Jordi Camprubí, Curs de porcellana per a joieria amb Núria Soley, Curset de torn per a porcellana amb Anàs Rifi</p>
          <br>

          <h2 class="title is-2 has-text-centered">EXPOSICIONS</h2>

            <p>Imatges de Capafonts. Ajuntament de Capafonts, Agost 2024</p>
            <br>

            <p>Col·lectiva del Cercle artístic de Sant Lluc de Barcelona 2023-24</p>
            <br>

            <p>“Dones avançant” a “Dues impressions”, amb Luisa Segura, associació Sant Lluc de Mataró 2020</p>
            <br>

            <p>Col·lectiva del Cercle artístic de Sant Lluc de Barcelona 2019</p>
            <br>

            <p>“Draw Raw Graphic Interchange Format” (maig 2016) comissariada per Lidia Górriz i Montserrat López, amb l’obra “Way of silence”</p>
            <br>

            <p>Col·lectiva del Cercle artístic de Sant Lluc de Barcelona 1993</p>
            <br>

            <p>Col·lectiva Aula Artística de Portbou a Villeurbanne (Lyon) 1976</p>
            <br>

            <h2 class="title is-2 has-text-centered">PUBLICACIONS</h2>

            <p>Novembre 2017: “Gravat i fotografia, Objectius paral·lels. Martin Lewis i Català-Roca” a la revista Serra d’Or nº 695.</p>
            <br>

            <p>Octubre 2014: Comunicació “La mejora del entorno mediante la protección del patrimonio arquitectónico” a l’Atlas del XVI Congrès Iberoamericà d’Urbanisme Societat i Territori. Sintra, Portugal</p>
            <br>

            <p>2014: Article “L’Urbanisme en la protecció del patrimoni arquitectònic” en la publicació Centres històrics: el valor del context”, Edicions Patrimoni 2.0.</p>
            <br>

            <p>Juliol 2013: “Els projectes de regadiu i els espais naturals: distribució de drets i deures” a la Revista de Quaderns Agraris Institució Catalana d Estudis Agraris (ICEA), de L’institut d’Estudis Catalans. Publicat també l’any 2012 en el nº 24 de la publicació “Estudis d’Història agrària de la Universitat de Barcelona.</p>
            <br>

            <p>Setembre 2012: article “La importància del manteniment dels monuments” a la revista “L’informatiu” del Col·legi d’Aparelladors, Arquitectes Tècnics i Enginyers d’Edificació de Barcelona. Nº 333</p>
            <br>

            <p>Octubre 2005: Vè Congrés de la Coordinadora de Centres d’Estudis de Parla Catalana. Presentació de la comunicació ”Valorització del paisatge rural” en el congrés sobre “Paisatge, territori i societat a terres de parla catalana”. Maó. Publicat a les “Actes del Vè Congrés de la Coordinadora de Centres d’Estudis de Parla Catalana”, Editorial Cosetaina.</p>
            <br>
            <p>Juny 1990: Organització i elaboració de les conclusions del “Congrés d’Urbanisme i Territori de Catalunya”. Federació de Municipis de Catalunya. Barcelona.</p>
            <br>

            <h2 class="title is-2 has-text-centered">PREMIS</h2>


            <p>Desembre 1996: Finalista del concurs d’avantprojectes per al soterrament d’un tram de línia del ferrocarril i nova estació de Renfe de Vic. Ajuntament de Vic.</p>
            <br>

            <p>Març 1990: 3r premi en concurs de la nova seu del Col·legi Oficial d’Arquitectes de Catalunya a Lleida.</p>
            <br>

            <p>Novembre 1985: 3r premi “ISOVER” (aïllaments tèrmics i acústics en tancaments) de Projectes de Final de Carrera.</p>
            <br>

            <p>Abril 1985: Finalista del premi “Dragados y Construcciones S.A. l’Escola Tècnica Superior d’Arquitectura de Barcelona i del Vallès.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .column {
    flex-basis: 50%;
  }
  
  .image-column {
    order: 2;
  }
  
  .text-column {
    order: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
  }
  
  .text-column p {
    margin: 0;
  }
  
  /* Switch to single-column layout on smaller screens */
  @media (max-width: 768px) {
    .column {
      flex-basis: 100%;
    }
    .image-column, .text-column {
      margin: 20px 0;
    }
    .image-column {
      order: 2;
    }
    .text-column {
      order: 1;
    }
  }
  </style>