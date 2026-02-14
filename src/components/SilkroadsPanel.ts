import { Panel } from './Panel';
import { escapeHtml } from '@/utils/sanitize';
import type { InternetSilkroad } from '@/types';

export class SilkroadsPanel extends Panel {
  private routes: InternetSilkroad[] = [];
  private onRouteClick?: (route: InternetSilkroad) => void;

  constructor() {
    super({ id: 'silkroads', title: 'Internet Silkroads', showCount: true });
  }

  public setOnRouteClick(handler: (route: InternetSilkroad) => void): void {
    this.onRouteClick = handler;
  }

  public setRoutes(routes: InternetSilkroad[]): void {
    this.routes = routes || [];
    this.setCount(this.routes.length);
    this.render();
  }

  private render(): void {
    if (!this.routes || this.routes.length === 0) {
      this.showError('No Silkroads data available');
      return;
    }

    const html = this.routes.map((r) => {
      const typeIcon = r.routeType === 'submarine' ? '🌊' : r.routeType === 'terrestrial' ? '🛤️' : '🔗';
      return `
        <div class="silkroad-item" data-id="${escapeHtml(r.id)}">
          <div class="silkroad-left">
            <div class="silkroad-name">${typeIcon} ${escapeHtml(r.name)}</div>
            <div class="silkroad-desc">${escapeHtml(r.description || '')}</div>
          </div>
          <div class="silkroad-actions">
            <button class="btn-view-route" data-id="${escapeHtml(r.id)}">View on map</button>
          </div>
        </div>
      `;
    }).join('');

    this.setContent(`<div class="silkroads-list">${html}</div>`);
    this.bindEvents();
  }

  private bindEvents(): void {
    const btns = this.content.querySelectorAll<HTMLButtonElement>('.btn-view-route');
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        const route = this.routes.find(r => r.id === id);
        if (route && this.onRouteClick) this.onRouteClick(route);
      });
    });
  }
}
