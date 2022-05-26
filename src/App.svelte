<script>
  export let name;
  export let surname;
  export let nickname;
  export let text;
  export let operation;
  export let clock;
  export let date;
  export let remaining_battery;
  export let unlock_key;
</script>

<main>
  <div id="phone">
    <div id="off-switch" />
    <div id="volume-switch-top" />
    <div id="volume-switch-bottom" />
    <div id="mute-switch" />
    <div id="inner-phone">
      <div id="camera-circle">
        <div id="camera-left" />
        <div id="camera-flash" />
      </div>
      <div id="operation">{operation}</div>
      <div id="battery">
        <img src="/img/battery.png" alt="Pil" />
      </div>
      <div id="lock">
        <img src="/img/lock.png" alt="Kilit" />
      </div>
      <div id="clock">{clock}</div>
      <div id="date">{date}</div>
      <div id="remaining-battery">{remaining_battery}</div>
      <div id="unlock-key">{unlock_key}</div>
    </div>
  </div>
  <div id="text">{name} "{nickname}" {surname}</div>
  <div id="text">{text}</div>
</main>

<style>
  * {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
  }
  #phone {
    background-color: rgb(0, 0, 0);
    margin: 25px auto;
    width: 310px;
    max-width: 310px;
    height: 600px;
    max-height: 600px;
    border-radius: 35px;
    padding: 15px 0 0 15px;
  }
  /* Telefon Kapatma - Ses açma tuşları */
  #off-switch {
    background-color: rgb(90, 90, 90);
    margin: 100px 0 0 294px;
    border-radius: 20px;
    position: absolute;
    width: 3px;
    height: 60px;
  }
  #volume-switch-top {
    background-color: rgb(90, 90, 90);
    margin: 100px 0 0 -18px;
    border-radius: 20px;
    position: absolute;
    width: 3px;
    height: 40px;
  }
  #volume-switch-bottom {
    background-color: rgb(90, 90, 90);
    margin: 155px 0 0 -18px;
    border-radius: 20px;
    position: absolute;
    width: 3px;
    height: 40px;
  }
  #mute-switch {
    background-color: rgb(90, 90, 90);
    margin: 45px 0 0 -17px;
    border-radius: 20px;
    position: absolute;
    width: 2px;
    height: 25px;
  }
  /* ---------------------------------- */
  #inner-phone {
    background-image: url(/img/backgraund.jpg);
    background-size: cover;
    border-radius: 25px;
    width: 280px;
    height: 570px;
  }
  /* Kamera */
  #camera-circle {
    background-color: rgb(0, 0, 0);
    border-radius: 0 0 15px 15px;
    width: 150px;
    height: 34px;
    position: relative;
    top: -15px;
    margin-left: 70px;
  }
  #camera-left {
    background-color: black;
    box-shadow: 0 0 2px 2px rgb(70, 70, 70);
    border-radius: 10px;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 18px;
    left: 95px;
  }
  #camera-flash {
    background-color: rgb(0, 0, 0);
    box-shadow: 0 0 2px 2px rgb(70, 70, 70);
    border-radius: 15%;
    width: 40px;
    height: 5px;
    position: relative;
    top: 19.5px;
    left: 35px;
  }
  /* --------------- */
  /* Kilit Ekranı */
  #operation {
    color: white;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 9px;
    position: relative;
    top: -29px;
    left: 15px;
  }
  #battery {
    position: relative;
    left: 237.5px;
    top: -43px;
  }
  #lock {
    position: relative;
    text-align: center;
    top: -35px;
  }
  #clock {
    color: white;
    text-align: center;
    font-size: 52px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  #date {
    color: white;
    text-align: center;
    font-size: 14px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  #remaining-battery {
    color: white;
    text-align: center;
    font-size: 14px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  #unlock-key {
    color: white;
    text-align: center;
    position: relative;
    top: 320px;
    left: 50px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    width: 180px;
  }
  /* ------------ */
  /* Yazı */
  #text {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: small;
    text-align: center;
    position: relative;
    top: -10px;
  }
  /* ---- */
</style>
