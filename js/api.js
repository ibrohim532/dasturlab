/**
 * API layer — placeholder / integration contract.
 *
 * There is currently NO backend wired up. Every function below returns
 * mock data from config.js so the UI is fully demonstrable. Each function
 * is documented with the real HTTP contract it should call once a backend
 * (e.g. FastAPI/Django + PostgreSQL) exists. Swap the body only — callers
 * do not need to change.
 *
 * Suggested resources for the future admin panel:
 *   GET/POST/PUT/DELETE  /api/projects
 *   GET/POST/PUT/DELETE  /api/blog-posts
 *   GET/POST/PUT/DELETE  /api/team-members
 *   GET/POST/PUT/DELETE  /api/testimonials
 *   GET/POST/PUT/DELETE  /api/services
 *   GET/PUT              /api/stats
 *   GET/POST/PUT         /api/contact-requests   (see config.js: createContactRequest)
 *
 * Auth: admin routes must sit behind a session/JWT-protected /api/admin/*
 * namespace; never expose write endpoints without authentication.
 * Secrets/keys belong in server-side environment variables, never in
 * this file or any other client-side code.
 */

const Api = {
  async getProjects() {
    // TODO(backend): return fetch('/api/projects').then(r => r.json());
    return Promise.resolve(PROJECTS);
  },
  async getBlogPosts() {
    // TODO(backend): return fetch('/api/blog-posts').then(r => r.json());
    return Promise.resolve(BLOG_POSTS);
  },
  async getTestimonials() {
    // TODO(backend): return fetch('/api/testimonials').then(r => r.json());
    return Promise.resolve(TESTIMONIALS);
  },
  async getStats() {
    // TODO(backend): return fetch('/api/stats').then(r => r.json());
    return Promise.resolve(STATS);
  },

  /**
   * Submits the contact form.
   * TODO(backend): POST to /api/contact-requests with the ContactRequest
   * shape from config.js#createContactRequest, validate + sanitize server
   * side, store it, and return { id, status: "new" }.
   * Never trust client-side validation alone — re-validate on the server.
   */
  async submitContactRequest(payload) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ok: true, id: Date.now() }), 900);
    });
  }
};
