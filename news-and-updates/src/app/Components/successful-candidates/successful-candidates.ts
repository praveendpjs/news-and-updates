import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import candidatesData from './candidates.json';

interface Candidate {
  name: string;
  rank: string;
  year: number;
  service: 'IFOS' | 'EPFO' | 'CAPF' | 'IPS' | 'IAS' | 'IRS'| 'IFS' | 'IIS' | 'ICLS' | 'IDAS' | 'IRMS' | 'IPOS';
  photo?: string;
  district: string;
}

@Component({
  selector: 'app-successful-candidates',
  imports: [CommonModule],
  templateUrl: './successful-candidates.html',
  styleUrl: './successful-candidates.css',
})
export class SuccessfulCandidates {
  years: number[] = [2024, 2023, 2022, 2008, 2020, 2010, 2013, 2014, 2016, 2017, 2018, 2011, 2007].sort((a, b) => b - a);
  selectedYear: number = 2024;

  services: ('IFOS' | 'EPFO' | 'CAPF' | 'IPS' | 'IAS' | 'IRS' | 'IFS' | 'IIS' | 'ICLS' | 'IDAS' | 'IRMS' | 'ICAS' | 'IPOS')[] = [
    'IFOS',
    'EPFO',
    'CAPF',
    'IPS',
    'IAS',
    'IRS',
    'IFS',
    'IIS',
    'ICLS',
    'IDAS',
    'IRMS',
    'ICAS',
    'IPOS'
  ];
  selectedService: 'IFOS' | 'EPFO' | 'CAPF' | 'IPS' | 'IAS' | 'IRS' | 'IFS' |'IIS'| 'ICLS' | 'IDAS' | 'IRMS'| 'ICAS' | 'IPOS' | 'All' = 'All';

  candidates: Candidate[] = candidatesData as Candidate[];

  currentCarouselIndex: number = 0;
  itemsPerPage: number = 5;

  selectYear(year: number): void {
    this.selectedYear = year;
    this.currentCarouselIndex = 0;
  }

  selectService(service: 'IFOS' | 'EPFO' | 'CAPF'  | 'IPS' | 'IAS' | 'IRS' | 'IFS' | 'IIS' | 'ICLS'| 'IDAS' | 'IRMS' | 'ICAS' | 'IPOS' | 'All'): void {
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
