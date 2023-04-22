import { SelectItem } from '@/components/ui/Select';
import { MOVIEDB_IMAGE_URL } from '@/constants/env';
import { Genre } from '@/types';

interface NavLink {
  id: number;
  caption: string;
  link?: string;
  links?: { caption: string; link: string }[];
}

const navLinks: NavLink[] = [
  {
    id: 1,
    caption: 'Home',
    link: '/',
  },
  {
    id: 2,
    caption: 'Discover',
    links: [
      {
        caption: 'Movie',
        link: '/movie-discover',
      },
      {
        caption: 'Tv',
        link: '/tv-discover',
      },
    ],
  },
  {
    id: 3,
    caption: 'Search',
    link: '/search/movie',
  },
];

interface SidebarLink {
  id: number;
  caption: string;
  link: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    id: 1,
    caption: 'Home',
    link: '/',
  },
  {
    id: 2,
    caption: 'Discover Movie',
    link: '/movie-discover',
  },
  {
    id: 3,
    caption: 'Discover Tv',
    link: '/tv-discover',
  },
  {
    id: 4,
    caption: 'Search',
    link: '/search/movie',
  },
];

export interface ShowSorting {
  id: number;
  caption: string;
  value: string;
}

const showSorting: ShowSorting[] = [
  {
    id: 1,
    caption: 'Popular (ASC)',
    value: 'popularity.asc',
  },
  {
    id: 2,
    caption: 'Popular (DSC)',
    value: 'popularity.desc',
  },
  {
    id: 3,
    caption: 'Release Date (ASC)',
    value: 'release_date.asc',
  },
  {
    id: 4,
    caption: 'Release Date (DSC)',
    value: 'release_date.desc',
  },
  {
    id: 5,
    caption: 'Vote Average (ASC)',
    value: 'vote_average.asc',
  },
  {
    id: 6,
    caption: 'Vote Average (DSC)',
    value: 'vote_average.desc',
  },
];

export const discoverSortSelections: SelectItem[] = [
  {
    id: 1,
    caption: 'Popular',
    value: 'popularity.desc',
  },
  {
    id: 2,
    caption: 'Vote Count',
    value: 'vote_count.desc',
  },
  {
    id: 3,
    caption: 'Vote Average',
    value: 'vote_average.desc',
  },
];

const getImageUrl = (w: number = 500, path: string) => {
  return `${MOVIEDB_IMAGE_URL}/t/p/w${w}${path}`;
};

export const movieGenre: Required<Genre>[] = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export const searchMediaType: SelectItem[] = [
  {
    id: 1,
    caption: 'Movie',
    value: 'movie',
  },
  {
    id: 2,
    caption: 'Tv',
    value: 'tv',
  },
];

interface FooterLinkGroup {
  id: number;
  name: string;
  links: FooterLink[];
}

interface FooterLink {
  id: number;
  caption: string;
  link: string;
}

export const footerLinks: FooterLinkGroup[] = [
  {
    id: 1,
    name: "Pages",
    links: [
      {
        id: 1,
        caption: 'Home',
        link: '/home'
      },
      {
        id: 2,
        caption: 'Discover Movies',
        link: '/movie-discover'
      },
      {
        id: 3,
        caption: 'Discover Tv Show',
        link: '/tv-discover'
      },
      {
        id: 4,
        caption: 'Search',
        link: '/search/movie'
      }
    ]
  }
]

export { navLinks, showSorting, getImageUrl };
