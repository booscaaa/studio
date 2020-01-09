<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "viga";
  src: url("/fonts/Viga-Regular.ttf");
}

#app {
  font-family: "viga", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  overflow-y: hidden;
  color: #2c3e50;
}

#app::-webkit-scrollbar {
  display: none;
}
</style>
