# Website maintenance guide

Changes go live automatically: push to GitHub → Netlify rebuilds the site in ~1 minute.
You never need to run a build command or upload files manually.

---

## Files you'll actually touch

```
data/
  publications.yaml     ← ADD/EDIT papers here

content/
  _index.markdown       ← homepage: bio, employment, education
  post/                 ← blog posts (one dated folder per post)
  event/                ← talks and tutorials (one dated folder per talk)

static/
  Miao_CV.pdf           ← drop a new file here to update your CV
  Miao_CV_chn.pdf
```

`content/publication.md` just calls a shortcode — leave it alone.

---

## Adding a publication

Open `data/publications.yaml`. Copy an existing block and add it to the right section
(`journal_articles`, `conference_proceedings`, `conferences`, or `dissertation`).

**Minimal example:**
```yaml
- year: "2027"
  status: published
  citation: >-
    **Zhang, M.** and Co-Author, A. Title of the paper. *Journal Name, vol(issue), pages*.
    [doi](https://doi.org/...)
```

**For a paper not yet published**, omit `year` and set `status` to one of:

| Value              | Badge shown         | Colour |
|--------------------|---------------------|--------|
| `under_review`     | Under review        | yellow |
| `rev_under_review` | Rev. under review   | yellow |
| `under_revision`   | Under revision      | red    |
| `in_prep`          | In prep.            | gray   |

**Markdown tips inside `citation`:**
- Bold your name: `**Zhang, M.**` (renders in blue automatically)
- Italic for journal/venue names: `*Journal of Phonetics*`
- Links: `[doi](https://doi.org/...)` or `[preprint](https://...)`
- The `>-` before the text lets you break long lines — the line breaks are ignored when displayed

---

## Writing a new blog post

1. Create a new folder under `content/post/` named `YYYY-MM-DD-short-title/`
2. Inside it, create `index.md` with this frontmatter:

```markdown
---
title: "Your Post Title"
author: Miao Zhang
date: 'YYYY-MM-DD'
slug: short-title
categories: []
tags: []
---

Write your post here in regular Markdown.
```

**From R** (easier): `blogdown::new_post("short-title", subdir = "post", ext = ".md")`

---

## Adding a new talk or tutorial

Same structure as posts, but under `content/event/`:

1. Create `content/event/YYYY-MM-DD-talk-title/index.md`
2. Use the template:

```markdown
---
title: "Talk Title"
author: Miao Zhang
date: 'YYYY-MM-DD'
slug: talk-title
categories: []
tags: []
---

Brief description.

**Venue:** Name of conference or institution
**Date:** Month DD, YYYY
**Location:** City, Country

[Slides](#link) | [Materials](#link) | [Video](#link)
```

To link slides or materials hosted in `static/`, use `/folder/filename.pdf` as the URL.

---

## Updating your homepage

Edit `content/_index.markdown` — it is plain Markdown.

- **Bio paragraph**: just edit the text
- **Research chips**: find the `<span class="research-chip">` lines and add/remove/rename them
- **Employment / Education**: edit the bullet lists at the bottom
- **CV files**: drop new PDFs into `static/` keeping the same filenames

---

## Previewing locally (optional)

In R: `blogdown::serve_site()` opens a live preview at `http://localhost:4321`.
Stop it with `blogdown::stop_server()`.

If you only have a few small changes, it's often faster to just push to GitHub
and check the Netlify deploy URL from the Netlify dashboard.

---

## Publishing

```bash
git add .
git commit -m "brief description of changes"
git push
```

Netlify detects the push and publishes automatically.
