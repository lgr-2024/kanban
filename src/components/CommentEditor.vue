<template>
  <div v-if="activeDescriptionEditing === 'empty'" @click="isActiveDescriptionEditing('editing')"
    class="neutral-style neutral-active transition-ease">
    <a href="#" class="block font-medium">{{ viewDescription }}</a>
  </div>
  <div v-else-if="activeDescriptionEditing === 'update'" @click="isActiveDescriptionEditing('editing')">
    <a href="#" class="block font-medium">{{ viewDescription }}</a>
  </div>
  <div v-else-if="activeDescriptionEditing === 'editing'">
    <div class="relative">
      <div class="bg-white border-2 hover:border-tw-border-focused">
        <div class="flex justify-between p-2 bg-green-300">
          <div class="flex">
            <!-- 확인 -->
            <span class="flex">
              <div class="flex transparent-style transparent-active transition-ease">
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-a"></i></span>
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-chevron-down"></i></span>
              </div>
              <span class="bg-tw-border w-[1px] h-6  leading-6 mx-2"></span>
            </span>
            <span class="flex">
              <div class="flex">
                <span class="text-center transparent-style transparent-active transition-ease"><i
                    class="w-6 h-6 leading-6 fa-solid fa-b"></i></span>
                <span class="text-center transparent-style transparent-active transition-ease"><i
                    class="w-6 h-6 leading-6 fa-solid fa-italic"></i></span>
                <span class="text-center transparent-style transparent-active transition-ease"><i
                    class="w-6 h-6 leading-6 fa-solid fa-ellipsis"></i></span>
              </div>
              <span class="bg-tw-border w-[1px] h-6 leading-6 mx-2"></span>
            </span>
            <span class="flex">
              <div class="flex transparent-style transparent-active transition-ease">
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-list"></i></span>
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-chevron-down"></i></span>
              </div>
              <span class="bg-tw-border w-[1px] h-6  leading-6 mx-2"></span>
            </span>
            <span class="flex">
              <div class="flex transparent-style transparent-active transition-ease">
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-plus"></i></span>
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-chevron-down"></i></span>
              </div>
            </span>
          </div>
          <div class="flex gap-2">
            <span class="transparent-style transparent-active transition-ease"><i
                class="w-6 h-6 leading-6 fa-solid fa-paperclip"></i></span>
            <span class="transparent-style transparent-active transition-ease"><i
                class="w-6 h-6 leading-6 fa-solid fa-question"></i></span>
          </div>
        </div>
        <div>
          <textarea v-model="descriptionValue"
            class="w-[339px] md:w-[508px] m-5 cursor-pointer textarea-resize-none input-textarea-active focus:border-none"
            placeholder="WRITE A COMMENT..." />
        </div>
      </div>
      <div class="flex flex-row mt-2">
        <button @click="updateDescription"
          class="mr-1.5 nch-button nch-button--primary nch-button-active  transition-ease">Save</button>
        <button @click="deleteDescription('empty')"
          class="transparent-style transparent-active transition-ease">Cancel</button>
      </div>
      <a href="#" class="absolute right-0 bottom-[0.75px] neutral-style neutral-active font-semibold transition-ease">
        <span>Formatting help</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let activeDescriptionEditing = ref('empty');
let viewDescription = ref('Add a more detailed description...')
let descriptionValue = ref('')

const isActiveDescriptionEditing = (edtingState) => {
  activeDescriptionEditing.value = edtingState
  console.log(activeDescriptionEditing.value)
};

const updateDescription = () => {
  if (descriptionValue.value.trim() !== '') {
    viewDescription.value = descriptionValue.value
  }
  activeDescriptionEditing.value = 'update';
}

const deleteDescription = () => {
  if (descriptionValue.value.trim() !== '') {
    viewDescription.value = 'Add a more detailed description...'
    descriptionValue.value = ''
  }
  activeDescriptionEditing.value = 'empty';
}
</script>