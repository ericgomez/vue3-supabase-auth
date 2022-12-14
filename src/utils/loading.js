import { ref, readonly } from 'vue'

const _loading = ref(false)

export const loading = readonly(_loading)

export const setLoading = (v) => _loading.value = v
