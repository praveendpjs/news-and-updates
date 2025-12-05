import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import announcementsData from './announcements.json';

interface Announcement {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  fullContent: string;
  isNew: boolean;
  htmlFile?: string;
}

@Component({
  selector: 'app-academy-announcements',
  imports: [CommonModule, FormsModule],
  templateUrl: './academy-announcements.html',
  styleUrl: './academy-announcements.css',
})
export class AcademyAnnouncements {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  announcements: Announcement[] = announcementsData as Announcement[];

  searchQuery: string = '';
  selectedCategory: string = 'All';
  sortOrder: 'newest' | 'oldest' = 'newest';
  currentPage: number = 1;
  itemsPerPage: number = 3;

  selectedAnnouncement: Announcement | null = null;
  isModalOpen: boolean = false;
  loadedHtmlContent: SafeHtml | null = null;
  isLoadingHtml: boolean = false;
  htmlLoadError: string | null = null;

  categories: string[] = ['All', 'Batch', 'Examination', 'Administration', 'Workshop', 'Resources', 'Results'];

  get filteredAnnouncements(): Announcement[] {
    let filtered = this.announcements;

    // Search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (announcement) =>
          announcement.title.toLowerCase().includes(query) ||
          announcement.description.toLowerCase().includes(query) ||
          announcement.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(
        (announcement) => announcement.category === this.selectedCategory
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

  get paginatedAnnouncements(): Announcement[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredAnnouncements.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredAnnouncements.length / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onSearchChange(): void {
    this.currentPage = 1;
  }

  onCategoryChange(): void {
    this.currentPage = 1;
  }

  onSortChange(): void {
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openModal(announcement: Announcement): void {
    this.selectedAnnouncement = announcement;
    this.isModalOpen = true;
    this.loadedHtmlContent = null;
    this.htmlLoadError = null;
    document.body.style.overflow = 'hidden';

    // Load HTML file if specified
    if (announcement.htmlFile) {
      this.loadHtmlFile(announcement.htmlFile);
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedAnnouncement = null;
    this.loadedHtmlContent = null;
    this.htmlLoadError = null;
    this.isLoadingHtml = false;
    document.body.style.overflow = '';
  }

  loadHtmlFile(htmlFilePath: string): void {
    this.isLoadingHtml = true;
    this.htmlLoadError = null;

    // Ensure the path starts with 'assets/' and has proper format
    const filePath = htmlFilePath.startsWith('assets/')
      ? htmlFilePath
      : `assets/${htmlFilePath}`;

    this.http.get(filePath, { responseType: 'text' }).subscribe({
      next: (htmlContent: string) => {
        // Extract body content if it's a full HTML document, otherwise use as-is
        const bodyContent = this.extractBodyContent(htmlContent);
        // Sanitize the HTML content for safe display
        this.loadedHtmlContent = this.sanitizer.bypassSecurityTrustHtml(bodyContent);
        this.isLoadingHtml = false;
      },
      error: (error) => {
        console.error('Error loading HTML file:', error);
        this.htmlLoadError = 'Failed to load content. Please try again later.';
        this.isLoadingHtml = false;
      }
    });
  }

  private extractBodyContent(htmlContent: string): string {
    // Check if the content contains a full HTML document structure
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (bodyMatch && bodyMatch[1]) {
      // Extract only the body content
      return bodyMatch[1].trim();
    }
    // If no body tag found, return the content as-is (it might be just body content)
    return htmlContent.trim();
  }

  hasHtmlFile(): boolean {
    return !!this.selectedAnnouncement?.htmlFile;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }
}
