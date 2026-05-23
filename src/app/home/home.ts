import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface LinkButton {
  title: string;
  url: string;
  icon: string;
}

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class Home {
  socialLinks: SocialLink[] = [
    { label: 'X', url: 'https://twitter.com/itsanandnihal', icon: '𝕏' },
    { label: 'Email', url: 'mailto:itsanandnihal@gmail.com', icon: '✉️' }
  ];

  linkButtons: LinkButton[] = [
    { title: 'Linkedin', url: 'https://www.linkedin.com/in/itsanandnihal', icon: '💼' },
    { title: 'Artstation [Portfolio]', url: 'https://www.artstation.com/itsanandnihal', icon: '🖼️' },
    { title: 'My 3D Models | CGTrader', url: 'https://www.cgtrader.com/itsanandnihal', icon: '�' },
    { title: '3D/2D Models | Gumroad ', url: 'https://gumroad.com/itsanandnihal', icon: '⬛' }
  ];

  async shareProfile(): Promise<void> {
    const shareUrl = typeof window !== 'undefined'
      ? window.location.href
      : 'https://itsanandnihal.com';

    if (navigator.share) {
      try {
        await navigator.share({
          title: '@itsanandnihal',
          text: 'Check out my profile',
          url: shareUrl
        });
        return;
      } catch {
        // ignore share cancel
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Profile link copied to clipboard');
    } catch {
      alert('Copy this link: ' + shareUrl);
    }
  }
}