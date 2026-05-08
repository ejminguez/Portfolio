<script>
  let { project } = $props();
  
  // Extract fields based on our Contentful mock structure
  const fields = project.fields;
  const title = fields.title;
  const category = fields.category;
  const description = fields.description;
  const coverUrl = fields.coverImage?.fields?.file?.url;
  const techStack = fields.techStack || [];
  const link = fields.link;
  const github = fields.github;
</script>

<div class="project-card">
  <div class="card-image-wrapper">
    {#if coverUrl}
      <img src={coverUrl} alt={title} loading="lazy" />
    {:else}
      <div class="placeholder-image"></div>
    {/if}
  </div>
  
  <div class="card-content">
    <div class="card-meta">
      <span class="category">{category}</span>
    </div>
    <h3 class="card-title">{title}</h3>
    <p class="card-desc">{description}</p>

    <div class="card-actions">
      {#if link}
        <a href={link} target="_blank" rel="noopener noreferrer" class="action-btn">View Live</a>
      {/if}
      {#if github}
        <a href={github} target="_blank" rel="noopener noreferrer" class="action-btn outline">GitHub</a>
      {/if}
    </div>
    
    {#if techStack.length > 0}
      <div class="tech-stack">
        {#each techStack as tech}
          <span class="tech-tag">{tech}</span>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .project-card {
    background: linear-gradient(to bottom, #ffffff, #f2f6fa);
    border: 1px solid var(--border-color);
    overflow: hidden;
    transition: var(--transition-fast);
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .project-card:hover {
    border-color: var(--border-dark);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), 0 2px 5px rgba(0, 0, 0, 0.14);
  }

  .card-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: #d7e1ec;
    border-bottom: 1px solid var(--border-color);
  }

  .card-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }

  .project-card:hover .card-image-wrapper img {
    transform: scale(1.01);
  }

  .placeholder-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #dfe8f2, #c9d7e6);
  }

  .action-btn {
    display: inline-block;
    padding: 7px 12px;
    border: 1px solid #2a77be;
    border-radius: 3px;
    background: linear-gradient(to bottom, #4ca8ff, #2f8de4);
    color: #ffffff;
    font-weight: 700;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.28);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.34);
    transition: var(--transition-fast);
  }

  .action-btn.outline {
    border-color: #8ca0b4;
    background: linear-gradient(to bottom, #f8fbff, #dce6f0);
    color: #31506f;
    text-shadow: none;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95);
  }

  .action-btn:hover {
    background: linear-gradient(to bottom, #5db2ff, #3798f0);
  }

  .action-btn.outline:hover {
    background: linear-gradient(to bottom, #ffffff, #e8eff7);
  }

  .card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .category {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #2a6eaf;
    background: #e5f1ff;
    padding: 3px 7px;
    border: 1px solid #bdd8f5;
  }

  .card-title {
    font-size: 1.18rem;
    margin: 10px 0 6px;
    color: #29435f;
  }

  .card-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  .card-actions {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: auto;
  }

  .tech-tag {
    font-size: 0.72rem;
    color: #4d6075;
    background: #e8eef5;
    padding: 3px 7px;
    border: 1px solid #c6d2df;
  }
</style>
