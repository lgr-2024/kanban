<template>
  <div v-if="activeDescriptionEditing === 'empty'" @click="isActiveDescriptionEditing('editing')">
    <input placeholder="Write a comment..."
      class="mb-2 border-none text-tw-text-subtlest input-textarea-style input-textarea-active shadow-raised transition-ease" />
  </div>
  <div v-else-if="activeDescriptionEditing === 'update'" @click="isActiveDescriptionEditing('editing')">
    <a href="#" class="block">{{ viewDescription }}</a>
    <a href="#" class="absolute top-0 right-0 mt-0 font-semibold neutral-style neutral-active transition-ease">
      <span>Edit</span>
    </a>
  </div>
  <div v-else-if="activeDescriptionEditing === 'editing'" class="md:min-w-[512px]">
    <div class="relative">
      <div class="bg-white border-2 hover:border-tw-border-focused">
        <div class="flex justify-between p-2">
          <div class="flex">
            <!-- Edit Text Styles Area -->
            <span class="flex">
              <div class="flex transparent-style transparent-active transition-ease">
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-a"></i></span>
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-chevron-down"></i></span>
              </div>
              <span class="bg-tw-border w-[1px] h-6  leading-6 mx-2"></span>
            </span>
            <!-- Edit Bold Italic More formatting Area -->
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
            <!-- Edit Lists Area -->
            <span class="flex">
              <div class="flex transparent-style transparent-active transition-ease">
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-list"></i></span>
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-chevron-down"></i></span>
              </div>
              <span class="bg-tw-border w-[1px] h-6  leading-6 mx-2"></span>
            </span>
            <!-- Edit Link Image Insert Area -->
            <span class="flex">
              <div class="flex transparent-style transparent-active transition-ease">
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-plus"></i></span>
                <span class="text-center"><i class="w-6 h-6 leading-6 fa-solid fa-chevron-down"></i></span>
              </div>
            </span>
          </div>
          <!-- Edit Etc Area -->
          <div class="flex gap-2">
            <span class="text-center transparent-style transparent-active transition-ease"><i
                class="w-6 h-6 leading-6 fa-solid fa-paperclip"></i></span>
            <span class="text-center transparent-style transparent-active transition-ease"><i
                class="w-6 h-6 leading-6 fa-solid fa-question"></i></span>
          </div>
        </div>
        <div>
          <textarea v-model="commentValue" @input="checkTextarea" @keydown.esc="deleteDescription"
            class="box-border w-full p-5 border-none cursor-pointer input-textarea-border-none-style textarea-resize-none input-textarea-active"
            placeholder="WRITE A COMMENT..." />
        </div>
      </div>
      <div class="flex flex-row mt-2">
        <button @click="updateDescription, handleSaveButton"
          :class="{ 'disabled-button-style nch-button': !activeSaveButton, 'mr-1.5 nch-button nch-button--primary nch-button-active transition-ease': activeSaveButton }"
          :disabled="!activeSaveButton" class="">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
let activeDescriptionEditing = ref('empty');
let viewDescription = ref('Add a more detailed description...')
let commentValue = ref('')
let activeSaveButton = ref(false)

const isActiveDescriptionEditing = (edtingState) => {
  activeDescriptionEditing.value = edtingState
  console.log(activeDescriptionEditing.value)
};

const updateDescription = () => {
  if (commentValue.value.trim() !== '') {
    viewDescription.value = commentValue.value
  }
  activeDescriptionEditing.value = 'update';
}

const emit = defineEmits(['handleSaveButton'])
const handleSaveButton = () => {
  emit('handleSaveButton')
}

const checkTextarea = () => {
  console.log(commentValue.value.trim())
  activeSaveButton = commentValue.value.trim() !== ''
}

const deleteDescription = () => {
  if (commentValue.value.trim() !== '') {
    viewDescription.value = 'Add a more detailed description...'
    commentValue.value = ''
  }
  activeDescriptionEditing.value = 'empty';
}
</script>