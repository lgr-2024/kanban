<template>
  <div class="w-full pb-2 pl-2 pr-4 md:w-48">
    <div>
      <h3 class="text-xs font-semibold text-tw-text-subtle">Add to Card</h3>
      <ul>
        <div class="flex gap-2 md:block">
          <li class="w-full font-semibold neutral-style neutral-active">
            <button>Members</button>
          </li>
          <li class="w-full font-semibold neutral-style neutral-active">
            <button>Labels</button>
          </li>
        </div>
        <li class="font-semibold neutral-style neutral-active">
          <button>Checklist</button>
        </li>
        <li class="w-1/2 font-semibold neutral-style neutral-active md:w-full">
          <button>Dates</button>
        </li>
        <li class="font-semibold neutral-style neutral-active">
          <button>Attachment</button>
        </li>
        <div class="flex gap-2 md:block">
          <li class="w-full font-semibold neutral-style neutral-active">
            <button>Cover</button>
          </li>
          <li class="w-full font-semibold neutral-style neutral-active">
            <button>Custom Fields</button>
          </li>
        </div>
      </ul>
    </div>
    <div>
      <h3 class="mt-4 text-xs font-semibold text-tw-text-subtle">Power-Ups</h3>
      <ul>
        <li class="font-semibold neutral-style neutral-active">
          <button>Add Power-Ups</button>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="mt-4 text-xs font-semibold text-tw-text-subtle">Automation</h3>
      <ul>
        <li class="font-semibold neutral-style neutral-active">
          <button>Add Button</button>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="mt-4 text-xs font-semibold text-tw-text-subtle">Actions</h3>
      <ul>
        <div class="flex gap-2 md:block">
          <li class="w-full font-semibold neutral-style neutral-active">
            <button>Move</button>
          </li>
          <li class="w-full font-semibold neutral-style neutral-active">
            <button>Copy</button>
          </li>
        </div>
        <li class="font-semibold neutral-style neutral-active">
          <button>Make template</button>
        </li>
        <hr class="mt-2 h-[1px] border-0 bg-tw-border font-semibold" />
        <li v-if="!activeDelete" @click="isActiveArchive"
          class="w-1/2 font-semibold neutral-style neutral-active md:w-full">
          <button>Archive</button>
        </li>
        <li v-else class="flex gap-2 font-semibold md:block">
          <div class="w-full neutral-style neutral-active" @click="isActiveArchive">
            <button>Send to board</button>
          </div>
          <div class="w-full font-semibold danger-style">
            <button>Delete</button>
          </div>
        </li>
      </ul>
      <div class="font-semibold neutral-style neutral-active">Share</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let activeDelete = ref(false)

const isActiveArchive = () => {
  activeDelete.value = !activeDelete.value
}
</script>