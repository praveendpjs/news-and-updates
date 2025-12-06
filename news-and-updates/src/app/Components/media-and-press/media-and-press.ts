import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import mediaData from './media.json';

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
  selector: 'app-media-and-press',
  imports: [CommonModule, FormsModule],
  templateUrl: './media-and-press.html',
  styleUrl: './media-and-press.css',
})
export class MediaAndPress {
  mediaItems: MediaItem[] = mediaData as MediaItem[];
  
  selectedType: 'all' | 'article' | 'video' | 'youtube' | 'twitter' | 'instagram' = 'all';
  searchQuery: string = '';
  sortOrder: 'newest' | 'oldest' = 'newest';

  constructor(private sanitizer: DomSanitizer) {}

  get filteredMedia(): MediaItem[] {
    let filtered = this.mediaItems;

    // Type filter
    if (this.selectedType !== 'all') {
      if (this.selectedType === 'video') {
        // 'video' filter shows all video types
        filtered = filtered.filter((item) => 
          item.type === 'video' || item.type === 'youtube' || item.type === 'twitter' || item.type === 'instagram'
        );
      } else {
        filtered = filtered.filter((item) => item.type === this.selectedType);
      }
    }

    // Search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          (item.excerpt && item.excerpt.toLowerCase().includes(query)) ||
          (item.description && item.description.toLowerCase().includes(query)) ||
          (item.newspaper && item.newspaper.toLowerCase().includes(query))
      );
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return this.sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }

  getYouTubeEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getYouTubeThumbnail(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  getTwitterEmbedUrl(tweetId: string): SafeResourceUrl {
    const url = `https://platform.twitter.com/embed/Tweet.html?id=${tweetId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getInstagramEmbedUrl(postId: string): SafeResourceUrl {
    const url = `https://www.instagram.com/p/${postId}/embed/`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  isVideoType(type: string): boolean {
    return type === 'video' || type === 'youtube' || type === 'twitter' || type === 'instagram';
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
}
