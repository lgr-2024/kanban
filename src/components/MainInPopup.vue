<template>
  <div class="flex-1 px-4 py-2 md:pb-2 md:pl-4 md:pr-2">
    <div>
      <div class="m-2 md:pt-2 md:ml-10">
        <h3 class="text-xs font-semibold text-tw-text-subtle">
          <div class="absolute left-[-40px]">
            <i class="fa-solid fa-table"></i>
          </div>
          Notifications
        </h3>
        <button @click='isActiveWatching' class="font-semibold neutral-style neutral-active">{{ activeWatching }}</button>
      </div>
    </div>
    <div>
      <h3 class='relative py-2 mt-4 ml-10 text-base font-semibold text-tw-text-subtle'>
        <div class="absolute left-[-34px]">
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
      <h3 class='relative flex items-center justify-between py-2 mt-4 ml-10 text-base font-semibold text-tw-text-subtle'>
        <div class="absolute left-[-34px]">
          <i class="fa-solid fa-list"></i>
        </div>
        <span>Activity</span>
        <button class="py-1.5 px-3 neutral-active" @click="isActiveHideDetails">{{ activeDetailsName }}</button>
      </h3>
      <div class="relative ml-10">
        <div class="absolute left-[-40px]">
          <UserIcon />
        </div>
        <div>
          <input placeholder="Write a comment..."
            class="mb-2 border-none text-tw-text-subtlest input-textarea-style input-textarea-active shadow-raised transition-ease" />
        </div>
        <!-- <CommentEditor /> -->
      </div>
      <ul v-if="activeDetailsName !== 'Show details'">
        <li v-for="DetailsContent in DetailsList" class="relative py-2 ml-10">
          <div class="absolute left-[-40px]">
            <UserIcon />
          </div>
          <div>
            <span class="font-semibold">{{ DetailsContent.name }}</span>
            {{ DetailsContent.action }}
          </div>
          <span class="text-xs">{{ DetailsContent.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import CommentEditor from './CommentEditor.vue'
import UserIcon from './UserIcon.vue'

let activeWatching = ref('Watch')
let activeDescriptionEditing = ref(false)
let activeDetailsName = ref('Show details')
let DetailsList = ref([
  {
    name: '임경락',
    action: 'sent this card to the board',
    date: '5 hours ago'
  },
  {
    name: '임경락',
    action: 'sent this card to the board',
    date: '5 hours ago'
  },
  {
    name: '임경락',
    action: 'sent this card to the board',
    date: '5 hours ago'
  },
  {
    name: '임경락',
    action: 'sent this card to the board',
    date: '5 hours ago'
  },
  {
    name: '임경락',
    action: 'sent this card to the board',
    date: '5 hours ago'
  },
  {
    name: '임경락',
    action: 'sent this card to the board',
    date: '5 hours ago'
  },
  {
    name: '임경락',
    action: 'sent this card to the board',
    date: '5 hours ago'
  },
])
// let DetailsContent = ref({
//   name: '임경락',
//   action: 'sent this card to the board',
//   date: '5 hours ago'
// })
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