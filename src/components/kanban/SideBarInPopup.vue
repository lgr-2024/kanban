<template>
  <div class="w-full px-4 py-2 md:w-48">
    <div>
      <h3 class="text-xs font-semibold text-tw-text-subtle">Add to Card</h3>
      <ul>
        <div class="flex gap-2 md:block">
          <li class="w-full font-semibold neutral-style neutral-active transition-ease ">
            <i class="fa-regular fa-user mr-1.5"></i>
            <button>Members</button>
          </li>
          <li class="w-full font-semibold neutral-style neutral-active transition-ease">
            <i class="fa-solid fa-tag  mr-1.5"></i>
            <button>Labels</button>
          </li>
        </div>
        <li class="font-semibold neutral-style neutral-active transition-ease">
          <i class="fa-regular fa-square-check mr-1.5"></i>
          <button>Checklist</button>
        </li>
        <li class="w-1/2 font-semibold neutral-style neutral-active md:w-full transition-ease">
          <i class="fa-regular fa-clock mr-1.5"></i>
          <button>Dates</button>
        </li>
        <li class="font-semibold neutral-style neutral-active transition-ease">
          <i class="fa-solid fa-paperclip mr-1.5"></i>
          <button>Attachment</button>
        </li>
        <div class="flex gap-2 md:block">
          <li class="w-full font-semibold neutral-style neutral-active transition-ease">
            <i class="fa-solid fa-laptop mr-1.5"></i>
            <button>Cover</button>
          </li>
          <li class="w-full font-semibold neutral-style neutral-active transition-ease">
            <i class="fa-solid fa-diagram-predecessor mr-1.5"></i>
            <button>Custom Fields</button>
          </li>
        </div>
      </ul>
    </div>

    <div>
      <h3 class="mt-4 text-xs font-semibold text-tw-text-subtle">Power-Ups</h3>
      <ul>
        <li class="mt-2 font-semibold transparent-style transparent-active transition-ease">
          <i class="fa-regular fa-plus mr-1.5"></i>
          <button>Add Power-Ups</button>
        </li>
      </ul>
    </div>

    <div>
      <h3 class="mt-4 text-xs font-semibold text-tw-text-subtle">Automation</h3>
      <ul>
        <li class="mt-2 font-semibold transparent-style transparent-active transition-ease">
          <i class="fa-regular fa-plus mr-1.5"></i>
          <button>Add Button</button>
        </li>
      </ul>
    </div>

    <div>
      <h3 class="mt-4 text-xs font-semibold text-tw-text-subtle">Actions</h3>
      <ul>
        <div class="flex gap-2 md:block">
          <li class="w-full font-semibold neutral-style neutral-active transition-ease">
            <i class="fa-solid fa-arrow-right mr-1.5"></i>
            <button>Move</button>
          </li>
          <li class="w-full font-semibold neutral-style neutral-active transition-ease">
            <i class="fa-regular fa-copy mr-1.5"></i>
            <button>Copy</button>
          </li>
        </div>
        <li class="font-semibold neutral-style neutral-active transition-ease">
          <i class="fa-solid fa-object-group mr-1.5"></i>
          <button>Make template</button>
        </li>
        <hr class="mt-2 h-[1px] border-0 bg-tw-border font-semibold" />
        <li v-if="!activeDelete" @click="isActiveArchive"
          class="w-1/2 font-semibold neutral-style neutral-active md:w-full transition-ease">
          <i class="fa-regular fa-file-zipper mr-1.5"></i>
          <button>Archive</button>
        </li>
        <li v-else class="flex gap-2 font-semibold md:block">
          <div class="w-full neutral-style neutral-active transition-ease" @click="isActiveArchive">
            <i class="fa-solid fa-rotate-right mr-1.5"></i>
            <button>Send to board</button>
          </div>
          <div class="w-full font-semibold danger-style transition-ease">
            <i class="fa-solid fa-minus mr-1.5"></i>
            <button>Delete</button>
          </div>
        </li>
      </ul>
      <div class="font-semibold neutral-style neutral-active transition-ease">
        <i class="fa-solid fa-share-nodes mr-1.5"></i>
        <button>Share</button>
      </div>
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