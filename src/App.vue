<template>
  <nav>
    <span>
      <router-link to="/">Home</router-link>
    </span>
    <span>
      <router-link to="/about">About</router-link>
    </span>
    <span>
      <router-link to="/projects">Projects</router-link>
    </span>
    <span>
      <router-link to="/resume">Resume</router-link>
    </span>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

span {
  margin-left: 10px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
