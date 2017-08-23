master_theorem_body = <<-POST
In a [previous post](/posts/asymptotic-analysis) I discussed Big-O notation and the asymptotic behavior of algorithms.
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

This sum is too complex to evaluate in general.
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
  body: master_theorem_body,
  date: DateTime.parse('15/5/2017')
)
