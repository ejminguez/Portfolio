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
    <div class="card-overlay">
      {#if link}
        <a href={link} target="_blank" rel="noopener noreferrer" class="action-btn">
          <span>View Live</span>
        </a>
      {/if}
      {#if github}
        <a href={github} target="_blank" rel="noopener noreferrer" class="action-btn outline">
          <span>GitHub</span>
        </a>
      {/if}
    </div>
  </div>
  
  <div class="card-content">
    <div class="card-meta">
      <span class="category">{category}</span>
    </div>
    <h3 class="card-title">{title}</h3>
    <p class="card-desc">{description}</p>
    
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
    background: var(--bg-color-elevated);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    transition: var(--transition-slow);
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .project-card:hover {
    transform: translateY(-8px);
    border-color: var(--border-color-hover);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .card-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: #1a1a1a;
  }

  .card-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-card:hover .card-image-wrapper img {
    transform: scale(1.05);
  }

  .placeholder-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #111, #222);
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    opacity: 0;
    transition: var(--transition-fast);
  }

  .project-card:hover .card-overlay {
    opacity: 1;
  }

  .action-btn {
    padding: 10px 20px;
    border-radius: 30px;
    background: var(--text-primary);
    color: var(--bg-color);
    font-weight: 600;
    font-size: 0.9rem;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .action-btn.outline {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--text-primary);
  }

  .project-card:hover .action-btn {
    transform: translateY(0);
    opacity: 1;
  }

  .project-card:hover .action-btn:nth-child(2) {
    transition-delay: 50ms;
  }

  .action-btn:hover {
    transform: scale(1.05) !important;
  }

  .card-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .category {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--accent-primary);
    background: rgba(59, 130, 246, 0.1);
    padding: 4px 10px;
    border-radius: 20px;
  }

  .card-title {
    font-size: 1.4rem;
    margin: 12px 0 8px;
    color: var(--text-primary);
  }

  .card-desc {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: 24px;
    flex: 1;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
  }

  .tech-tag {
    font-size: 0.8rem;
    color: var(--text-secondary);
    background: rgba(255, 255, 255, 0.05);
    padding: 4px 12px;
    border-radius: 4px;
    border: 1px solid var(--border-color);
  }
</style>
