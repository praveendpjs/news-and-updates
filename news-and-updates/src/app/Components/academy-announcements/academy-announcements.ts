import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import announcementsData from './announcements.json';

interface Announcement {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  fullContent: string;
  isNew: boolean;
  documentUrl?: string;
  documentPages?: string[];
}

@Component({
  selector: 'app-academy-announcements',
  imports: [CommonModule, FormsModule],
  templateUrl: './academy-announcements.html',
  styleUrl: './academy-announcements.css',
})
export class AcademyAnnouncements {
  announcements: Announcement[] = announcementsData as Announcement[];
  
  searchQuery: string = '';
  selectedCategory: string = 'All';
  sortOrder: 'newest' | 'oldest' = 'newest';
  currentPage: number = 1;
  itemsPerPage: number = 3;
  
  selectedAnnouncement: Announcement | null = null;
  isModalOpen: boolean = false;
  currentDocumentPage: number = 0;

  categories: string[] = ['All', 'Batch', 'Examination', 'Administration', 'Workshop', 'Resources'];

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

  goToDocumentPage(pageIndex: number): void {
    if (pageIndex >= 0 && pageIndex < this.totalDocumentPages) {
      this.currentDocumentPage = pageIndex;
    }
  }

  openModal(announcement: Announcement): void {
    this.selectedAnnouncement = announcement;
    this.currentDocumentPage = 0;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedAnnouncement = null;
    this.currentDocumentPage = 0;
    document.body.style.overflow = '';
  }

  get documentPages(): string[] {
    return this.selectedAnnouncement?.documentPages || [];
  }

  get hasDocumentPages(): boolean {
    return this.documentPages.length > 0;
  }

  get totalDocumentPages(): number {
    return this.documentPages.length;
  }

  get currentPageImage(): string | null {
    if (this.documentPages.length === 0) {
      return null;
    }
    return this.documentPages[this.currentDocumentPage] || null;
  }

  goToNextPage(): void {
    if (this.currentDocumentPage < this.totalDocumentPages - 1) {
      this.currentDocumentPage++;
    }
  }

  goToPreviousPage(): void {
    if (this.currentDocumentPage > 0) {
      this.currentDocumentPage--;
    }
  }

  canGoToNextPage(): boolean {
    return this.currentDocumentPage < this.totalDocumentPages - 1;
  }

  canGoToPreviousPage(): boolean {
    return this.currentDocumentPage > 0;
  }


  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/documents/placeholder.jpg';
    img.alt = 'Image not available';
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
