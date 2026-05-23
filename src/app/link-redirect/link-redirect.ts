import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-link-redirect',
  template: `
    <div class="redirect-shell">
      <p>Redirecting...</p>
    </div>
  `,
  styles: [`
    .redirect-shell {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #d6ff7d;
      background: #082a1d;
      font-family: Arial, sans-serif;
    }
  `],
  standalone: true
})
export class LinkRedirect implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const url = this.route.snapshot.data['url'] as string;
    if (url && typeof window !== 'undefined') {
      window.location.href = url;
    } else {
      this.router.navigateByUrl('/');
    }
  }
}