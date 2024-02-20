import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const rubricUrl = 'https://www.klerk.ru/yindex.php/v3/event/rubrics/'

export const useRubricatorStore = defineStore('rubricator', () => {
  const rubric = ref()
  const isRubricLoad = ref(false)
  const isRubricWithEmptyRubric = ref(1)

  const rubricCheckedItems = ref([])

  const rubricCheckedCount = computed(() => {
    let totalCount = 0
    const visitedNodes = new Set()

    for (let id of rubricCheckedItems.value) {
      const node = findNodeById(rubric.value, id)
      if (node) {
        totalCount += countTotal(node, visitedNodes)
      }
    }

    return totalCount
  })

  function findNodeById(nodes, id) {
    for (let node of nodes) {
      if (node.id === id) return node
      if (node.children && node.children.length > 0) {
        const foundNode = findNodeById(node.children, id)
        if (foundNode) return foundNode
      }
    }
    return null
  }

  function countTotal(node, idsSet, totalCount = 0) {
    if (!idsSet.has(node.id)) {
      totalCount += node.count
      idsSet.add(node.id)
    }

    if (node.children && node.children.length > 0) {
      for (let child of node.children) {
        totalCount += countTotal(child, idsSet)
      }
    }

    return totalCount
  }

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

  return {
    rubric,
    rubricCheckedCount,
    isRubricLoad,
    isRubricWithEmptyRubric,
    rubricCheckedItems,
    fetchRubric
  }
})
