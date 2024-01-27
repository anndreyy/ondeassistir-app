<template>
  <div id="Loading">
    <div class="loader bar">
      <div class="cl1"></div>
      <div class="cl3"></div>
      <div class="cl2"></div>
      <div class="c3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data: () => ({}),
  components: {},
};
</script>

<style lang="scss">


 
.cl1 {
  background-color: #941b85;
}
.cl2 {
  background-color: #6e1f82;
}
.cl3 {
  background-color: #48237f;
}

.c3 {
  background-color: #22277c;
}

.loader {
  position: fixed;
  margin: 0 auto 3rem auto;
  overflow: hidden;
  z-index: 4;
}

.loader > div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

/* BAR */
.bar {
  width: 100%;
  height: 0.5rem;
  top: 0;
  left: 0;
}

.loader.bar > div {
  animation: loading-bar 2s infinite backwards ease-out;
}

.bar > div {
  transform: scaleX(1);
}

.loader.bar div:nth-child(1) {
  animation-delay: -1.5s;
}
.loader.bar div:nth-child(2) {
  animation-delay: -1s;
}
.loader.bar div:nth-child(3) {
  animation-delay: -0.5s;
}
.loader.bar div:nth-child(4) {
  animation-delay: 0s;
}

@keyframes loading-bar {
  0% {
    transform: scaleX(0);
    z-index: 15;
  }
  22% {
    transform: scaleX(0);
    z-index: 15;
  }
  50% {
    transform: scaleX(1);
  }
  90% {
    transform: scaleX(1);
    z-index: 1;
  }
  100% {
    transform: scaleX(1);
    z-index: 0;
  }
}

/* CIRCLE */
.circle {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  transform: scale(1);
  top: 3rem;
  right: 3rem;
  margin: auto;
}

.circle > div {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

.loader.circle > div {
  animation: loading-circle 2s infinite backwards ease-out;
}

.loader.circle div:nth-child(1) {
  animation-delay: -1.5s;
  transform: translateX(-500%);
}
.loader.circle div:nth-child(2) {
  animation-delay: -1s;
  transform: translateY(500%);
}
.loader.circle div:nth-child(3) {
  animation-delay: -0.5s;
  transform: translateX(500%);
}
.loader.circle div:nth-child(4) {
  animation-delay: 0s;
  transform: translateY(-500%);
}

@keyframes loading-circle {
  0% {
    z-index: 10;
  }
  75% {
    transform: translateX(0);
    z-index: 1;
  }

  100% {
    transform: translateX(0);
    z-index: 0;
  }
}
</style>