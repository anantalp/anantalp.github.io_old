module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://anantalp.netlify.app/`,
    // Your Name
    name: 'Ananta Prasannakumar',
    // Main Site Title
    title: `Ananta Prasannakumar`,
    // Description that goes under your name in main bio
    description: `UCF Graduate Student. Actively seeking full-time positions.`,
    // Optional: Twitter account handle
    author: `@ananta_lp`,
    // Optional: Github account URL
    github: `https://github.com/anantalp`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ananta-prasannakumar-3ba57599/`,
    // Content of the About Me section
    about: `Passionate and detail-oriented ECE grad student from the University of Central Florida, focusing on Applied Machine Learning for images and text, looking for full-time roles. Generalized Specialist, eager to learn, and ability to break down complex problems and translate into modular and robust solution.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional
    experience: [
      {
        name: 'University of Central University',
        description: 'Graduate Research Assistant, August 2019 - Present',
        /*link: 'https://github.com/RyanFitzgerald/devfolio'*/
      },
      {
        name: 'University of Central University',
        description: 'Graduate Teaching Assistant, CAP4720 - Computer Graphics, Fall 2020',
        /*link: 'https://github.com/RyanFitzgerald/devfolio'*/
      },
      {
        name: 'University of Central University',
        description: 'Graduate Teaching Assistant, CAP5610 - Computer Graphics, Fall 2019',
        /*link: 'https://github.com/RyanFitzgerald/devfolio'*/
      },
      {
        name: 'Capgemini',
        description: 'Senior Analyst, July 2016 - June 2017',
        /*link: 'https://github.com/RyanFitzgerald/devfolio'*/
      },
      {
        name: 'Capgemini',
        description: 'Analyst, April 2015 - June 2016',
        /*link: 'https://github.com/RyanFitzgerald/devfolio'*/
      },
      {
        name: 'Capgemini',
        description: 'Analyst Intern, December 2014 - March 2015',
        /*link: 'https://github.com/RyanFitzgerald/devfolio'*/
      },
    ],
    
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],

    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
  
