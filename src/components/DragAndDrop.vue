<template>
  <div>
    <draggable :list="kanbanLists" tag="ol" :disabled="!enabled" item-key="id" ghost-class="ghost" class="kanban-lists">
      <template v-for="element in kanbanLists" :itemKey="element.id" #item="{ element }">
        <div class="kanban-list">
          <h3>{{ element.title }}</h3>
          <template v-if="element.card.length > 0">
            <draggable :list="element.card" tag="ul" group="list" ghost-class="ghost" class="list-group kanban-cards"
              @drop="addCard(element)">
              <template v-for="(element, index) in element.card" :itemKey="index" #item="{ element }"
                class="list-group-item">
                <div>{{ element.cardName }}</div>
              </template>
            </draggable>
          </template>
          <template v-else>
            <draggable :list="element.card" tag="ul" group="list" class="list-group kanban-cards">
              <template v-for="element in element.empty" #item="{ element }">
                <div class="list-group-item empty-card">
                  {{ element.cardName }}
                </div>
              </template>
            </draggable>
          </template>
        </div>
      </template>
    </draggable>
  </div>

  <button @click="addListInKanbanLists">add List</button>
</template>

<script setup>
import { ref } from "vue";
import draggable from 'vuedraggable'

let enabled = ref(true)
let kanbanLists = ref([
  {
    id: 0, title: "list A", card: [
      { cardName: 'cardName A-1' },
      { cardName: 'cardName A-2' },
      { cardName: 'cardName A-3' },
    ], empty: [
      { emptyName: 'empty' }
    ]
  },
  {
    id: 1, title: "list B", card: [
      { cardName: 'cardName B-1' },
      { cardName: 'cardName B-2' },
      { cardName: 'cardName B-3' },
    ], empty: [
      { emptyName: 'empty' }
    ]
  },
  {
    id: 2, title: "list C", card: [
      { cardName: 'cardName C-1' },
      { cardName: 'cardName C-2' },
      { cardName: 'cardName C-3' },
    ], empty: [
      { emptyName: 'empty' }
    ]
  },
  {
    id: 3, title: "list D", card: [
      { cardName: 'cardName D-1' },
      { cardName: 'cardName D-2' },
      { cardName: 'cardName D-3' },
    ], empty: [
      { emptyName: 'empty' }
    ]
  },
]);

const addListInKanbanLists = () => {
  const newList = {
    id: kanbanLists.value.length,
    title: 'hello',
    card: [

    ],
    empty: [
      { emptyName: 'empty' }
    ]
  }

  kanbanLists.value.push(newList)
}

const addCardInKanbanCards = (list) => {
  list.card.push({ cardName: 'New Card' });
}

</script>

<style scoped>
.kanban-lists {
  background-color: yellow;
  margin-bottom: 10px;

  display: flex;
}

.kanban-list {
  display: inline-block;
  background-color: green;
  margin-bottom: 10px;
  margin-right: 10px;
}

.kanban-cards {
  display: inline-block;
  background-color: blue;
  margin-bottom: 10px;
  margin-right: 10px;
}

.kanban-card {
  width: 100%;
  background-color: blue;
  margin-bottom: 10px;
  margin-right: 10px;
}

.ghost {
  opacity: 0.5;
  background: gray;
}
</style>
