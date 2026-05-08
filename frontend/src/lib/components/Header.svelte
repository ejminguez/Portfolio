<script>
  let { currentRoute } = $props();
</script>

<header>
  <div class="logo">
    <a href="#">Errol<span class="text-gradient">Minguez</span></a>
  </div>
  <nav>
    <a href="#software" class={currentRoute === 'software' ? 'active' : ''}>Software Dev</a>
    <a href="#design" class={currentRoute === 'design' ? 'active' : ''}>Graphic Design</a>
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background: var(--bg-color-glass);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    z-index: 100;
  }
  
  .logo a {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1.5rem;
    letter-spacing: -0.03em;
  }

  nav {
    display: flex;
    gap: 32px;
  }

  nav a {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-secondary);
    transition: var(--transition-fast);
    position: relative;
  }

  nav a:hover, nav a.active {
    color: var(--text-primary);
  }

  nav a::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: var(--transition-fast);
  }

  nav a:hover::after, nav a.active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    header {
      padding: 0 20px;
    }
    nav {
      gap: 16px;
    }
  }
</style>
