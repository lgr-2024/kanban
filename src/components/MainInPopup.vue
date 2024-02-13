<template>
  <div class="flex-1 px-4 py-2 md:pb-2 md:pl-4 md:pr-2">
    <!-- Notification -->
    <div>
      <div class="m-2 md:pt-2 md:ml-10">
        <h3 class="text-xs font-semibold text-tw-text-subtle">Notifications</h3>
        <button @click="isActiveWatching" class="font-semibold neutral-style neutral-active transition-ease">
          {{ activeWatching }}
        </button>
      </div>
    </div>

    <!-- Description -->
    <div class="relative">
      <h3 class="relative py-2 mt-4 ml-10 text-base font-semibold text-tw-text-subtle transition-ease">
        <div class="absolute left-[-34px]">
          <i class="fa-solid fa-align-justify"></i>
        </div>
        Description
      </h3>
      <div class="ml-10">
        <DescriptionEditor />
      </div>
    </div>

    <!-- Activity -->
    <div>
      <h3 class="relative flex items-center justify-between py-2 mt-4 ml-10 text-sm font-semibold">
        <div class="absolute left-[-34px]">
          <i class="fa-solid fa-list"></i>
        </div>
        <span>Activity</span>
        <button class="py-1.5 px-3 neutral-style neutral-active transition-ease" @click="isActiveHideDetails">
          {{ activeDetailsName }}
        </button>
      </h3>
      <div class="relative ml-10">
        <div class="absolute left-[-40px]">
          <UserIcon />
        </div>
        <CommentEditor />
      </div>
      <ul v-if="activeDetailsName !== 'Show details'">
        <li v-for="DetailsContent in DetailsList" class="relative py-2 ml-10">
          <div class="absolute left-[-40px]">
            <UserIcon />
          </div>
          <div v-if="DetailsContent.activityType === 'attachment'">
            <div>
              <span class="font-semibold">{{ DetailsContent.name }}</span>
              {{ DetailsContent.action }}
            </div>
            <span class="text-xs">{{ DetailsContent.date }}</span>
          </div>
          <div v-else-if="DetailsContent.activityType === 'comment' && !activeEditing">
            <div>
              <span class="font-semibold">{{ DetailsContent.name }}</span>
              {{ DetailsContent.date }}
            </div>
            <div class="py-2">
              <div
                class="text-sm leading-[28px] border-none text-tw-text-subtlest input-textarea-style  border-white bg-tw-background-input cursor-default shadow-raised transition-ease">
                {{ DetailsContent.action }}
              </div>
            </div>
            <div class="flex">
              <div class="flex items-center mr-2">
                <span class="mr-2">
                  <i class="fa-regular fa-face-smile"></i>
                </span>
                <div>&#183;</div>
              </div>
              <div class="flex items-center gap-1">
                <button @click="checkActiveEditing" class="underline">Edit</button>
                <div>&#183;</div>
                <button class="underline">Delete</button>
              </div>
            </div>
          </div>
          <div v-else-if="DetailsContent.activityType === 'comment' && activeEditing" @keydown.esc="checkActiveEditing">
            <CommentEditor @handleSaveButton="checkActiveEditing" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DescriptionEditor from './DescriptionEditor.vue'
import CommentEditor from './CommentEditor.vue'
import UserIcon from "./UserIcon.vue";

let activeWatching = ref("Watch");
let activeDetailsName = ref("Show details");
let DetailsList = ref([
  {
    name: '임경락',
    activityType: 'comment',  // 'attachment', 'comment'
    action: 'hello world',
    date: "5 hours ago"
  },
  {
    name: "임경락",
    activityType: 'attachment', // 'attachment', 'comment'
    action: "added this card to Doing",
    date: "Feb 3 at 3:28 PM",
  },
]);
let focusCommentEditor = ref(false);
let activeEditing = ref(false)

const isActiveWatching = () => {
  if (activeWatching.value === "Watch") {
    activeWatching.value = "Watching";
  } else if (activeWatching.value === "Watching") {
    activeWatching.value = "Watch";
  }
};
const isActiveHideDetails = () => {
  const defaultViewName = activeDetailsName.value === "Show details";

  if (defaultViewName) {
    activeDetailsName.value = "Hide details";
  } else {
    activeDetailsName.value = "Show details";
  }
};

const checkActiveEditing = () => {
  activeEditing.value = !activeEditing.value
}
const isFocusCommentEditor = () => {
  focusCommentEditor.value = !focusCommentEditor.value;
};
</script>

<style lang="scss" scoped></style>
