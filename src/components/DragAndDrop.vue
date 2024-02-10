<template>
  <ol>
    <li
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
      ref="kanbanList"
      class="kanban-list">
      <span
        v-for="item in getList(1)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item, item.id)"
        @dragend="endDrag($event)"
        class="kanban-item">
        {{ item.title }}
      </span>
    </li>
    <li
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
      ref="kanbanList"
      class="kanban-list">
      <span
        v-for="item in getList(2)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item, item.id)"
        @dragend="endDrag($event)"
        class="kanban-item">
        {{ item.title }}
      </span>
    </li>
  </ol>
</template>

<script setup>
import { ref, onMounted } from "vue";

let items = ref([
  { id: 0, title: "Item A", list: 1 },
  { id: 1, title: "Item B", list: 1 },
  { id: 2, title: "Item C", list: 2 },
]);

let activeDragging = ref(false);
let kanbanItemsArray = [];

onMounted(() => {
  const kanbanItems = document.querySelectorAll(".kanban-list");
  kanbanItemsArray = Array.from(kanbanItems);
});

const getList = list => {
  return items.value.filter(item => item.list === list);
};

const startDrag = (event, item, index) => {
  // console.log(activeDragging.value);

  setTimeout(() => event.target.classList.add("dragging"), 0);
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("itemID", item.id);
  event.dataTransfer.setData("oldIndex", index);

  activeDragging.value = true;
};

const endDrag = event => {
  event.preventDefault();
  event.target.classList.remove("dragging");

  activeDragging.value = false;
};

const onDrop = (event, list) => {
  // const itemID = event.dataTransfer.getData("itemID");
  // const item = items.value.find(item => item.id == itemID);
  // item.list = list;

  event.preventDefault();
  const itemID = event.dataTransfer.getData("itemID");
  const oldIndex = parseInt(event.dataTransfer.getData("oldIndex"));
  const newIndex = Array.from(event.target.parentNode.children).indexOf(
    event.target
  );
  const item = items.value.find(item => item.id == itemID);
  item.list = list;

  // 아이템의 위치를 변경
  items.value.splice(oldIndex, 1);
  items.value.splice(newIndex, 0, item);
};
</script>

<style scoped>
.kanban-list {
  background-color: red;
  height: 100px;
  margin-bottom: 10px;
}
.kanban-item {
  display: inline-block;
  background-color: blue;
}
.dragging {
  background-color: black;
}
</style>
