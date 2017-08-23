Project.destroy_all

Project.create!(
  title: "GoodCode",
  description: "Goodcode is a site for reviewing technological tools, loosely based on Goodreads. It is a single-page, full-stack Rails app with a React frontend and secure user authentication. It also supports rendering of comments in Markdown.",
  github_url: "https://github.com/lwassink/good-code",
  short_github_url: "github.com/lwassink/good-code",
  site_url: "https://goodcode.herokuapp.com/#/",
  short_site_url: "goodcode.herokuapp.com/",
  technologies: "Ruby, Javascript, Rails, React, Redux",
  img: 'goodcode.png'
)

Project.create!(
  title: "Checkers",
  description: "This site is a playable checkers app. You play as red against the computer as black. I created it because I was interested in learning how to work with a drag-and-drop interface using React DnD.",
  github_url: "https://github.com/lwassink/checkers",
  short_github_url: "github.com/lwassink/checkers",
  site_url: "https://kingme.herokuapp.com/",
  short_site_url: "kingme.herokuapp.com/",
  technologies: "Ruby, Javascript, Rails, React, Redux, React DnD",
  img: 'checkers.png'
)

Project.create!(
  title: "Vim-lists",
  description: "When working in Vim, I missed auto-inserted list headers for bulleted and numbered lists.
  I created this Vim plugin to provide that functionality for text and markdown files.
  For Vim users: it is configured to be installed with Vundle or Pathogen.",
  github_url: "https://github.com/lwassink/vim-lists",
  short_github_url: "github.com/lwassink/vim-lists",
  technologies: "Vim, Vimscript",
  img: 'vim-lists.gif'
)

Project.create!(
  title: "Personal Site",
  description: "I used this site as an opportunity to learn a number of technologies I was interested in: It is served by an Nginx reverse-proxy server. Static assets are served by a node Express Server, while content is served by a Rails app. It is hosted on an Amazon EC2 instance.",
  site_url: "http://lukewassink.com",
  short_site_url: "lukewassink.com",
  github_url: "https://github.com/lwassink/personal-site",
  short_github_url: "github.com/lwassink/personal-site",
  technologies: "Ruby, Javascript, Rails, Express Server, Nginx, React, Redux",
  img: 'personal-site.gif'
)

Project.create!(
  title: "Functional Trie",
  description: "I recently spent some time learning various string processing algorithms and data structures.
  At the same time I was working through a course on functional programing in Scala.
  I decided to create a functional implementation of a Trie data structure using Scala.
  This is the result.
  It includes unit tests written in FunSpec",
  github_url: "https://github.com/lwassink/scalaTrie",
  short_github_url: "github.com/lwassink/scalaTrie",
  technologies: "Scala",
  img: 'scala-trie.png'
)
