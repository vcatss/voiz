<template>
    <div class="relative w-full">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
        <LayoutNavBar></LayoutNavBar>
        <Nuxt class="pb-32 px-4"/>
        <client-only>
            <LayoutPlayer ref="player" v-if="$store.state.localStorage.playList.length>0"  class="fixed bottom-0 left-0 z-20"/>
        </client-only>
    </div>
</template>

<script>
export default {
    name: "Layout"
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all";

$primary: #2563eb;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

$custom-colors: null !default;
$custom-shades: null !default;


$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;


@import "~bulma";
@import "~buefy/src/scss/buefy";


</style>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, var(--tw-text-opacity));
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
