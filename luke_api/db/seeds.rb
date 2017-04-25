Project.destroy_all

Project.create!(
  title: "Reversi",
  description: "Play against another player or an AI player.",
  github_url: "https://github.com/",
  site_url: "google.com",
  technologies: "ruby, rails, react, redux",
)

Project.create!(
  title: "Reversi2",
  description: "Lorum ipsum dolor sit amet. Other stuff And yet more stuff.Lorum ipsum dolor sit amet. Other stuff And yet more stuff.Lorum ipsum dolor sit amet. Other stuff And yet more stuff.",
  github_url: "https://github.com/",
  site_url: "google.com",
  technologies: "rails, ruby, akka, redux, scala",
)


Post.destroy_all

Post.create!(
  title: "First post",
  body: "# Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\n * Fusce `function(x)` dictum porttitor nulla, vel tempus sem congue eget.\n * Nulla a congue ligula. \n Donec eleifend diam malesuada erat euismod, vel bibendum nunc interdum. ===FOLD===Cras sit amet enim tempus, pharetra nulla in, lacinia sapien. Quisque eu arcu lacinia, eleifend mi eget, iaculis tellus. Maecenas placerat suscipit mollis. Nulla suscipit suscipit ante id venenatis. Aenean vitae ex a leo cursus scelerisque eget ac est. \n ```math c = \\pm\\sqrt{a^2 + b^2}\\in\\mathbb{R} ``` \nDuis commodo, `math x + y = z` sem a rhoncus porta, felis dui venenatis enim, at feugiat mi nisi ut ex. Vestibulum non sem interdum, pretium mauris a, mattis lacus. Nulla vel leo in quam dictum fringilla.\nAenean venenatis mi risus, non luctus nulla accumsan non. Integer sed maximus mi. Proin gravida, nisl in interdum sodales, tellus ipsum placerat ipsum, a hendrerit justo mi eget tellus. Nam tincidunt est et mauris molestie, sit amet bibendum elit viverra.\n ```js function two() {\n  return 2;\n}```\n Vivamus pulvinar id orci auctor semper.\n```scala def double(x: Int) = 2 * x ``` Maecenas a accumsan ligula. Donec a risuurna.  Fusce convallis sollicitudin finibus. Integer tempus luctus nunc, sit amet feugiat tortor consequat vel. Donec lacinia id magna ac volutpat. Suspendisse ullamcorper sem et arcu pellentesque, ut vestibulum ante vulputate."
)

big_o_body = <<-POST
A few weeks ago I gave a talk on the intuition behind the precise mathematical definition of Big-O notation.
In this post I'm going to record that talk, and possibly flush out a few points.
My plan is to begin with Big-O and related definitions in assymptotic analysis, review mathematical induction, and conclude by stating and motivating (though not fully proving) the Master Theorem.
I will try to balance intuition and precision: I'll always give you the precise mathematical statements and definitions, but I'll also try to say why definitions the are natural, and why you should believe the results, even if you wouldn't have come up with them.
===FOLD===

## Assymptotic analysis

The goal of Big-O analysis is to measure the rate of growth of a function.
The idea is, we aren't interested in how big a function is at any given point, but rather in how fast it's growing.
That is, if `math f = O(g)` and in general `math g(2x)` is about `math 4` times as big as `math g(x)` then `math f(2x)` should be no more then `math 4` times as big as `math f(x)`.
We are going to make this precise, but before we do, let's ask, why should we?
Why do we even want a precise definition for the statement `math f = O(g)`?
The answer is that, while an intuitive understanding can help us through a lot of questions, eventually we get to questions that are too tricky to answer without a precise definition.
Let me give an example.
Which of the following is true

```math
  \\begin{aligned}
    \\log_3(n) &= O(\\log_2(n)) \\\\
    \\log_2(n) &= O(\\log_3(n)) \\\\
    2^n &= O(3^n) \\\\
    3^n &= O(2^n)
  \\end{aligned}
```

The first and third equations are clearly true since `math \\log_3(n) < \\log_2(n)` for `math n > 1` and `math 2^n < 3^n` for `math n > 0`, but what about the other two equations?
They're not obviously true, but they're also not obviously false.
After all, `math \\log_2(n)` is bigger than `math \\log_3(n)`, but does it _grow_ more quickly?

Before we get to a precise definition of Big-O, let's give an intuitive one.
My intuitive definition is: `math f = O(g)` if `math f` is eventually dominated by a constant multiple of `math g`.
There are two key parts of this definition:
* *eventually* this is because we don't care what happens for small values of `math n` (any algorithm can sort `math 100` elements quickly).
We only care what eventually happens - that is, past some initial point.
* *constant multiple* we don't care how big `math f` is, only how fast it grows.
Well `math 2g` grows at exactly the same rate as `math g`, so for our purposes it doesn't matter which of them bounds `math f`.

How can we translate these definitions into math?
Eventually means past some point, which simply means, when `math n` is bigger than some number `math N`.
Further, `math f` is dominated by a constant multiple of `math g` if `math f(n) < Cg(n)` for some constant `math C > 0`.
Thus it is only natural that we use the following definition

### Definition.
We say `math f = O(g)` if there exist `math N, C > 0` such that `math f(n) < Cg(n)` for all `math n > N`.

With this definition in hand, let's check the cases we were uncertain about earlier.
It turns out that `math \\log_2(n) = O(\\log_3(n))`.
To see this, we require the change of base formula for logarithms:
```math
\\log_a(x) = \\frac{\\ln b}{\\ln a} \\log_b(x).
```
Thus
```math
\\log_2(n) = \\frac{\\ln 3}{\\ln 2} \\log_3(n),
```
so all we need to do is pick `math C > \\ln 3 / \\ln 2` and the definition is satisfied.

On the other hand, `math 3^n \neq O(2^n)`.
To see this, we will assume the contrary and derive a contradiction.
Assume `math 3^n = O(2^n)`.
Then `math 3^n < C 2^n` for `math n` larger than some `math N`.
Dividing both sides by `math 2^n` we get `math (3/2)^n < C` for `math n > N`, but `math 3/2 > 1`, so eventually `math (3/2)^n` will be larger than any constant.

## induction

We will now apply this definition to a more interesting example: mergesort.
First we need to review the concept of mathematical induction.
Induction can be thought of as the mathematical foundation of recursion.
Here's the idea: suppose we want to prove that some statement is true for all positive integers.
Induction tells us that it suffices to prove the statement for some number of small integers, i.e. base cases, and then show that if the statement is true for integers smaller than `math n`, it is true for `math n`.
If we can do that, we will have proved the statement is true in general.

Let's take an example.
Suppose we want to prove the clasic formula
```math
\\sum_{i=1}^n i = \\frac{n(n+1)}{2}.
```
We can easily check for a few small cases
```math
  \\begin{aligned}
    1 &= 1 &= (1 * 2)/2 \\\\
    1 + 2 &= 3 &= (2 * 3)/2 \\\\
    1 + 2 + 3 &= 6 &= (3 * 4)/2.
  \\end{aligned}
```
POST

Post.create!(
  title: "Assymptotic analysis and the Master Theorem",
  body: big_o_body
)

Post.create!(
  title: "Third post",
  body: "# Nam sit \n\n amet metus tellus. `math x + y = z` Donec condimentum orci eros," +
  " in tristique nunc pharetra id.===FOLD=== Nunc vel orci mauris." +
  " \n * Ut posuere venenatis tellus accumsan\n  * aliquet. Donec ut libero justo." +
  " \n * Fusce justo diam, pellentesque in dictum sit amet, posuere sit amet magna." +
  " \n\n Nulla ut [mauris](www.google.com) id nisi efficitur molestie eu vel magna."+
  " \n\n## Quisque orci turpis,\n\n iaculis laoreet ipsum eget, lobortis laoreet erat." +
  " \n\n### Nullam commodo \n\n est id nisl ultrices pellentesque."+
  " Cras in nunc sagittis, vulputate ante et, venenatis ligula." +
  " Donec et bibendum tortor."
)