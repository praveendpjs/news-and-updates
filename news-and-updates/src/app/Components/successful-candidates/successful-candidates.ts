import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Candidate {
  name: string;
  location: string;
  rank: string;
  year: number;
  service: 'IoFS' | 'EPFO' | 'CAPF' | 'UPSC civil service';
}

@Component({
  selector: 'app-successful-candidates',
  imports: [CommonModule],
  templateUrl: './successful-candidates.html',
  styleUrl: './successful-candidates.css',
})
export class SuccessfulCandidates {
  years: number[] = [2024, 2023, 2022];
  selectedYear: number = 2024;

  services: ('IoFS' | 'EPFO' | 'CAPF' | 'UPSC civil service')[] = [
    'IoFS',
    'EPFO',
    'CAPF',
    'UPSC civil service',
  ];
  selectedService: 'IoFS' | 'EPFO' | 'CAPF' | 'UPSC civil service' | 'All' = 'All';

  candidates: Candidate[] = [
    {
      name: 'Jane Cooper',
      location: 'Chennai, Tamilnadu',
      rank: 'IAS Rank-23',
      year: 2024,
      service: 'UPSC civil service',
    },
    {
      name: 'Adam',
      location: 'Coimbatore, Tamilnadu',
      rank: 'IPS Rank-45',
      year: 2024,
      service: 'UPSC civil service',
    },
    {
      name: 'Tamara',
      location: 'Madurai, Tamilnadu',
      rank: 'TNPSC Rank-12',
      year: 2024,
      service: 'EPFO',
    },
    {
      name: 'Raj Kumar',
      location: 'Trichy, Tamilnadu',
      rank: 'IAS Rank-67',
      year: 2023,
      service: 'UPSC civil service',
    },
    {
      name: 'Priya Sharma',
      location: 'Salem, Tamilnadu',
      rank: 'IPS Rank-89',
      year: 2023,
      service: 'CAPF',
    },
    {
      name: 'Vikram Singh',
      location: 'Erode, Tamilnadu',
      rank: 'TNPSC Rank-34',
      year: 2022,
      service: 'IoFS',
    },
    {
      name: 'Sneha Patel',
      location: 'Vellore, Tamilnadu',
      rank: 'IAS Rank-56',
      year: 2024,
      service: 'UPSC civil service',
    },
    {
      name: 'Arjun Reddy',
      location: 'Tirunelveli, Tamilnadu',
      rank: 'IPS Rank-78',
      year: 2024,
      service: 'CAPF',
    },
  ];

  currentCarouselIndex: number = 0;
  itemsPerPage: number = 3;

  selectYear(year: number): void {
    this.selectedYear = year;
    this.currentCarouselIndex = 0;
  }

  selectService(service: 'IoFS' | 'EPFO' | 'CAPF' | 'UPSC civil service' | 'All'): void {
    this.selectedService = service;
    this.currentCarouselIndex = 0;
  }

  get filteredCandidates(): Candidate[] {
    return this.candidates.filter((candidate) => {
      const yearMatch = candidate.year === this.selectedYear;
      const serviceMatch =
        this.selectedService === 'All' || candidate.service === this.selectedService;
      return yearMatch && serviceMatch;
    });
  }

  get visibleCandidates(): Candidate[] {
    const filtered = this.filteredCandidates;
    const start = this.currentCarouselIndex;
    const end = start + this.itemsPerPage;
    return filtered.slice(start, end);
  }

  canGoPrevious(): boolean {
    return this.currentCarouselIndex > 0;
  }

  canGoNext(): boolean {
    return (
      this.currentCarouselIndex + this.itemsPerPage < this.filteredCandidates.length
    );
  }

  goPrevious(): void {
    if (this.canGoPrevious()) {
      this.currentCarouselIndex -= 1;
    }
  }

  goNext(): void {
    if (this.canGoNext()) {
      this.currentCarouselIndex += 1;
    }
  }
}
