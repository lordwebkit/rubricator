import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const rubricUrl = 'https://www.klerk.ru/yindex.php/v3/event/rubrics/'

export const useRubricatorStore = defineStore('rubricator', () => {
  const rubric = ref()

  async function fetchRubric() {
    try {
      const response = await axios.get(rubricUrl, { params: { allowEmpty: 1 } })
      // const response = await axios.get(rubricUrl)
      rubric.value = response.data
    } catch (e) {
      console.error(e)
    }
  }

  return { rubric, fetchRubric }
})
