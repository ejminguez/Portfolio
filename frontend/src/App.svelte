<script>
  import { onMount } from 'svelte';
  import Header from './lib/components/Header.svelte';
  import SoftwareGallery from './lib/components/SoftwareGallery.svelte';
  import DesignGallery from './lib/components/DesignGallery.svelte';

  let currentRoute = $state('software'); // default

  function updateRoute() {
    const hash = window.location.hash.replace('#', '') || 'software';
    if (['software', 'design'].includes(hash)) {
      currentRoute = hash;
    }
  }

  onMount(() => {
    updateRoute();
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  });
</script>

<div class="app-layout">
  <Header {currentRoute} />
  
  <main>
    {#if currentRoute === 'software'}
      <SoftwareGallery />
    {:else if currentRoute === 'design'}
      <DesignGallery />
    {/if}
  </main>
</div>
