import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const rubricUrl = 'https://www.klerk.ru/yindex.php/v3/event/rubrics/'

export const useRubricatorStore = defineStore('rubricator', () => {
  const rubric = ref()
  const isRubricLoad = ref(false)
  const isRubricWithEmptyRubric = ref(1)

  async function fetchRubric() {
    const requestOptions = {
      params: { allowEmpty: isRubricWithEmptyRubric.value }
    }

    try {
      isRubricLoad.value = true
      const response = await axios.get(rubricUrl, requestOptions)
      isRubricLoad.value = false
      rubric.value = response.data
    } catch (e) {
      console.error(e)
    }
  }

  return { rubric, isRubricLoad, isRubricWithEmptyRubric, fetchRubric }
})
