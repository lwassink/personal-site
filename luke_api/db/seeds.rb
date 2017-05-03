Project.destroy_all

Project.create!(
  title: "GoodCode",
  description: "GoodCode is a site for reviewing technological tools, loosely based on Goodreads. It is a single page, fullstack rails app with a React frontend and secure user authentication. It supports rendering of comments in Markdown.",
  github_url: "https://github.com/lwassink/good-code",
  short_github_url: "github.com/lwassink/good-code",
  site_url: "https://goodcode.herokuapp.com/#/",
  short_site_url: "goodcode.herokuapp.com/",
  technologies: "ruby, javascript, rails, react, redux",
)

Project.create!(
  title: "Personal Site",
  description: "I used this site as an opportunity to learn a number of technologies I was interested in. It is served by an nginx reverse-proxy server. Static assets are served by a node express server, while content is served by a rails app. It is hosted on an Amazon EC2 instance.",
  site_url: "https://lukewassink.com",
  short_site_url: "lukewassink.com",
  technologies: "ruby, javascript, rails, express server, nginx, react, redux",
)

Project.create!(
  title: "Checkers",
  description: "This site is a playable checkers App. I created it because I was interested in learning how to work with a drag-and-drop interface using React DnD.",
  github_url: "https://github.com/lwassink/checkers",
  short_github_url: "github.com/lwassink/checkers",
  site_url: "https://kingme.herokuapp.com/",
  short_site_url: "kingme.herokuapp.com/",
  technologies: "ruby, javascript, rails, react, redux, react-dnd",
)


Post.destroy_all

big_o_body = <<-POST
A few weeks ago I gave a talk on the intuition behind the precise mathematical definition of Big-O notation.
In this post I plan to record that talk, and possibly flesh out a few points.
My plan is to begin with Big-O and related definitions in asymptotic analysis, review mathematical induction, and use it to prove the asymptotic behavior of merge sort.
In a subsequent post I hope to explain the Master Theorem.

===FOLD===

## Asymptotic analysis

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
* **eventually** this is because we don't care what happens for small values of `math n` (any algorithm can sort `math 100` elements quickly).
We only care what eventually happens - that is, past some initial point.
* **constant multiple** we don't care how big `math f` is, only how fast it grows.
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

## Induction

We will now apply this definition to a more interesting example: merge sort.
First we need to review the concept of mathematical induction.
Induction can be thought of as the mathematical foundation of recursion.
Here's the idea: suppose we want to prove that some statement is true for all positive integers.
Induction tells us that it suffices to prove the statement for some number of small integers, i.e. base cases, and then show that if the statement is true for integers smaller than `math n`, it is true for `math n`.
If we can do that, we will have proved the statement is true in general.

Let's take an example.
Suppose we want to prove the classic formula
```math
\\sum_{i=1}^n i = \\frac{n(n+1)}{2}.
```
We can easily check for a few small cases
```math
  \\begin{aligned}
    1 &= 1 = (1 * 2)/2 \\\\
    1 + 2 &= 3 = (2 * 3)/2 \\\\
    1 + 2 + 3 &= 6 = (3 * 4)/2.
  \\end{aligned}
```
Clearly, however, we can't prove the statement for all integers by checking finitely many cases.
Instead we will use induction.
We have already checked the case `math n=1`.
This will serve as our base case.

Now we turn to the inductive step.
We assume the formula is true for integers smaller than `math n`, this is called the _induction hypothesis_, and prove it for `math n`.
Let's start with the left side
```math
  \\begin{aligned}
    \\sum_{i=1}^n i &= 1 + 2 + 3 + \\ldots + n \\\\
    &= (1 + 2 + 3 + \\ldots + (n-1)) + n \\\\
    &= \\sum_{i=1}^{n-1}i + n
  \\end{aligned}
```
By the induction hypothesis, this equals
```math
  \\frac{(n-1)n}{2} + n,
```
which simplifies to
```math
\\begin{aligned}
  \\frac{n^2 - n}{2} + n &= \\frac{n^2 - n}{2} + \\frac{2n}{2} \\\\
  &= \\frac{n^2 + n}{2} \\\\
  &= \\frac{n(n + 1)}{2}.
\\end{aligned}
```

Now let's take a look at merge sort.
Here's a simple implementation of merge sort in ruby, so we have something to refer to
```ruby
  def sort(array)
    n = array.length
    return array if n <= 1

    mid = n / 2
    left = array[0...mid]
    right = array[mid...n]
    merge(sort(left), sort(right))
  end

  def merge(left, right)
    merged = []
    until left.empty? || right.empty?
      merged << (left.first < right.first) ? left.pop : right.pop
    end
    merged + left + right
  end
```
Big-O is concerned with the worst case, so let's write `math T(n)` for the longest it could possibly take us to sort an array of length `math n`.
From the above code we can see that `math T(0) = T(1) = 2 = O(1)`, since if `math n=0\\text{ or }1` we hit the `return`.
Now let's consider a general array of length `math n`.
Sorting the array will recursively call `sort` on two arrays of length `math n/2` and then call `merge` on them.
The worst case for each of the recursive calls to `sort` is `math T(n/2)` (actually it's `math T(\\left\\lceil n/2\\right\\rceil)`, but that turns out not to matter very much, so we won't worry about it).
The worst case number of steps for `merge` is `math n`, which occurs if both left and right are emptied down to one element each before finishing the merge.

When `math n>1` the cost of a call to `sort` comes from the recursive calls to `sort` and the call to `merge`.
Adding these together we get
```math
  T(n) = 2T(n/2) + n.
```
We will use this formula to prove that `math T(n) = O(n\\log n)`.

We must prove that `math T(n) < Cn\\log n` for some constant `math C`.
As noted above, the time to sort an array of length `math 1` is independent of the particular array, so picking `math C` large enough we have `math T(n) < C`.
This is our base case.

We now assume the inequality holds for integers less than `math n` and prove it for `math n`.
Since `math n/2 < n` we have
```math
  \\begin{aligned}
    T(n) &= 2T(n/2) + n \\\\
    &< 2Cn/2\\log(n/2) + n \\\\
    &= Cn(\\log n - \\log 2) + n \\\\
    &= Cn(\\log n - 1) + n \\\\
    &= Cn\\log n + n - Cn \\\\
    &< Cn\\log n,
  \\end{aligned}
```
so the proof is done.
In my next post I will discuss the master theorem, which provides a very general solution to recurrences such as this one.
POST

Post.create!(
  title: "Assymptotic Analysis of Algorithms",
  url_name: "assymptotic-analysis",
  body: big_o_body
)

master_theorem_body = <<-POST
In a [previous post](/posts/asymptotic-analysis) I discussed Big-O notation and the assymptotic behavior of algorithms.
I introduced mathematical induction and proved that the runtime of merge sort is `math O(n\\log n)`.
In this post I will explain a very general result known as the Master Theorem which gives the asymptotic behavior of functions that satisfy certain types of recurrence relations.
===FOLD===

We first introduce Big-Theta notation.
We say `math f = \\Theta(g)` if `math f = O(g)` and `math g = O(f)`.
From the definition of Big-O, we see that this is equivalent to the following:
`math f = \\Theta(g)` if there exist positive constants `math N, C_1, \\text{ and } C_2` such that
```math
C_1g(n) < f(n) < C_2g(n) \\text{ when } n > N.
```
This can be interpreted as saying that `math f` and `math g` grow at the same rate.

Write `math T(n)` for the worst-case execution time of calling merge sort on an array of `math n` elements.
Then one can show that `math T(n)` satisfies `math T(n) = 2T(n/2) + n`.
Use this relation we were able to prove that `math T(n) = O(n\\log n)`.
The Master Theorem provides a general solution for algorithms that satisfy similar relations.
It is stated as follows.

**Master Theorem** Let `math a\\geq 1` and `math b\\geq 1` be constants and let `math f(n)` be a function.
Define `math T(n)` by
```math
T(n) = aT(n/b) + f(n),
```
where we assume `math T(1)` is a constant.
Then
1. If `math f(n) = \\Theta(n^{\\log_b a - \\epsilon})` for some `math \\epsilon > 0` then `math T(n) = \\Theta(n^{\\log_b a})`.
2. If `math f(n) = \\Theta(n^{\\log_b a})` then `math T(n) = \\Theta(n^{\\log_b a}\\log n)`.
3. If `math f(n) = \\Theta(n^{\\log_b a + \\epsilon})` for some `math \\epsilon > 0`, and if `math af(n/b) \\leq cf(n)` for some `math c<1`,  then `math T(n) = \\Theta(f(n))`.

Let's try to understand why this should be true.
The first step is to expand the recurrence relation used to define `math T` by repeatedly plugging it into itself.
We get
```math
\\begin{aligned}
  T(n) &= aT(n/b) + f(n) \\\\
  &= a(aT(n/b^2) + f(n/b)) + f(n) \\\\
  &= a^2T(n/b^2) + af(n/b) + f(n) \\\\
  &\\vdots \\\\
  &= a^kT(1) + a^{k-1}f(n/b^{k-1}) + \\cdots + af(n/b) + f(n),
\\end{aligned}
```
where `math k` is number such that `math n/b^k = 1`.
Solving, we get `math n = b^k` so `math k = \\log_b(n)`.
It is useful to rearrange `math a^k = a^{\\log_b(n)} = n^{\\log_b(a)}` (the reader can check the details).
This gives
```math
  T(n) = T(1)n^{log_ba} + \\sum_{j=1}^{log_b(n-1)} a^jf(n/b^j) + f(n).
```

This sum is to complex to evaluate in general.
Instead, we focus on three cases, which correspond to the three cases of the theorem.
They are

1. The first term dominates.
This happens when `math f` is small compared to `math n^{log_ba}`.
In this case we may simply ignore the parts involving `math f`, and we are left with `math T(n) = \\Theta(n^{log_ba})`.
2. The function `math f(n)` is calibrated so that each term is about the same size.
In this case we get the size of a term, `math n^{log_ba}` multiplied by the number of terms, `math log_b n`.
Thus `math T(n) = \\Theta(n^{log_ba}log n)`.
3. The last term, `math f(n)`, dominates.
This happens when `math f(n)` is large enough that we can ignore `math n^{log_ba}`, and when `math f(n)` grows quickly enough that we may ignore all the earlier terms of the form `math a^jf(n/b^j)`.
This growth is the significance of the condition `math af(n/b) \\leq cf(n)`.
In this case we simply have `math T(n) = \\Theta(f(n))`.

These three cases explain the cases in the theorem.
One source of a detailed proof is the [CLRS book on algorithms](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844).

## Examples

We conclude with two example uses of this theorem.
First, merge sort.
Recall that merge sort satisfies `math T(n) = 2T(n/2) + n`.
Putting this in the language of the Master Theorem we have `math a = b = 2` and `math f(n) = n`.
Thus `math n^{log_ba} = n^{log_22} = n^1 = n`, so `math f(n) = n^{log_ba}`, so we are in the second case of the theorem.
Thus `math T(n) = \\Theta(n\\log n)`.

Our final example is Strassen's algorithm for matrix multiplication.
A reader familiar with basic linear algebra will see that that the standard approach to multiplying two `math n\\times n` matrices requires `math \\Theta(n^3)` calculations.
This is because we must compute `math n^2` entries, and each entry requires computing the dot product of a row with a column, which involves `math n` multiplications and `math n-1` additions for `math \\Theta(n)` operations.
Strassen's clever approach involves breaking each matrix into `math 4` `math n/2 \\times n/2` pieces, preforming `math 7` multiplications on the pieces, and recombining them to derive the solution.
Again, refer to CLRS for details.
In any case, the recombining means adding together several `math n/2 \\times n/2` matrices.
Each such addition requires adding `math n^2/4` elements, so clearly the recombining takes `math \\Theta(n^2)` steps altogether.
The upshot is that Strassen's algorithm satisfies
```math
T(n) = 7T(n/2) + \\Theta(n^2).
```
We once again apply the Master Theorem, noting that in this case `math a = 7` and `math b = 2`.
Since `math log_2 4 = 2` we have `math \\log_2 7 > 2`, so `math n^{\\log_ba}` dominates `math n^2`.
Thus we are in case 1, so `math T(n) = \\Theta(n^{\\log_27}) \\approx \\Theta(n^{2.807})`.
This is smaller than `math n^3`, so Strassen's algorithm is an improvement over the naive approach.
POST

Post.create!(
  title: "The Master Theorem",
  url_name: "master-theorem",
  body: master_theorem_body
)

scala_trie_body = <<-POST

I recently became interested in understanding a number of common string processing algorithms and string data structures.
One of the most important string data structures is the Trie.
A Trie provides an efficient implementation of a symbol table when the keys are strings.
For an excellent, detailed discussion see [Algorithms](http://algs4.cs.princeton.edu/home/) by Sedgewick and Wayne.

===FOLD===

This basic idea is we store a tree whose nodes are key-value pairs.
The keys are characters, and the values can be any data type we choose.
The value corresponding to a given string should be stored in the node reached by starting at the root node and moving to it's child node corresponding to the first character of the string, then to it's child node corresponding to the second character, and so on.
If at any point there is no child node corresponding to the given character then the string is not contained in the table, so a null value should be returned.
This means that inserting a key-value pair may mean inserting several intermediate nodes with null values.

The main virtue of a Trie is that it allows insertion an lookup in time corresponding to the length of the keys.
Further, it supports easy, efficient implementations of more advanced functions, such as looking for all keys that begin with a given prefix string.
In their code, Sedgewick and Wayne even allow for the searching with a wildcard character which can stand in for arbitrary strings.

## Implementation

Inspiration for my code comes from the beautiful implementation by Sedgewick and Wayne which can be found on [their website](http://algs4.cs.princeton.edu/52trie/TrieST.java.html).
At the same time that I encountered their code I was also learning functional programming in Scala.
I immediately became interested in creating a functional implementation that would maintain a similar symbol table interface.
This proved surprisingly difficult, particularly when it comes to iterating through the keys.
Eventually I was able to create an implementation I am happy with.
It is contained in a single `Node` class.
It is purely functional; instances of `Node` are never mutated.
I also tried to write concise, idiomatic Scala, though I'm sure improvements could be made.
Here is the code.

```scala
class Node[Val](kids: Map[Char, Node[Val]], val contents: Option[Val]) {
  def children: Char => Node[Val] = kids withDefaultValue new Node[Val](Map(), None)

  def put(key: String, value: Val, pos: Int): Node[Val] =
    if (pos == key.length) new Node[Val](kids, Some(value))
    else {
      val char = key.charAt(pos)
      new Node[Val](kids updated(char, children(char).put(key, value, pos + 1)), contents)
    }

  def put(key: String, value: Val): Node[Val] = put(key, value, 0)

  def get(key: String, pos: Int): Node[Val] =
    if (pos == key.length) this else children(key.charAt(pos)).get(key, pos + 1)

  def get(key: String): Node[Val] = get(key, 0)

  def traverse[T](f: (Node[Val], Stream[T], String) => T, prefix: String): T = {
    val keys = kids.keys.toVector.sorted.toStream
    val vals = keys.map(key => children(key).traverse[T](f, prefix ++ key.toString))
    f(this, vals, prefix)
  }

  def toStream(node: Node[Val], v: Stream[Stream[String]], p: String): Stream[String] = {
    val base = if (node.contents.isEmpty) Stream() else Stream(p)
    v.foldLeft(base)(_ ++ _)
  }

  def keysWithPrefix(prefix: String): Stream[String] = get(prefix).traverse(toStream, prefix)
}
```

A few points of particular interest:
* At first I used separate classes for empty and non-empty nodes.
The use of a default value with `children` eliminated the need for this.
* Values are stored as options.
Thus if a key-value pair `(k, v)` is stored in a Trie `t` then `t.get(k)` will return `Some(v)`.
If a key `k'` is not contained in `t` or has no associated value then `t.get(k')` will return `None`.
In Scala, Options are a monoid with `map` and `flatMap` methods.
This means that it is possible to write very concise code that gracefully handles the possibility that a value may or may not be found for a given key.
* When searching for keys beginning with a given prefix (just use `t.keysWithPrefix("")` to get all keys) the keys are returned as a stream of strings in alphabetical order.
This allows the user to read only as many keys as they want in a very natural way.
For example, to read the first three keys would could simply use `t.keysWithPrefix("").take(3)`.
This code will only visit the first three nodes with values, then return.

## Symbol Table API

For ease of use I decided to wrap `Node` in a mutable `Trie` class.
```scala
class Trie[Val] {
  private var store = new Node(Map(), None)
  def put(key: String, value: Val): Unit = store = store.put(key, value, 0)
  def get(key: String): Option[Val] = store.get(key).contents
  def keysWithPrefix(pre: String): Stream[String] = store.keysWithPrefix(pre)
  def keys: Stream[String] = store.keysWithPrefix("")

  private class Node(kids: Map[Char, Node], val contents: Option[Val]) {
  // code...
  }
}
```
This also allows for the elimination of the type parameter `Val` from `Node`.

## Code

All the code from this post as well as scalatest tests for it can be found on github [here](https://github.com/lwassink/scalaTrie).
If you have suggestions for improvements, feel free to make a pull request or raise an issue.
POST

Post.create!(
  title: "A Functional Trie in Scala",
  url_name: "scala-trie",
  body: scala_trie_body
)
