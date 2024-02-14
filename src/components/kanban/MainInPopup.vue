<template>
  <main class="flex-1 px-4 py-2 md:pb-2 md:pl-4 md:pr-2">
    <!-- Notification Area -->
    <div>
      <div class="m-2 md:pt-2 md:ml-10">
        <h3 class="text-xs font-semibold text-tw-text-subtle">Notification</h3>
        <button @click="isActiveWatchingMethod" class="font-semibold neutral-style neutral-active transition-ease">
          {{ store.state.kanbanLists.lists[store.state.listId].cards[store.state.cardId].notification }}
        </button>
      </div>
    </div>

    <!-- Description Area -->
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

    <!-- Activity Area -->
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
        <li v-for="activity in store.state.kanbanLists.lists[store.state.listId].cards[store.state.cardId].activities"
          :key="activity.activityId" class="relative py-2 ml-10">
          <div class="absolute left-[-40px]">
            <UserIcon />
          </div>
          <div v-if="activity.activityType === 'attachment'">
            <div>
              <span class="font-semibold">{{ activity.name }}</span>
              {{ activity.action }}
            </div>
            <span class="text-xs">{{ activity.date }}</span>
          </div>
          <div v-else-if="activity.activityType === 'comment' && !activeEditing">
            <div>
              <span class="font-semibold">{{ activity.name }}</span>
              {{ activity.date }}
            </div>
            <div class="py-2">
              <div
                class="text-sm leading-[28px] border-none text-tw-text-subtlest input-textarea-style  border-white bg-tw-background-input cursor-default shadow-raised transition-ease">
                {{ activity.action }}
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
          <div v-else-if="activity.activityType === 'comment' && activeEditing" @keydown.esc="checkActiveEditing">
            <CommentEditor @handleSaveButton="checkActiveEditing" />
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import DescriptionEditor from '@components/kanban/DescriptionEditor.vue'
import UserIcon from '@components/kanban/UserIcon.vue'
import CommentEditor from '@components/kanban/CommentEditor.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

const store = useStore()

let activeEditing = ref(false)
let activeDetailsName = ref("Show details");
let detailsName = {
  showDetails: 'Show details',
  hideDetails: 'Hide details'
}
const activityObject = {
  activityId: -1,
  profile: "",
  memberName: "",
  activityType: 'comment',
  action: "",
  date: "",
}

const isActiveWatchingMethod = () => {
  store.commit('isActiveWatching')
};

const isActiveHideDetails = () => {
  const defaultViewName = activeDetailsName.value === detailsName.showDetails;

  if (defaultViewName) {
    activeDetailsName.value = detailsName.hideDetails;
  } else {
    activeDetailsName.value = detailsName.showDetails;
  }
};

const checkActiveEditing = () => {
  activeEditing.value = !activeEditing.value
}
</script>