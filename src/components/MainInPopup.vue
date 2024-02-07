<template>
  <div class="flex-1 pb-2 pl-4 pr-2">
    <div>
      <h3 class="text-xs font-semibold text-tw-text-subtle">
        <div class="absolute left-[-40px]">
          <i class="fa-solid fa-table"></i>
        </div>
        Notifications
      </h3>
      <button @click='isActiveWatching' class="neutral-style neutral-active">{{ activeWatching }}</button>
    </div>
    <div>
      <h3 class='relative py-2 mt-4 ml-10 text-base font-semibold text-tw-text-subtle'>
        <div class="absolute left-[-40px]">
          <i class="fa-solid fa-align-justify"></i>
        </div>
        Description
      </h3>
      <div class="ml-10 neutral-style neutral-active">
        <a v-if="!activeDescriptionEditing" href="#" @click="isActiveDescriptionEditing" class="font-medium">Add a more
          detailed
          description...</a>
      </div>
    </div>
    <div>
      <h3 class='flex items-center justify-between py-2 mt-4 ml-10 text-base font-semibold text-tw-text-subtle'>
        <span>Activity</span>
        <button class="py-1.5 px-3 neutral-active" @click="isActiveHideDetails">{{ activeDetailsName }}</button>
      </h3>
      <div class="relative ml-10">
        <div class="absolute left-[-40px]">
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-tw-icon-accent-orange">
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
        <div>
          <input placeholder="Write a comment..."
            class="mb-2 border-none text-tw-text-subtlest input-textarea-style input-textarea-active shadow-raised transition-ease" />
        </div>
        <!-- <CommentEditor /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import CommentEditor from './CommentEditor.vue'

let activeWatching = ref('Watch')
let activeDescriptionEditing = ref(false)
let activeDetailsName = ref('Show details')
let focusCommentEditor = ref(false)

const isActiveWatching = () => {
  if (activeWatching.value === 'Watch') {
    activeWatching.value = 'Watching'
  } else if (activeWatching.value === 'Watching') {
    activeWatching.value = 'Watch'
  }
}
const isActiveDescriptionEditing = () => {

}
const isActiveHideDetails = () => {
  const defaultViewName = activeDetailsName.value === 'Show details'

  if (defaultViewName) {
    activeDetailsName.value = 'Hide details'
  } else {
    activeDetailsName.value = 'Show details'
  }
}
const isFocusCommentEditor = () => {
  focusCommentEditor.value = !focusCommentEditor.value
}

</script>

<style lang="scss" scoped></style>