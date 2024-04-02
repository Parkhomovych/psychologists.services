export interface Review {
    reviewer: string;
    rating: number;
    comment: string;
  }
  export interface Therapist {
    name: string;
    id: string;
    avatar_url: string;
    experience: string;
    reviews: Review[];
    price_per_hour: number;
    rating: number;
    license: string;
    specialization: string;
    initial_consultation: string;
    about: string;
  }
  