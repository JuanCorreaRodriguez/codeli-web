/// <reference lib="webworker" />
import {Meta} from "@angular/platform-browser";
import {inject} from "@angular/core";

addEventListener('message', ({ data }) => {
  // const response = `worker response to ${data}`;
  // postMessage(response);
  console.log("Kistener message")
  if(data == "meta"){
    // const w = new works()
    work()
  }
});

const work = async () => {
  // const localStorageData = self.localStorage.getItem('codeli-theme');
  console.log("localSTORAGE")
}
