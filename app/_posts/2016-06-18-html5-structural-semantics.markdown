---
layout: post
title:  HTML5 structural semantics
date:   2016-06-18 12:02:38 +0200
flesch-score: 55.95
flesch-level: High Schooler
image:
  filename: html5-structural-semantics
  alt: HTML5 logo on background depicting structural semantics
  text: Logo
  website: W3C
  url: https://www.w3.org/html/logo/index.html
licence:
  name: CC BY 3.0
  url: https://creativecommons.org/licenses/by/3.0/deed.en
tags: technical
syntax-highlighting: on
---

In 2005 [Google sampled](https://developers.google.com/webmasters/state-of-the-web/2005/)
over a billion documents. This highlighted popular class names,
elements, attributes and other related metadata.

The data surfaced many structural requirements related to `div`'s with
classes of `nav`, `header`, `footer`, `sidebar` etc.

As HTML5 is not intended to be used to markup documents for presentation, it
rather aims to add meaning to the elements within a document in order to
enhance:

* accessibility,
* search indexing,
* internationalization and
* interoperability.

Although the `div` is still useful to enhance the layout of a document, the
newly added structural elements in HTML5 will aid the semantic structuring
of your page.

**Note**: There are many books, articles, wikis and posts relating to the elements.
I wanted to document my research by combining the semantics, usage and code
samples to act as a cheatsheet to personally use.

## Header
You can use the `header` element to group introductory content or navigational
aids.

It's intended to contain headings but can also be used to wrap a section's
table of contents, site navigation, a search form or any relevant logos and so on.

<pre class="line-numbers"><code class="language-markup">
&lt;header&gt;
  &lt;h1&gt;Alliance vs Horde&lt;/h1&gt;
  &lt;p&gt;
    Which side are you on? The Alliance or the Horde?
    Both sides have equally captivating
    stories to tell.
  &lt;/p&gt;
&lt;/header&gt;
</code></pre>

<aside>
  <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/header">MDN Reference</a>
</aside>

## Footer
You can use the `footer` element in a document or many sections to
contain:

* copyright information,
* contact details,
* author details,
* navigational aid like a sitemap,
* back to the top of the page links, or
* related references.

<pre class="line-numbers"><code class="language-markup">
&lt;footer&gt;
  The content on the World of Warcraft Wiki is
  licensed under CC-BY-SA.
&lt;/footer&gt;
</code></pre>

**Note**: It doesn’t affect the document outline as it isn’t considered
as sectioning content.

<aside>
  <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/footer">MDN Reference</a>
</aside>

## Nav
You can use the `nav` element in your document or many sections to contain:

* site wide navigation bar containing links to other pages or sections within
  a page,
* sections that contain additional navigation aids, and
* footer navigation containing common terms of service, privacy policy and
  copyright links.

<pre class="line-numbers"><code class="language-markup">
&lt;header&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;History&lt;/li&gt;
      &lt;li&gt;Alliance&lt;/li&gt;
      &lt;li&gt;Horde&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;
</code></pre>

<aside>
  <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/nav">MDN Reference</a>
</aside>

## Article
You can use the `article` element for sections of content that can be
independently distributed or reused such as:

* forum or blog post,
* article for a magazine, newspaper or online website, or
* content submitted by a user.

<pre class="line-numbers"><code class="language-markup">
&lt;article&gt;
  &lt;header&gt;
    &lt;h1&gt;For the Horde&lt;/h1&gt;
    &lt;p&gt;
      &lt;time
        pubdate
        datetime="2016-06-18T08:30:00.00"&gt;
      &lt;/time&gt;
    &lt;/p&gt;
  &lt;/header&gt;
  &lt;p&gt;
    The Horde is made up of Orcs, Forsaken, Tauren,
    Trolls, Blood Elves, Goblins, and most recently,
    Pandaren (Huojin).
  &lt;/p&gt;
&lt;/article&gt;
</code></pre>

<aside>
  <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/article">MDN Reference</a>
</aside>

## Section
You can use the `section` element for generic sections of content that need to
be explicitly listed in the document outline. You can then group content based
on a theme or context such as:

* introductions,
* news items,
* contact information, and
* numbered sections of a thesis.

<pre class="line-numbers"><code class="language-markup">
&lt;article&gt;
  &lt;section&gt;
    &lt;h1&gt;King of the Alliance&lt;/h1&gt;
    &lt;p&gt;
      The Supreme Allied Commander of the humans, also
      known as the king. This title is typically given
      to a hereditary, male monarch of a nation, region
      or state.
    &lt;/p&gt;
  &lt;/section&gt;
  &lt;section&gt;
    &lt;h1&gt;Warchief of the Horde&lt;/h1&gt;
    &lt;p&gt;
     Similar to the king of the humans, the Warchief
     is the military leader of the Orcish Horde.
    &lt;/p&gt;
  &lt;/section&gt;
&lt;/article&gt;
</code></pre>

<aside>
  <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/section">MDN Reference</a>
</aside>

## Aside
You can use the `aside` element for sections of content that is seperate from
but relates to its surrounding content such as:

* quotes,
* sidebars,
* related articles,
* advertising, or
* navigational aid.

<pre class="line-numbers"><code class="language-markup">
&lt;article&gt;
  &lt;h1&gt;Lore&lt;/h1&gt;
  &lt;p&gt;
    Blizzard's background story to the Warcraft
    series of games.
  &lt;/p&gt;
&lt;/article&gt;
&lt;aside&gt;
  &lt;h1&gt;Warcraft: The Beginning&lt;/h1&gt;
  &lt;p&gt;
    A movie directed by Duncan Jones, produced
    by Legendary Pictures, and distributed by
    Universal Pictures.
  &lt;/p&gt;
&lt;/aside&gt;
</code></pre>

<aside>
  <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/aside">MDN Reference</a>
</aside>

## Compatibility
Browsers that don't support the new elements will render them as a `span`. If
you want to enforce compatibility with non-modern browsers you can style
these elements in CSS to be block-level elements.

<pre class="line-numbers"><code class="language-css">
article, section, aside, nav, header, footer {
  display: block;
}
</code></pre>

Unfortunately some legacy browsers don't apply styling to unknown elements.
If you need to support them, you could reference the
[HTML5 Shiv JavaScript](https://github.com/aFarkas/html5shiv)
for display and printing of your documents.

<pre class="line-numbers"><code class="language-markup">
&lt;!--[if lt IE 9]&gt;
    &lt;script src="html5shiv.js"&gt;&lt;/script&gt;
&lt;![endif]--&gt;
</code></pre>

## My final thoughts
When I tested the document outline of my blog I realized that I have been
using these elements incorrectly as they provided little to no and often
incorrect meaning to the structure of my documents. It's amazing what a bit of
research can teach you.

You can test the structure of your documents using Document Outline tools.
Unfortunately I cannot vouch for the correctness of these tools.

* [Online tester](https://gsnedders.html5.org) by gsnedders
* [Chrome Extension](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo?hl=en)
  called HTML5 Outliner by Dominykas Blyžė
* [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/html5_outliner/)
  called HTML5 Outliner by arky

It can be tricky to know what to use and when. HTML5 Doctor has a great
flowchart to help save time when making those decisions. They provide an
"easy-to-understand HTML5 sectioning element flowchart to
help you get to grips with some of the new elements in HTML5."

{% include posts/image-caption.html
     url="/img/posts/html5-structural-semantics/html5-doctor-flowchart.jpg"
     link="http://html5doctor.com/downloads/h5d-sectioning-flowchart.png"
     description="HTML5 Sectioning Flowchart by
        <a href='http://html5doctor.com'><strong>HTML5 Doctor</strong></a>.
        There is also a
        <a href='http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf'>PDF Version</a>."
%}

---

### References

* [W3.org Wiki](https://www.w3.org/wiki/HTML_structural_elements)
* [Let's Talk about Semantics](http://html5doctor.com/lets-talk-about-semantics/)
  by HTML5 Doctor
* [HTML5 Semantics](https://www.smashingmagazine.com/2011/11/html5-semantics/)
  by Bruce Lawson at Smashing Magazine
* [World of Warcraft](http://wowwiki.wikia.com/) references used in examples
