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
    padding-top: 10px;
  }

  .header {
    text-align: center;
    margin-bottom: 28px;
    padding: 18px 14px;
    border: 1px solid var(--border-color);
    background: linear-gradient(to bottom, #ffffff, #e9f0f7);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95);
  }

  .title {
    font-size: 2.15rem;
    margin-bottom: 8px;
    color: #27435f;
  }

  .subtitle {
    font-size: 1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 18px;
  }

  .loader {
    display: flex;
    justify-content: center;
    padding: 100px 0;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 5px solid #c7d6e6;
    border-radius: 50%;
    border-top-color: var(--accent-primary);
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.65rem;
    }

    .header {
      margin-bottom: 18px;
      padding: 14px 10px;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 14px;
    }
  }
</style>
