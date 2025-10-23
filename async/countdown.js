class CountDown{
   #div
   #seconds;

   constructor(idDiv, seconds) {
      this.#div = document.getElementById(idDiv);
      this.#seconds = seconds;
   }

   reset(){
      this.#div.innerHTML = "0";
   }

   wait(){
      return new Promise(resolve => {

       setTimeout(() => {
          resolve();
       }, 2000);
      })
   }

   async start(){
     for(let i = this.#seconds; i >= 0; i--){
         this.#div.innerText = i;
         await this.wait();
     }
     this.#div.innerText = "Ended!"
   }
}

const countdown = new CountDown("counter", 5);

document.querySelector("#btnStart").addEventListener("click", async (e) => {
   e.target.disabled = true;
   countdown.reset();
   await countdown.start();
   e.target.disabled = false;
});