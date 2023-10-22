<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchSvgIcon } from '$lib/services/svg';

  export let name: string;
  export let size: string = 'm';

  let parent: HTMLElement;

  onMount(async () => {
    const icon = await fetchSvgIcon(name);

    if (parent) parent.innerHTML = icon;
  });
</script>

<div class={`icon icon-${size}`} bind:this={parent} />

<style>
  .icon-xs {
    width: 0.5em;
    height: 0.5em;
  }

  .icon-s {
    width: 1.2em;
    height: 1.2em;
  }

  .icon-m {
    width: 1.5em;
    height: 1.5em;
  }
</style>
