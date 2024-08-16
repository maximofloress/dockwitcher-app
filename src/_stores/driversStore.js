import { defineStore } from 'pinia'
import axios from 'axios'

export const driversStore = defineStore('drivers', {
  state: () => ({
    content: [],
    pagination: {
      last: false,
      totalPages: 1,
      totalElements: 1,
      first: true,
      size: 10,
      number: 0
    },
    sort: {
      sorted: true,
      empty: false,
      unsorted: false,
      field: 'nombre',
      direction: 'asc'
    }
  }),
  actions: {
    getDrivers(page, size, field, direction) {
      var params = {
        page,
        size,
        sort: field,
        direction
      }
      axios
        .get(`http://localhost:8080/conductores`, {
          params: params
        })
        .then((response) => {
          this.content = response.data.content
          this.pagination = {
            last: response.data.last,
            totalPages: response.data.totalPages,
            totalElements: response.data.totalElements,
            first: response.data.first,
            size: response.data.size,
            number: response.data.number
          }
          this.sort = {
            sorted: response.data.sorted,
            empty: response.data.empty,
            unsorted: response.data.unsorted,
            field: field,
            direction: direction
          }
        })

      // try {
      //   totalPages.value = response.data.totalPages
      //   totalItems.value = response.data.totalElements
      //   items.value = response.data.content
      //   // Emite el evento para actualizar el total de páginas, el total de items y los items
      // } catch (error) {
      //   console.error('Hubo un error al obtener los datos:', error)
      // }
    }
  }
})
