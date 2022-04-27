import { reactive } from "vue";

export default {
  debug: true,

  state: reactive({
    message: "Hello!",
  }),

  setMessageAction(newValue: any) {
    if (this.debug) {
      console.log("setMessageAction triggered with", newValue);
    }
    this.state.message = newValue;
  },

  clearMessageAction() {
    if (this.debug) {
      console.log("clearMessageAction triggered");
    }
    this.state.message = "";
  },
};
