regularization_body = <<-POST
This will be a brief post on regularization.
Regularization is a technique that can prevent over-fitting when we choose to use higher order features.
This is achieved through an adjustment to the cost function.

===FOLD===

To more precisely state the situation, suppose we are given training data `math (x^{(1)}, y^{(1)}),\\ldots,(x^{(n)}, y^{(n)})`.
Perhaps `math y` does not depend linearly on `math x`.
To model this situation, we may augment `math x` by introducing so-called computed features.
Typically these are polynomial in `math x`.
For example, given `math x = (x_1, x_2)` we may instead fit `math y` to `math (x_1, x_2, x_1^2, x_2^2, x_1x_2)`.
Of course we could extend this by adding in even higher order terms.

Clearly as we add computed features, the dimension of the parameter vector `math \\theta` (see my previous post on [linear regression](/posts/linear-regression)) will grow very rapidly.
Thus we run the danger of over-fitting.
That is, of training a model that will very precisely fit the training data, but may potentially be quite inacurate on new data.
We could try to eyeball our data and select only those higher order features that are likely to be important.
However, as the number of features grows, this quickly becomes impractical, if not impossible.
Instead, we need an algorithmic way to select some features as significant exclude others, perhaps by setting their parameters close to zero.

This goal is achieved by augmenting the cost function `math J(\\theta)` as follows:
```math
  J(\\theta) = \\frac1m\\sum_{i=1}^m (h_\\theta(x^{(i)}) - y^{(i)})^2 + \\frac{\\lambda}{2m}\\sum_{j=1}^n\\theta_j^2
```
where `math n` is the number of features and `math m` is the number of points in our set of training data.
This essentially adds a cost to increasing the size of each parameter in `math \\theta`, meaning that when we run gradient descent we will tend to shrink these parameters to near zero unless there is a compensating increase in cost.
That is, roughly speaking, parameters corresponding to insignificant features will tend towards zero, and only the significant features will remain.
Note that we do not penalize the constant term `math \\theta_0`, so our sum starts from `math 1`.
Further, note that a vectorized form of this equation can be given by writing the last term as `math \\frac{\\lambda}{m}\\theta^T\\theta`.

We conclude by recording the updated gradient of `math J(\\theta)`.
We have
```math
  \\frac{\\partial}{\\partial \\theta_i}\\left(\\frac{\\lambda}{2m}\\sum_{j=1}^n\\theta_j^2\\right) =
  \\begin{cases}
    0 & \\text{ if } i = 0 \\\\
    \\frac{\\lambda\\theta_i}{m} & \\text{ otherwise}
  \\end{cases}.
```
Thus
```math
  \\nabla J(\\theta) = \\frac1m\\left[XX^T\\theta - Xy + \\lambda L \\theta\\right]
```
where `math L` is a diagonal matrix with a zero in the first diagonal entry and ones in the remaining diagonal entries.

Setting `math \\nabla J(\\theta) = 0` and solving for `math \\theta` we get the following updated update form of the normal Equation
```math
  \\theta = \\left(XX^T + \\lambda L\\right)^{-1}Xy.
```
If we similary update the formula for gradient descent we get
```math
  \\begin{aligned}
  \\theta_{n+1} &= \\theta_n - \\frac{\\alpha}{m}\\left[(XX^T + \\lambda L)\\theta_n - Xy\\right] \\\\
  &= (1 - \\frac{\\alpha\\lambda}{m}L)\\theta_n - \\frac{\\alpha}{m}X(X^T\\theta_n - y).
  \\end{aligned}
```
POST

Post.create!(
  title: "Regularization",
  url_name: "regularization",
  body: regularization_body,
  date: DateTime.parse('25/7/2017')
)
