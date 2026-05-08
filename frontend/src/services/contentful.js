// import * as contentful from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Initialize Contentful client only if we have valid-looking tokens
let client = null;
if (spaceId && accessToken && spaceId !== 'your_space_id_here') {
  try {
    /* 
    client = contentful.createClient({
      space: spaceId,
      accessToken: accessToken,
    });
    */
    console.log("Contentful client initialization commented out. Run `npm install contentful` to use.");
  } catch (error) {
    console.error('Failed to initialize Contentful client:', error);
  }
}

// Mock Data for fallback
const mockSoftwareWorks = [
  {
    sys: { id: 'mock-1' },
    fields: {
      title: 'Quantum Dashboard',
      slug: 'quantum-dashboard',
      category: 'Software Dev',
      description: 'A high-performance analytics dashboard built with Svelte and WebGL for real-time data visualization.',
      coverImage: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          }
        }
      },
      techStack: ['Svelte', 'WebGL', 'TypeScript'],
      link: 'https://example.com/quantum',
      github: 'https://github.com/example/quantum'
    }
  },
  {
    sys: { id: 'mock-2' },
    fields: {
      title: 'Neon E-commerce',
      slug: 'neon-ecommerce',
      category: 'Software Dev',
      description: 'A blazing fast modern headless e-commerce storefront with complex state management.',
      coverImage: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
          }
        }
      },
      techStack: ['React', 'Next.js', 'Stripe'],
      link: 'https://example.com/neon',
      github: 'https://github.com/example/neon'
    }
  }
];

const mockDesignWorks = [
  {
    sys: { id: 'mock-3' },
    fields: {
      title: 'Aura Brand Identity',
      slug: 'aura-brand',
      category: 'Graphic Design',
      description: 'Complete brand identity, logo, and marketing materials for a high-end wellness brand.',
      coverImage: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
          }
        }
      }
    }
  },
  {
    sys: { id: 'mock-4' },
    fields: {
      title: 'Lunar Magazine Layout',
      slug: 'lunar-magazine',
      category: 'Graphic Design',
      description: 'Editorial design and typography layout for a futuristic lifestyle magazine.',
      coverImage: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
          }
        }
      }
    }
  },
  {
    sys: { id: 'mock-5' },
    fields: {
      title: 'Echo App UI Design',
      slug: 'echo-app',
      category: 'Graphic Design',
      description: 'Mobile app interface design focusing on dark mode and minimal aesthetic.',
      coverImage: {
        fields: {
          file: {
            url: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=800&q=80',
          }
        }
      }
    }
  }
];

export async function getProjects(category) {
  if (client) {
    try {
      const response = await client.getEntries({
        content_type: 'project', // Assuming you name your content type 'project'
        'fields.category': category
      });
      return response.items;
    } catch (error) {
      console.error(`Error fetching ${category} from Contentful, falling back to mock data:`, error);
    }
  }
  
  // Fallback to mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(category === 'Software Dev' ? mockSoftwareWorks : mockDesignWorks);
    }, 500); // simulate network delay
  });
}
