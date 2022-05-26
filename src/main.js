import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    // name: "Buğrahan",
    // surname: "Yavuzdoğan",
    // nickname: "BQRDEV",
    // text: "Mobile UI Design",
    operation: "vodefone TR",
    clock: "01:07",
    date: "11 Mart Cuma",
    remaining_battery: "%98",
    unlock_key: "Kilidi açmak için yukarıya doğru kaydırın",
  },
});

export default app;
