import { ref, readonly } from 'vue'

const _notification = ref(null)

export const notification = readonly(_notification)

export const setNotification = (v) => _notification.value = v
