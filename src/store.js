import { createStore } from "vuex";

const kanbanLists = {
  lists: [
    // {
    //   id: 0, title: "list A", activeCardPopup: false, cards: [
    //     { cardId: 0, cardTitle: 'cardName A-1' },
    //     { cardId: 1, cardTitle: 'cardName A-2' },
    //     { cardId: 2, cardTitle: 'cardName A-3' },
    //   ], empty: [
    //     { emptyName: 'empty' }
    //   ]
    // },
    // {
    //   id: 1, title: "list B", activeCardPopup: false, cards: [
    //     { cardId: 0, cardTitle: 'cardName B-1' },
    //     { cardId: 1, cardTitle: 'cardName B-2' },
    //     { cardId: 2, cardTitle: 'cardName B-3' },
    //   ], empty: [
    //     { emptyName: 'empty' }
    //   ]
    // },
  ],
  empty: [{ emptyName: "" }],
};

const isActiveCardPopup = false;
const listId = -1;
const cardId = -1;

const store = createStore({
  state() {
    return {
      kanbanLists: { ...kanbanLists },
      isActiveCardPopup,
      listId,
      cardId,
    };
  },
  mutations: {
    createListInLists(state, newList) {
      state.kanbanLists.lists.push(newList);
    },
    createCardInCards(state, { index, newCard }) {
      console.log(index);
      state.kanbanLists.lists[index].cards.push(newCard);
    },
    openCardPopup(state, { listId, cardId }) {
      state.listId = listId;
      state.cardId = cardId;
      state.isActiveCardPopup = !state.isActiveCardPopup;
    },
    updateListInKanbanLists(state, { index, listTitle }) {
      state.kanbanLists.lists[index].title = listTitle;
    },
    // MainInPopup Component
    isActiveWatching(state) {
      let isWatch =
        state.kanbanLists.lists[state.listId].cards[state.cardId].notification;

      if (isWatch === "Watch") {
        state.kanbanLists.lists[state.listId].cards[state.cardId].notification =
          "Watching";
      } else if (isWatch === "Watching") {
        state.kanbanLists.lists[state.listId].cards[state.cardId].notification =
          "Watch";
      }
    },
    updateDescription(state, descriptionValue) {
      state.kanbanLists.lists[state.listId].cards[state.cardId].description =
        descriptionValue;
    },
  },
});

export default store;
