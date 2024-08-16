<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="sidebar">
    <div class="title-container">
      <h2 class="title">dockwitcher</h2>
    </div>
    <div class="line"></div>
    <div class="side-options">
      <ul>
        <li>
          <div class="d-flex justify-content-between align-items-center">
            <div class="">
              <img id="planification-icon" src="../assets/images/icons8-todo-list-24.png" />
              Camiones
            </div>
            <button
              class="btn btn-primary"
              id="collapse-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCamiones"
              aria-expanded="false"
              aria-controls="collapseCamiones"
            >
              <img
                id="collapse-icon"
                src="../assets/images/icons8-chevron-abajo-24.png"
                width="15"
              />
            </button>
          </div>
          <div class="collapse" id="collapseCamiones">
            <div>
              <p><RouterLink to="/trucks">Camiones</RouterLink></p>
              <p><RouterLink to="/drivers">Conductores</RouterLink></p>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex justify-content-between align-items-center">
            <div class="">
              <img id="planification-icon" src="../assets/images/icons8-todo-list-24.png" />
              Planificacion
            </div>
            <button
              class="btn btn-primary"
              id="collapse-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePlanificacion"
              aria-expanded="false"
              aria-controls="collapsePlanificacion"
            >
              <img
                id="collapse-icon"
                src="../assets/images/icons8-chevron-abajo-24.png"
                width="15"
              />
            </button>
          </div>
          <div class="collapse" id="collapsePlanificacion">
            <div>
              <p><a href=" /planning/dashboard">Panel</a></p>
              <p><a href="/planning/incommings">Recepciones</a></p>
              <p><a href="/planning/outgoings">Expediciones</a></p>
            </div>
          </div>
        </li>
        <li>
          <img id="control-muelle-icon" src="../assets/images/user-nurse-solid.svg" width="24" />
          Control de muelle
        </li>
        <li>
          <img id="camion-icon" src="../assets/images/truck-solid.svg" width="24" />
          Transporte
        </li>
        <li>
          <img id="configuration-icon" src="../assets/images/gear-solid.svg" width="24" />
          Configuración
        </li>
      </ul>
    </div>
  </div>
</template>
