const projects = {
  1: {
    title: "Reversi",
    description: "Play against another player or an AI player.",
    github_url: "https://github.com/",
    live_url: "google.com",
    technologies: "ruby, rails, react, redux",
    id: 1
  },
  2: {
    title: "Reversi",
    description: "Lorum ipsum dolor sit amet. Other stuff And yet more stuff.Lorum ipsum dolor sit amet. Other stuff And yet more stuff.Lorum ipsum dolor sit amet. Other stuff And yet more stuff.",
    github_url: "https://github.com/",
    live_url: "google.com",
    technologies: "rails, ruby, akka, redux, scala",
    id: 2
  }
};

const posts = {
  1: {
    id: 1,
    title: "First post",
    date: new Date("2015-03-25"),
    body: "# Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n * Fusce `function(x)` dictum porttitor nulla, vel tempus sem congue eget.\n * Nulla a congue ligula. \n Donec eleifend diam malesuada erat euismod, vel bibendum nunc interdum. ===FOLD===Cras sit amet enim tempus, pharetra nulla in, lacinia sapien. Quisque eu arcu lacinia, eleifend mi eget, iaculis tellus. Maecenas placerat suscipit mollis. Nulla suscipit suscipit ante id venenatis. Aenean vitae ex a leo cursus scelerisque eget ac est. \n ```math c = \\pm\\sqrt{a^2 + b^2}\\in\\mathbb{R} ``` \nDuis commodo, `math x + y = z` sem a rhoncus porta, felis dui venenatis enim, at feugiat mi nisi ut ex. Vestibulum non sem interdum, pretium mauris a, mattis lacus. Nulla vel leo in quam dictum fringilla.\nAenean venenatis mi risus, non luctus nulla accumsan non. Integer sed maximus mi. Proin gravida, nisl in interdum sodales, tellus ipsum placerat ipsum, a hendrerit justo mi eget tellus. Nam tincidunt est et mauris molestie, sit amet bibendum elit viverra.\n ```js function two() {\n  return 2;\n}```\n Vivamus pulvinar id orci auctor semper.\n```scala def double(x: Int) = 2 * x ``` Maecenas a accumsan ligula. Donec a risuurna.  Fusce convallis sollicitudin finibus. Integer tempus luctus nunc, sit amet feugiat tortor consequat vel. Donec lacinia id magna ac volutpat. Suspendisse ullamcorper sem et arcu pellentesque, ut vestibulum ante vulputate."
  },
  2: {
    id: 2,
    title: "Second post",
    date: new Date("2016-03-12"),
    body: "Vestibulum nunc nisi, dignissim ut urna quis, fringilla egestas neque. Vivamus vel enim vestibulum, ullamcorper ligula vitae, pulvinar quam. Proin quam nisl, venenatis a aliquet et, porttitor sed metus. Integer maximus massa ut enim molestie, dapibus condimentum dolor pulvinar. Vestibulum vehicula iaculis eros, sit amet mattis nulla fringilla non. Maecenas nulla lacus, interdum quis elit non, sagittis iaculis mi. Vivamus luctus suscipit consequat. Cras vel euismod ipsum. Morbi lacinia congue finibus.\nVestibulum quis erat in lorem interdum tincidunt in eget lacus.===FOLD=== Etiam varius turpis ac dolor imperdiet congue. Aenean id facilisis sem, sit amet molestie dui. Ut in libero vitae nisl pretium efficitur. Proin nisl urna, pretium et erat quis, auctor vulputate nisi. Pellentesque sed finibus felis, eget rhoncus felis. Sed scelerisque ex eu pretium auctor. Praesent tempor laoreet leo vel placerat. Curabitur nibh justo, lobortis in rutrum sed, dapibus at ex. Etiam eget est at lectus elementum cursus. Etiam sit amet pellentesque mi. Vivamus dapibus, mi eget porta venenatis, libero quam consequat turpis, nec eleifend purus ligula sit amet libero. Cras interdum metus nec congue posuere. Etiam id consectetur tortor. Sed aliquet metus placerat, pellentesque mi vel, tempus dolor. Nullam vel tortor id augue eleifend dapibus vel et orci."
  },
  3: {
    id: 3,
    title: "Third post",
    date: new Date("2017-05-14"),
    body: "Nam sit <p>Hi there</p> amet metus tellus. `math x + y = z` Donec condimentum orci eros, in tristique nunc pharetra id.===FOLD=== Nunc vel orci mauris. Ut posuere venenatis tellus accumsan aliquet. Donec ut libero justo. Fusce justo diam, pellentesque in dictum sit amet, posuere sit amet magna. Nulla ut mauris id nisi efficitur molestie eu vel magna. Quisque orci turpis, iaculis laoreet ipsum eget, lobortis laoreet erat. Nullam commodo est id nisl ultrices pellentesque. Cras in nunc sagittis, vulputate ante et, venenatis ligula. Donec et bibendum tortor."
  }
};

const preloadedState = {
  projects,
  posts
};

export default preloadedState;
