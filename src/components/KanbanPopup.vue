<template>
  <div class="flex items-center justify-center w-full h-screen bg-tw-background-overlay">
    <div class="w-1/2 max-w-3xl rounded-lg max-h-max bg-tw-background-list">
      <div class="py-2 pr-12 pl-14">
        <div>
          <h2 v-if="showTitle" @click="isShowTitle">{{ title }}</h2>
          <textarea v-else @keydown.esc="isShowTitle" class="textarea-style">{{ title }}</textarea>
          <!-- <input class="input-style" /> -->
        </div>
        <div>
          <p>in list
            <a href="#" class="underline">{{ moveCard }}</a>
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="flex-1 pb-2 pl-4 pr-2">
          <div>
            <h3 class="text-xs text-gray-500">Notifications</h3>
            <button @click='isShowWatch' class="neutral-style">{{ showWatch }}</button>
          </div>
          <div>
            <h3 class='mt-4 text-base font-semibold'>Description</h3>
            <div class="neutral-style">
              <a href="#">Add a more detailed description...</a>
            </div>
          </div>
          <div>
            <h3 class='mt-4 text-base font-semibold'>Activity</h3>
            <div class="input-style">
              <a href="#">Write a comment...</a>
            </div>
          </div>
        </div>
        <div class="w-48 pb-2 pl-2 pr-4">
          <div>
            <h3 class="text-xs text-gray-500">Add to Card</h3>
            <ul>
              <li class="neutral-style">
                <button>Members</button>
              </li>
              <li class="neutral-style">
                <button>Labels</button>
              </li>
              <li class="neutral-style">
                <button>Checklist</button>
              </li>
              <li class="neutral-style">
                <button>Dates</button>
              </li>
              <li class="neutral-style">
                <button>Attachment</button>
              </li>
              <li class="neutral-style">
                <button>Cover</button>
              </li>
              <li class="neutral-style">
                <button>Custom Fields</button>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mt-4 text-xs text-gray-500">Power-Ups</h3>
            <ul>
              <li class="neutral-style">
                <button>Add Power-Ups</button>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mt-4 text-xs text-gray-500">Automation</h3>
            <ul>
              <li class="neutral-style">
                <button>Add Button</button>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mt-4 text-xs text-gray-500">Actions</h3>
            <ul>
              <li class="neutral-style">
                <button>Move</button>
              </li>
              <li class="neutral-style">
                <button>Copy</button>
              </li>
              <li class="neutral-style">
                <button>Make template</button>
              </li>
              <hr />
              <li v-if="showArchive" @click="isShowArchive" class="neutral-style">
                <button>Archive</button>
              </li>
              <li v-else>
                <div class="neutral-style" @click="isShowArchive">
                  <button>Send to board</button>
                </div>
                <div class="danger-style">
                  <button>Delete</button>
                </div>
              </li>
              <li class="neutral-style">Share</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

let showTitle = ref(true);
let title = ref('TITLE')
let moveCard = ref('To do')
let showWatch = ref('Watch')
let showArchive = ref(true);

const isShowWatch = () => {
  if (showWatch.value === 'Watch') {
    showWatch.value = 'Watching'
  } else if (showWatch.value === 'Watching') {
    showWatch.value = 'Watch'
  }
}
const isShowArchive = () => {
  showArchive.value = !showArchive.value
}
const isShowTitle = () => {
  showTitle.value = !showTitle.value
}

</script>