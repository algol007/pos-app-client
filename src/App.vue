<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  $blue: #57CAD5;

  @font-face {
    font-family: "Airbnb";
    src: url("../src/assets/font/AirbnbCereal-Medium.ttf") format("truetype");
  }
  *{
    margin: 0;
    padding: 0;
  }
  html{
    overflow-y: hidden;
  }
  body {
    font-family: Airbnb;
  }
  .bg-blue{
    background-color: #57CAD5;
    color: #ffffff;
  }
  .bg-pink{
    background-color: #F24F8A;
    color: #ffffff;
  }
  .blue{
    color: #57CAD5;
  }
  .pink{
    color: #F24F8A;
  }
  .hide{
    transition: 1s;
    display: none !important;
  }
  .show{
    transition: 1s;
    display: block !important;
  }
</style>
