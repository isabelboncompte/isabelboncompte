<template>
  <div>
    <img src="../assets/obra/Murs i camins/Paret del brugent al pont vell.jpg" id="full-width-image" />
    <h1 class="title is-1 has-text-centered mt-6 smaller-text-on-mobile">ISABEL BONCOMPTE</h1>

    <div class="row">
      <div class="column text-column">
        <h2 class="title is-2 has-text-centered">QUI SÓC</h2>
        <p>Estic interessada en practicar la pintura i la ceràmica per continuar aprenent, i per deixar testimoni d’allò que m’interessa.</p> 
        <br> <p>Les dues línies de treball actuals són:</p>
        <br>
        <p>En pintura el retrat i la natura </p> 
        <p>En ceràmica l’experimentació en el torn</p>
      </div>
      <div class="column image-column">
        <img src="../assets/obra/Retrats/Moment.jpg" id="full-width-image" />
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

@media only screen and (max-width: 768px) {
  .smaller-text-on-mobile {
    font-size: 0.875rem; /* reduced font size on smaller screens */
  }
}

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