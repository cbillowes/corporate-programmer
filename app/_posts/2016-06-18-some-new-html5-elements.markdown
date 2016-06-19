---
layout: post
title:  Some new HTML5 elements
date:   2016-06-18 13:26:44 +0200
flesch-score: 62.74
flesch-level: High Schooler
image:
  filename: html5-elements
  alt: HTML5 logo on background depicting new elements
  text: Logo
  website: W3C
  url: https://www.w3.org/html/logo/index.html
licence:
  name: CC BY 3.0
  url: https://creativecommons.org/licenses/by/3.0/deed.en
tags: technical
syntax-highlighting: on
---

The HTML5 specification has introduced more elements to make aid us with
semantic markup. I've discussed some of the
[design changes](/blog/design-changes-in-html5/)
as well as the introduction of
[structural elements](/blog/html5-structural-semantics/).

**Note**: There are many books, articles, wikis and posts relating to the elements.
I wanted to document my research by combining the semantics, usage and code
samples to act as a cheatsheet to personally use. I also won't be covering rich
media elements here.

## Main
You can use the `main` element to indicate the main content that is unique to
the document or expands upon the central topic or functionality of it.
You can only use it once.

It shouldn't contain content that is repeated site wide such as site logos,
navigational aids, sidebars, site footers or search forms (unless that is
the document's main purpose).

**Note**: It doesn't affect the document outline as it isn't considered as
sectioning content.

It must not be a child (or descendant) of `header`, `nav`, `article`, `aside`,
or `footer` elements.

<pre class="line-numbers"><code class="language-markup">
&lt;main&gt;
  &lt;h1&gt;Warcraft: The Beginning&lt;/h1&gt;
  &lt;p&gt;
    The peaceful realm of Azeroth stands on the brink
    of war as its civilization faces a fearsome race
    of invaders: orc warriors fleeing their dying
    home to colonize another.
  &lt;/p&gt;
  &lt;p&gt;
    Source snippet from &lt;cite&gt;IMDB&lt;/cite&gt;.
  &lt;/p&gt;
&lt;/main&gt;
</code></pre>

[MDN Reference](https://developer.mozilla.org/en/docs/Web/HTML/Element/main)

## Details
You can use the `details` element in conjunction with the `summary` element to
provide additional information to a user.

**Note**: Not all browsers currently support this feature.

<pre class="line-numbers"><code class="language-markup">
&lt;details&gt;
  &lt;summary&gt;World of Warcraft has a Wiki&lt;/summary&gt;
  &lt;p&gt;
    Check out the community driven World of Warcraft
    wiki at http://wowwiki.wikia.com/wiki/ to find
    out more about the Horde and the Alliance.
  &lt;/p&gt;
&lt;/details&gt;
</code></pre>

<details>
  <summary><b>Live Demo</b>.<br>If you can expand this then your browser supports this feature.</summary>
  <p>
    Check out the community driven World of Warcraft wiki at
    <a href="http://wowwiki.wikia.com/wiki/">Wiki</a> to find out more
    about the Horde and the Alliance.
  </p>
</details>

[MDN Reference](https://developer.mozilla.org/en/docs/Web/HTML/Element/details)

## Mark
You can use the `mark` element to highlight text that is relevant to a
particular context like highlighting keywords from a search result.

<pre class="line-numbers"><code class="language-markup">
&lt;h1&gt;Search Results&lt;/h1&gt;
&lt;p&gt;You searched for "spoilers"&lt;/p&gt;
&lt;p&gt;
  Beware of &lt;mark&gt;spoilers&lt;/mark&gt; when reading up
  on the "Warcraft: The Beginning" movie.
&lt;/p&gt;
</code></pre>

<p>
  <b>Live Demo</b> (default styling has been overridden).<br>
  Beware of <mark>spoilers</mark> when reading up on the
  "Warcraft: The Beginning" movie.
</p>

[MDN Reference](https://developer.mozilla.org/en/docs/Web/HTML/Element/mark)

## Time
You can use the `time` element to for dates and/or times in the
[Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) to
represent it so that people can read it and encode it so that user agents
can provide additional functionality such as:

* add reminders for birthdays and scheduled events to a user's calendar, or
* produce smarter search results from search engines.

<pre class="line-numbers"><code class="language-markup">
&lt;time&gt;08:30&lt;/time&gt;
&lt;time datetime="2016-06-18T08:30"&gt;June 18&lt;/time&gt;
</code></pre>

[MDN Reference](https://developer.mozilla.org/en/docs/Web/HTML/Element/time)

## Figure
You can use the `figure` element to display self contained content such as
diagrams, charts, photos, images, illustrations, artwork, code listings and
schemas.

The content can be captioned with the `figcaption` element but isn't required.

**Note**: It's position must be independent of the main flow of the document.
If you remove it, the flow shouldn't be affected.

<pre class="line-numbers"><code class="language-markup">
&lt;figure&gt;
  &lt;img
    src="medivh.jpg"
    alt="Photo of Medivh" &gt;
&lt;/figure&gt;
</code></pre>

[MDN Reference](https://developer.mozilla.org/en/docs/Web/HTML/Element/figure)

## Figcaption
You can use the `figcaption` element to caption or create a legend for a figure.

It's optional to use and can be placed as the first or last element
within the `figure` element.

<pre class="line-numbers"><code class="language-markup">
&lt;figure&gt;
  &lt;img
    src="medivh.jpg"
    alt="Photo of Medivh" &gt;
  &lt;figcaption&gt;
    Photo of Medivh, the Last Guardian of Tirisfal.
  &lt;/figcaption&gt;
&lt;/figure&gt;
</code></pre>

[MDN Reference](https://developer.mozilla.org/en/docs/Web/HTML/Element/figcaption)

---

## References

* [W3.org Wiki](https://www.w3.org/wiki/HTML_structural_elements)
* A Book Apart: [HTML5 for web designers](https://abookapart.com/products/html5-for-web-designers)
  by Jeremy Keith
* Some [World of Warcraft](http://wowwiki.wikia.com/) references were used in
  examples
