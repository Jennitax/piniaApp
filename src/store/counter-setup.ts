import { defineStore } from 'pinia';
import { ref, computed } from 'vue';


export const useCounterSetupStore = defineStore('counterSetup',() => {
 
    const count = ref<number>(0)
    const lastChanged = ref<Date>()

    const incrementBy = (value: number) => {
        count.value += value
        lastChanged.value = new Date()
    }

    return {
        //State propieties
        count,
        lastChanged,

        // Getters
        squareCount: computed(() => count.value * count.value),

        //Actions
        incrementBy,
        increment: () => incrementBy(1)

    }
})