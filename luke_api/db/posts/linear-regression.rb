linear_regression_body = <<-POST
I am currently trying to learn some methods in data science and machine learning.
I'm hoping to write up some of the results as I go, putting them in my own words and notation.
In this post I will talk about linear regression.

===FOLD===

First, what is the general problem we wish to solve via linear regression?
Roughly speaking, suppose we have a series of input vectors leading to outputs.
We will call this information our _training data_.
Then we wish to find an affine functional that will as closely as possible map the input vectors to the outputs.

More precisely, let `math x^{(1)}, \\ldots, x^{(m)} \\in \\mathbb{R}^n` be our input vectors, and `math y^{(1)},\\ldots,y^{(m)}\\in\\mathbb{R}` be the correspoinding values.
Let `math h: \\mathbb{R}^n\\to\\mathbb{R}` be a affine functional.
That is, `math h` is of the form `math h(x) = c + f(x)` for some constant `math c \\in\\mathbb{R}` and some linear functional `math f`.
We define the cost function associated with `math h` to be
```math
J(h) = \\frac{1}{2m} \\sum_{i = 1}^m (h(x^{(i)}) - y^{(i)})^2.
```
Then our goal is to pick `math h` to minimize `math J(h)`.

To minimize this cost we must minimize the gradient of `math J(h)`.
Two aproaches to this are discussed below, but first let us calculate the gradient.
With respect to some basis we can identify `math \\mathbb{R}^n` with its dual.
We wish to treat the coeficients of this dual vector and the constant `math c` in a uniform maner, so by convention we identify `math h` with `math \\theta = (\\theta_0,\\ldots,\\theta_n)\\in\\mathbb{R}^{n+1}`.
This is done by setting `math x^{(i)}_0 = 1` for all `math i`, so `math c = \\theta_0`.
Let us write `math h_\\theta` for the functional corresponding to `math \\theta` and set `math J(\\theta) = J(h_\\theta)`.
Then treating `math \\theta` and `math x^{(i)}` as column vectors we have
```math
J(\\theta) = \\frac{1}{2m} \\sum_i (x^{(i)^T}\\theta - y^{(i)})^2.
```

Thus we calculate
```math
  \\begin{aligned}
    \\frac{\\partial}{\\partial \\theta_j}J(\\theta) &= \\frac1m \\sum_i (x^{(i)^T}\\theta - y^{(i)})x^{(i)}_j. \\\\
  \\end{aligned}
```
If we set `math X` to be `math (x^{(1)} | \\ldots | x^{(m)})`, the matrix whose columns are the `math x^{(i)}`, and let `math X_j` denote its `math j^{\\text{th}}` row, we may condense this expression to `math \\frac1m(X_jX^T\\theta - X_j^Ty)`.
Thus
```math
  \\nabla J(\\theta) = \\frac1m(XX^T\\theta - Xy).
```
There are two approaches to minimizing this gradient.

## The Normal Equation
Suppose `math XX^T` is invertible.
Then we may simply solve `math \\nabla J(\\theta) = 0` to derive
```math
  \\theta = (XX^T)^{-1}Xy.
```
If `math XX^T` is not invertible, we may instead use its so-called [pseudoinverse](https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_pseudoinverse).
This can be shown to still minimize `math J(\\theta)`.

## Gradient Descent

The idea here is that, rather than directly solving for the minimum of `math J(\\theta)`, we instead iteratively produce a sequence `math \\theta^0, \\theta^1, \\ldots` that converges to the `math \\theta` that minimizes `math J`.
Gradient descent can be viewed as a multi-dimensional version of Newton's method.
At each step of the iteration we must determine the direction in which `math J` is most rapidly decreasing, and take a step in that direction.

This direction is given by the vector `math -\\nabla J(\\theta)`.
Let us fix a step size `math \\alpha`.
Then starting with a choice of `math \\theta_0`, often `math 0`, we define `math \\theta_n = \\theta_{n-1} - \\alpha\\nabla J(\\theta_{n-1})`.
Plugging in our calculation of `math \\nabla J(\\theta)` we get
```math
  \\theta_n = \\theta_{n-1} - \\frac{\\alpha}{m}(XX^T\\theta_{n-1} - Xy).
```
We can now simply compute, say, `math \\theta_{1000}`, and `math h_\\theta` will be quite close to the `math h` we are looking for.
POST

Post.create!(
  title: "Linear Regression",
  url_name: "linear-regression",
  body: linear_regression_body,
  date: DateTime.parse('21/7/2017')
)
