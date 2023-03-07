import { defineStore } from 'pinia'
import drawerBackground from '@/assets/images/drawer1.jpg'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      drawer: true,
      drawerImage: drawerBackground,
      drawerImageShow: true,
    }
  },
})
