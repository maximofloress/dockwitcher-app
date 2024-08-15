<script setup>
import { ref, onMounted } from 'vue'
import { format } from 'date-fns'
import DwTable from '@/components/DwTable.vue'
import Pagination from '@/components/Pagination.vue'
import { driversStore } from '@/_stores/driversStore'
import { storeToRefs } from 'pinia'

const pageSize = ref(10) // pageable.pageSize

const store = driversStore()
const { content, pagination, sort } = storeToRefs(store)

const updatePageSize = (event) => {
  pageSize.value = parseInt(event.target.value)
}

const formatDate = (date) => {
  // Verifica si date es null
  if (!date) {
    return 'N/D'
  }
  return format(new Date(date), 'dd/MM/yyyy')
}

onMounted(() => {
  store.getDrivers(0, 10, 'nombre', 'asc');
})

function changePage(page) {
  store.getDrivers(page, 10, 'nombre', 'asc');
}
</script>

<template>
  <div class="dw-table-container">
    <div class="p-3 d-flex justify-content-between">
      <p class="fs-4 fw-medium m-0">Lista Conductores</p>
    </div>
    <div class="divider"></div>
    <div class="p-3">
      <!-- Controles de la tabla -->
      <div class="dw-table-controls d-flex align-items-center gap-2">
        <select @change="updatePageSize" id="itemsPerPage" class="py-1 px-1">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <label for="itemsPerPage">Por página</label>
        <input type="text" placeholder="Buscar..." class="search-input ms-auto px-2" />
      </div>
    </div>
    <div class="divider"></div>
    <!-- Paso como slots para items los items que se van a mostrar en la tabla para la pagina actual -->
    <DwTable :items="content">
      <template v-slot:header>
        <th class="p-3">Nombre</th>
        <th class="p-3">Identificacion</th>
        <th class="p-3">Licencias</th>
        <th class="p-3">Categoria</th>
        <th class="p-3">Caducidad</th>
      </template>
      <template v-slot="{ item }">
        <td class="p-3">{{ item.nombre }}</td>
        <td class="p-3">{{ item.identificacion }}</td>
        <td class="p-3">{{ item.licencia }}</td>
        <td class="p-3">
          {{ item.experiencia.categorias.map((categoria) => categoria.tipo).join(', ') }}
        </td>
        <td class="p-3">{{ formatDate(item.fechaCaducidad) }}</td>
      </template>
    </DwTable>
    <div class="px-3 pb-3">
      <Pagination :pagination="pagination" @change-page="changePage" />
    </div>
  </div>
</template>
