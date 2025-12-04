import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



interface Candidate {
  name: string;
  location: string;
  rank: string;
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

  candidates: Candidate[] = [
    { name: 'Jane Cooper', location: 'Chennai, Tamilnadu', rank: 'IAS Rank-23' },
    { name: 'Adam', location: 'Coimbatore, Tamilnadu', rank: 'IPS Rank-45' },
    { name: 'Tamara', location: 'Madurai, Tamilnadu', rank: 'TNPSC Rank-12' },
    { name: 'Raj Kumar', location: 'Trichy, Tamilnadu', rank: 'IAS Rank-67' },
    { name: 'Priya Sharma', location: 'Salem, Tamilnadu', rank: 'IPS Rank-89' },
    { name: 'Vikram Singh', location: 'Erode, Tamilnadu', rank: 'TNPSC Rank-34' },
  ];

  currentCarouselIndex: number = 0;
  itemsPerPage: number = 3;

  selectYear(year: number): void {
    this.selectedYear = year;
    this.currentCarouselIndex = 0;
  }

  get visibleCandidates(): Candidate[] {
    const start = this.currentCarouselIndex;
    const end = start + this.itemsPerPage;
    return this.candidates.slice(start, end);
  }

  canGoPrevious(): boolean {
    return this.currentCarouselIndex > 0;
  }

  canGoNext(): boolean {
    return this.currentCarouselIndex + this.itemsPerPage < this.candidates.length;
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
