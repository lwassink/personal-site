scala_trie_body = <<-POST

I recently became interested in understanding a number of common string-x processing algorithms and string data structures.
One of the most important string data structures is the trie.
A trie provides an efficient implementation of a symbol table if the keys are strings.
For an excellent, detailed discussion see [Algorithms](http://algs4.cs.princeton.edu/home/) by Sedgewick and Wayne.

===FOLD===

The basic idea is that we store a tree whose nodes are key&#8211;value pairs.
The keys are characters, and the values can be any data type we choose.
To find the value corresponding to a given string, start at the root node.
Move to the child node whose key equals the first character of the string.
Then from there move to the child node whose key equals the second character of the string, and so on.
If at any point there is no child node corresponding to a given character, then the string is not contained in the table, so a null value should be returned.
Inserting a key-value pair may mean inserting several intermediate nodes with null values.

The main virtue of a trie is that it allows insertion and lookup in time corresponding to the length of the keys.
Further, it supports easy, efficient implementations of more advanced functions, such as searching for all keys that begin with a given prefix string.
In their code, Sedgewick and Wayne even allow for searches that use a wildcard character, which can stand in for arbitrary strings.

## Implementation

Inspiration for my code comes from the beautiful Java implementation by Sedgewick and Wayne, which can be found on [their website](http://algs4.cs.princeton.edu/52trie/TrieST.java.html).
At the same time that I encountered their code I was also learning functional programming in Scala.
I was interested in creating a functional implementation of a trie that would maintain a similar symbol table interface.
This proved surprisingly difficult, particularly when it came to iterating through the keys.
Eventually I was able to create an implementation I was happy with.
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
  body: scala_trie_body,
  date: DateTime.parse('20/6/2017')
)
