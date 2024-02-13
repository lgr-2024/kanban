<template>
  <div class="h-screen background-style background-position basic-font-style">
    <div class="board-main-content">
      <div class="board-canvas">
        <div class="flex h-full">
          <div id="board" class="flex flex-row flex-1">
            <template v-if="store.state.kanbanLists.lists.length > 0">
              <draggable :list="store.state.kanbanLists.lists" tag="ol" group="lists" :disabled="!enabled" item-key="id"
                ghost-class="ghost" class="flex flex-row list-none list-image-none px-1.5">
                <template #item="{ element }">
                  <li :key="element.id" class="px-1.5">
                    <KanbanList :kanbanList="element" />
                  </li>
                </template>
              </draggable>
            </template>
            <template v-else>
              <draggable :list="store.state.kanbanLists.empty" tag="ol" group="lists" item-key="id"
                class="flex flex-row list-none list-image-none px-1.5">
                <template #item="{ element }">
                  <li :key="element.id">
                    {{ element.emptyName }}
                  </li>
                </template>
              </draggable>
            </template>

            <div class="px-1.5">
              <button v-if="!isActiveCreateListButton" @click="activeCreateListButton"
                class="flex items-center justify-start gap-1 add-list-active-button-style list-width transition-ease shadow-raised">
                <span class="mr-2">
                  <i class="fa-solid fa-plus"></i>
                </span>
                Add Another List
              </button>
              <div v-else class="add-list-popup-style">
                <input :value="listTitle" @input="listTitle = $event.target.value" type="text"
                  placeholder="Enter list title..." class="input-textarea-style input-textarea-active transition-ease" />
                <div class="flex items-center justify-start gap-1 mt-2">
                  <button @click="createListInListsMethod"
                    class="add-list-button-active transition-ease add-list-button-style">Add List</button>
                  <button @click="activeCreateListButton" class="p-1.5 rounded-lg add-card-button-active transition-ease">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <KanbanPopup />
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import KanbanList from '@components/kanban/KanbanList.vue'
import KanbanPopup from '@components/kanban/KanbanPopup.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const listTitle = ref('')
const isActiveCreateListButton = ref(false)
let enabled = ref(true)
const listObject = ref({
  id: -1,
  title: '',
  activeCardPopup: false,
  cards: [],
  empty: [
    { emptyName: '' }
  ]
})


const activeCreateListButton = () => {
  isActiveCreateListButton.value = !isActiveCreateListButton.value
}
const createListInListsMethod = () => {
  if (listTitle.value.trim() !== '') {
    listObject.value.id = store.state.kanbanLists.lists.length;
    listObject.value.title = listTitle.value.trim();

    store.commit('createListInLists', { ...listObject.value })

    listObject.value = {
      id: -1,
      title: '',
      activeCardPopup: false,
      cards: [],
      empty: [
        { emptyName: '' }
      ]
    };
    listTitle.value = ''
    activeCreateListButton()
  }
}

</script>

<style lang="scss" scoped></style>