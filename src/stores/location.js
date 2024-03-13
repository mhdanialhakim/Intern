import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('location', () => {
    const destination =  reactive ({
        name : '',
        address: '',
        geometry: {
            lat: null,
            long: null
        }
    })
  return { destination }
})