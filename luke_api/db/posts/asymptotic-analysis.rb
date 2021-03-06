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
Here's a simple implementation of merge sort in Ruby, so we have something to refer to
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
  title: "Asymptotic Analysis of Algorithms",
  url_name: "asymptotic-analysis",
  body: big_o_body,
  date: DateTime.parse('15/4/2017')
)
