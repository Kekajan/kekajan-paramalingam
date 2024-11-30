type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee?: string;
    paypal?: string;
    message?: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Designs",
    path: "/designs",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Designs",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Email",
          link: "mailto:kekajanpk4220@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
        {
          name: "GitHub",
          link: "https://github.com/Kekajan",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/kekajan-paramalingam-bb8a531a4",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/kekajan_pk04/profilecard/?igsh=MWNkdnVyd3liZHpl",
          icon: "/static/icons/2227.jpg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    // buymeacoffee: "braydenw",
    // paypal: "braydentw",
    // message: "I appreciate your support very much! 💙",
  },
};
