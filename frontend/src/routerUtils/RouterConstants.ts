export interface RouterLink {
  link: string;
  title: string;
  tabIndex: number;
}

export const routerLinks: RouterLink[] = [
  {link: '/games', title: 'Games', tabIndex: 0},
  {link: '/movies', title: 'Movies', tabIndex: 1},
  {link: '/music', title: 'Music', tabIndex: 2},
];
