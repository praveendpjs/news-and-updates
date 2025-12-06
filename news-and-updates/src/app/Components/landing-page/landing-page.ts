import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import candidatesData from '../successful-candidates/candidates.json';
import announcementsData from '../academy-announcements/announcements.json';
import mediaData from '../media-and-press/media.json';

interface Candidate {
  name: string;
  rank: string;
  year: number;
  service: 'IFOS' | 'EPFO' | 'CAPF' | 'IPS' | 'IAS' | 'IRS'| 'IFS' | 'IIS' | 'ICLS' | 'IDAS' | 'IRMS' | 'IPOS';
  photo?: string;
  district: string;
}

interface Announcement {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  fullContent: string;
  isNew: boolean;
  htmlFile?: string;
  htmlFileEn?: string;
}

interface MediaItem {
  id: number;
  type: 'article' | 'video' | 'youtube' | 'twitter' | 'instagram';
  title: string;
  date: string;
  newspaper?: string;
  imageUrl?: string;
  articleUrl?: string;
  excerpt?: string;
  description?: string;
  youtubeVideoId?: string;
  twitterEmbedId?: string;
  instagramEmbedId?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  candidates: Candidate[] = candidatesData as Candidate[];
  announcements: Announcement[] = announcementsData as Announcement[];
  mediaItems: MediaItem[] = mediaData as MediaItem[];

  // Get preview items (first 4)
  get previewCandidates(): Candidate[] {
    // Get latest year candidates, first 4
    const latestYear = Math.max(...this.candidates.map(c => c.year));
    return this.candidates
      .filter(c => c.year === latestYear)
      .slice(0, 4);
  }

  get previewAnnouncements(): Announcement[] {
    // Sort by date (newest first) and get first 3
    return [...this.announcements]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }

  get previewMediaItems(): MediaItem[] {
    // Sort by date (newest first) and get first 3
    return [...this.mediaItems]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const container = img.parentElement;
    if (container) {
      container.innerHTML = `
        <div class="candidate-icon">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="15" r="8" fill="#20B2AA" opacity="0.2" />
            <path d="M10 32C10 27 14 23 20 23C26 23 30 27 30 32" stroke="#20B2AA" stroke-width="3" stroke-linecap="round" />
            <circle cx="30" cy="8" r="4" fill="#22C55E" />
            <path d="M28 6L29.5 7.5L32 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      `;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  openArticle(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  getYouTubeThumbnail(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
}
