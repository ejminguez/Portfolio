<script>
  let { currentRoute } = $props();
</script>

<header>
  <div class="logo">
    <a href="#software">Errol <span class="text-gradient">Minguez</span></a>
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
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    background: linear-gradient(to bottom, #f8fbfe, #d8e4f0);
    border-bottom: 1px solid var(--border-dark);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), 0 1px 3px rgba(0, 0, 0, 0.15);
    z-index: 100;
  }

  .logo a {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.25rem;
    color: #26405b;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
  }

  nav {
    display: flex;
    gap: 8px;
  }

  nav a {
    font-size: 0.88rem;
    font-weight: 700;
    color: #35506c;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    border: 1px solid #9eafc1;
    border-radius: 3px;
    background: linear-gradient(to bottom, #ffffff, #dfe9f3);
    padding: 8px 12px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95);
    transition: var(--transition-fast);
  }

  nav a:hover, nav a.active {
    color: #ffffff;
    border-color: #2a77be;
    background: linear-gradient(to bottom, #4ca8ff, #2f8de4);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
  }

  @media (max-width: 768px) {
    header {
      height: 70px;
      padding: 8px 12px;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
    }

    .logo a {
      font-size: 1.05rem;
    }

    nav {
      gap: 6px;
      flex-wrap: wrap;
      justify-content: center;
    }

    nav a {
      font-size: 0.76rem;
      padding: 6px 8px;
    }
  }
</style>
