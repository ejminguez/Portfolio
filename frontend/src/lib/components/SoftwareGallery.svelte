<script>
  import { onMount } from 'svelte';
  import { getProjects } from '../../services/contentful.js';
  import ProjectCard from './ProjectCard.svelte';

  let projects = $state([]);
  let loading = $state(true);

  onMount(async () => {
    projects = await getProjects('Software Dev');
    loading = false;
  });
</script>

<div class="gallery-container animate-fade-in">
  <div class="header">
    <h1 class="title">Software <span class="text-gradient">Engineering</span></h1>
    <p class="subtitle">Building scalable, performant, and beautiful digital experiences.</p>
  </div>

  {#if loading}
    <div class="loader">
      <div class="spinner"></div>
    </div>
  {:else}
    <div class="grid">
      {#each projects as project, i}
        <div class="grid-item delay-{i * 100}">
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

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 32px;
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
    border-top-color: var(--accent-primary);
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2.5rem;
    }
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
