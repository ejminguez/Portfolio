<script>
  import { onMount } from 'svelte';
  import { getProjects } from '../../services/contentful.js';
  import ProjectCard from './ProjectCard.svelte';

  let projects = $state([]);
  let loading = $state(true);

  onMount(async () => {
    projects = await getProjects('Graphic Design');
    loading = false;
  });
</script>

<div class="gallery-container animate-fade-in">
  <div class="header">
    <h1 class="title">Graphic <span class="text-gradient">Design</span></h1>
    <p class="subtitle">Crafting visual identities, layouts, and digital aesthetics.</p>
  </div>

  {#if loading}
    <div class="loader">
      <div class="spinner"></div>
    </div>
  {:else}
    <!-- Using a basic grid for design works, could be masonry with more complex css -->
    <div class="masonry-grid">
      {#each projects as project, i}
        <div class="masonry-item delay-{i * 100}">
          <ProjectCard {project} />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .gallery-container {
    padding-top: 40px;
  }

  .header {
    text-align: center;
    margin-bottom: 60px;
  }

  .title {
    font-size: 3.5rem;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 40px;
  }

  .loader {
    display: flex;
    justify-content: center;
    padding: 100px 0;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    border-top-color: var(--accent-secondary);
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2.5rem;
    }
    .masonry-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }
</style>
