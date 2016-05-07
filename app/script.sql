---
---
use corposq0_database;

{% for post in site.posts %}
INSERT INTO posts (permalink, title, date_time, full_text) VALUES ('{{ post.url }}', '{{ post.title | titlecase | replace: "'", "''" }}', '{{ post.date | date: "%Y-%m-%d %T"  }}', '{{ post.content | strip_html | downcase| full_text_search }}');
{% endfor %}
