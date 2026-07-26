<template>
  <div class="bio">
    <h1 class="title is-1 has-text-centered mt-6">Biografia</h1>

    <div class="bio-content">
      <section>
        <h2 class="eyebrow">Formació</h2>
        <ul>
          <li>Naixement: abril 1960, Portbou, Girona</li>
          <li>Arquitecte per la Universitat Politècnica de Catalunya, Barcelona 1984</li>
          <li>Màster d'estudis territorials i urbanístics de la Universitat Pompeu Fabra, Barcelona 2002</li>
          <li>Grau en Belles Arts per la Universitat de Barcelona, 2017</li>
        </ul>
      </section>

      <section>
        <h2 class="eyebrow">Formació complementària</h2>
        <ul>
          <li>Pintura i dibuix: Taller de pintura Serra de Rivera, Taller de pintura de Joan Fercó, Cercle Artístic de Sant Lluc (Oscar Sanchís, Francesc Artigau, Ingrid Garcia Moya i Diego Mallo Ferrer), Escola Massana (retrat i figura amb Josep Maria Cabané)</li>
          <li>Ceràmica: Escola de Ceràmica de la Bisbal (torn i engalbes amb Dolors Ros), Taller de ceràmica Josep Papasseit a Miravet, curs de motlles a «La Industrial» amb Jordi Camprubí, curs de porcellana per a joieria amb Núria Soley, curset de torn per a porcellana amb Anàs Rifi</li>
        </ul>
      </section>

      <section>
        <h2 class="eyebrow">Exposicions</h2>
        <ul>
          <li><strong>2024</strong> — Imatges de Capafonts. Ajuntament de Capafonts</li>
          <li><strong>2023–24</strong> — Col·lectiva del Cercle Artístic de Sant Lluc de Barcelona</li>
          <li><strong>2020</strong> — «Dones avançant» a «Dues impressions», amb Luisa Segura, associació Sant Lluc de Mataró</li>
          <li><strong>2019</strong> — Col·lectiva del Cercle Artístic de Sant Lluc de Barcelona</li>
          <li><strong>2016</strong> — «Draw Raw Graphic Interchange Format», comissariada per Lidia Górriz i Montserrat López, amb l'obra «Way of silence»</li>
          <li><strong>1993</strong> — Col·lectiva del Cercle Artístic de Sant Lluc de Barcelona</li>
          <li><strong>1976</strong> — Col·lectiva Aula Artística de Portbou a Villeurbanne (Lió)</li>
        </ul>
      </section>

      <section>
        <h2 class="eyebrow">Publicacions</h2>
        <ul>
          <li><strong>2017</strong> — «Gravat i fotografia, objectius paral·lels. Martin Lewis i Català-Roca», revista Serra d'Or, núm. 695</li>
          <li><strong>2014</strong> — Comunicació «La mejora del entorno mediante la protección del patrimonio arquitectónico», Atlas del XVI Congrés Iberoamericà d'Urbanisme, Societat i Territori. Sintra, Portugal</li>
          <li><strong>2014</strong> — Article «L'urbanisme en la protecció del patrimoni arquitectònic», a la publicació «Centres històrics: el valor del context», Edicions Patrimoni 2.0</li>
          <li><strong>2013</strong> — «Els projectes de regadiu i els espais naturals: distribució de drets i deures», Quaderns Agraris, Institució Catalana d'Estudis Agraris (ICEA), Institut d'Estudis Catalans. Publicat també el 2012 al núm. 24 d'«Estudis d'Història Agrària» de la Universitat de Barcelona</li>
          <li><strong>2012</strong> — Article «La importància del manteniment dels monuments», revista «L'Informatiu» del Col·legi d'Aparelladors, Arquitectes Tècnics i Enginyers d'Edificació de Barcelona, núm. 333</li>
          <li><strong>2005</strong> — Comunicació «Valorització del paisatge rural» al Vè Congrés de la Coordinadora de Centres d'Estudis de Parla Catalana, Maó. Publicada a les actes del congrés, Editorial Cossetània</li>
          <li><strong>1990</strong> — Organització i elaboració de les conclusions del Congrés d'Urbanisme i Territori de Catalunya. Federació de Municipis de Catalunya, Barcelona</li>
        </ul>
      </section>

      <section>
        <h2 class="eyebrow">Premis</h2>
        <ul>
          <li><strong>1996</strong> — Finalista del concurs d'avantprojectes per al soterrament d'un tram de línia del ferrocarril i nova estació de Renfe de Vic. Ajuntament de Vic</li>
          <li><strong>1990</strong> — 3r premi al concurs de la nova seu del Col·legi Oficial d'Arquitectes de Catalunya a Lleida</li>
          <li><strong>1985</strong> — 3r premi «ISOVER» (aïllaments tèrmics i acústics en tancaments) de Projectes de Final de Carrera</li>
          <li><strong>1985</strong> — Finalista del premi «Dragados y Construcciones S.A.» de l'Escola Tècnica Superior d'Arquitectura de Barcelona i del Vallès</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bio-content {
  max-width: 46rem;
  margin: 3rem auto 4rem;
}

.bio-content section {
  margin-bottom: 3rem;
}

.bio-content .eyebrow {
  margin-bottom: 1.25rem;
}

.bio-content ul {
  list-style: none;
  padding: 0;
}

.bio-content li {
  margin-bottom: 0.85rem;
  line-height: 1.7;
}

.bio-content li strong {
  color: var(--color-ink);
  font-weight: 500;
}
</style>
