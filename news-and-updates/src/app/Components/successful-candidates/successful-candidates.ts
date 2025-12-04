import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Candidate {
  name: string;
  location: string;
  rank: string;
  year: number;
  service: 'IoFS' | 'EPFO' | 'CAPF' | 'UPSC civil service';
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
  years: number[] = [2024, 2023, 2022, 2008].sort((a, b) => b - a);
  selectedYear: number = 2024;

  services: ('IoFS' | 'EPFO' | 'CAPF' | 'UPSC civil service')[] = [
    'IoFS',
    'EPFO',
    'CAPF',
    'UPSC civil service',
  ];
  selectedService: 'IoFS' | 'EPFO' | 'CAPF' | 'UPSC civil service' | 'All' = 'All';

  candidates: Candidate[] = [
    // IFoS 2008 Candidates
    {
      name: 'Dr. V. Sasimohan',
      location: 'Trichy, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Trichy',
      photo: 'assets/candidates/2008/ifos/sasimohan.jpg',
    },
    {
      name: 'M. Ganesh Karthik',
      location: 'Chennai, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Chennai',
      photo: 'assets/candidates/2008/ifos/ganesh-karthik.jpg',
    },
    {
      name: 'M. Nithya Kalyani',
      location: 'Ramanathapuram, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Ramanathapuram',
      photo: 'assets/candidates/2008/ifos/nithya-kalyani.jpg',
    },
    {
      name: 'S. Senbagapriya',
      location: 'Chennai, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Chennai',
      photo: 'assets/candidates/2008/ifos/senbagapriya.jpg',
    },
    {
      name: 'Dr. R. Kanchana',
      location: 'Namakkal, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Namakkal',
      photo: 'assets/candidates/2008/ifos/kanchana.jpg',
    },
    {
      name: 'P. Naveen Kumar',
      location: 'Salem, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Salem',
      photo: 'assets/candidates/2008/ifos/naveen-kumar.jpg',
    },
    {
      name: 'P. Ramasamy',
      location: 'Karur, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Karur',
      photo: 'assets/candidates/2008/ifos/ramasamy.jpg',
    },
    {
      name: 'B. Prabhakaran',
      location: 'Trichy, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Trichy',
      photo: 'assets/candidates/2008/ifos/prabhakaran.jpg',
    },
    {
      name: 'D. David Camus',
      location: 'Kanyakumari, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Kanyakumari',
      photo: 'assets/candidates/2008/ifos/david-camus.jpg',
    },
    {
      name: 'P. Arthanari',
      location: 'Salem, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Salem',
      photo: 'assets/candidates/2008/ifos/arthanari.jpg',
    },
    {
      name: 'A. Sakthivel',
      location: 'Trichy, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Trichy',
      photo: 'assets/candidates/2008/ifos/sakthivel.jpg',
    },
    {
      name: 'S. Jesin',
      location: 'Kanyakumari, Tamilnadu',
      rank: 'IFoS',
      year: 2008,
      service: 'IoFS',
      district: 'Kanyakumari',
      photo: 'assets/candidates/2008/ifos/jesin.jpg',
    },
    // Other sample candidates
    {
      name: 'Jane Cooper',
      location: 'Chennai, Tamilnadu',
      rank: 'IAS Rank-23',
      year: 2024,
      service: 'UPSC civil service',
      district: 'Chennai',
    },
    {
      name: 'Adam',
      location: 'Coimbatore, Tamilnadu',
      rank: 'IPS Rank-45',
      year: 2024,
      service: 'UPSC civil service',
      district: 'Coimbatore',
    },
    {
      name: 'Tamara',
      location: 'Madurai, Tamilnadu',
      rank: 'TNPSC Rank-12',
      year: 2024,
      service: 'EPFO',
      district: 'Madurai',
    },
    {
      name: 'Raj Kumar',
      location: 'Trichy, Tamilnadu',
      rank: 'IAS Rank-67',
      year: 2023,
      service: 'UPSC civil service',
      district: 'Trichy',
    },
    {
      name: 'Priya Sharma',
      location: 'Salem, Tamilnadu',
      rank: 'IPS Rank-89',
      year: 2023,
      service: 'CAPF',
      district: 'Salem',
    },
    {
      name: 'Vikram Singh',
      location: 'Erode, Tamilnadu',
      rank: 'TNPSC Rank-34',
      year: 2022,
      service: 'IoFS',
      district: 'Erode',
    },
    {
      name: 'Sneha Patel',
      location: 'Vellore, Tamilnadu',
      rank: 'IAS Rank-56',
      year: 2024,
      service: 'UPSC civil service',
      district: 'Vellore',
    },
    {
      name: 'Arjun Reddy',
      location: 'Tirunelveli, Tamilnadu',
      rank: 'IPS Rank-78',
      year: 2024,
      service: 'CAPF',
      district: 'Tirunelveli',
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

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const container = img.parentElement;
    if (container) {
      container.innerHTML = `
        <div class="candidate-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
