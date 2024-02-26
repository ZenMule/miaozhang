---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  #- block: skills
  #  content:
  #    title: Skills
  #    text: ''
      # Choose a user to display skills from (a folder name within `content/authors/`)
  #    username: admin
  #  design:
  #    columns: '1'
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Nov 2024
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Post-doc
          company: Department of Computational Linguistics, University of Zurich
          company_url: 'https://www.cl.uzh.ch/en.html'
          company_logo: uzh_logo
          location: Zurich, Switzerland
          date_start: '2023-11-20'
          date_end: ''
          description: |-
              Project: Universals and variation in speech production
    design:
      columns: '2'
  #- block: accomplishments
  #  content:
  #    # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
  #    title: 'Accomplish&shy;ments'
  #   subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
  #    date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #    items:
  #      - certificate_url: https://www.coursera.org
  #        date_end: ''
  #        date_start: '2021-01-25'
  #        description: ''
  #        icon: coursera
  #        organization: Coursera
  #        organization_url: https://www.coursera.org
  #        title: Neural Networks and Deep Learning
  #        url: ''
  #  design:
  #    columns: '2'
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 4
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: The phonetics-prosody interface
          tag: pho-pro-inter
        - name: The phonetics of Changsha Xiang
          tag: csx
        - name: VoxCommunis Corpus
          tag: VoxCommunis
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  #- block: markdown
  #  content:
  #    title: Gallery
  #    subtitle: ''
  #    text: |-
  #      {{< gallery album="demo" >}}
  #  design:
  #    columns: '1'
  # - block: collection
  #  id: featured
  #  content:
  #    title: Featured Publications
  #    filters:
  #      folders:
  #        - publication
  #      featured_only: true
  #  design:
  #    columns: '2'
  #    view: card
  - block: collection
    id: publications
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '2'
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: compact
  #- block: tag_cloud
  #  content:
  #    title: Popular Topics
  #  design:
  #    columns: '2'
  #- block: contact
  #  id: contact
  #  content:
  #    title: Contact
  #    subtitle:
  #    text: |-
  #      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
      # Contact (add or remove contact options as necessary)
  #    email: test@example.org
  #    phone: 888 888 88 88
  #    appointment_url: 'https://calendly.com'
  #    address:
  #      street: 450 Serra Mall
  #      city: Stanford
  #     region: CA
  #      postcode: '94305'
  #      country: United States
  #      country_code: US
  #    directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
  #    office_hours:
  #      - 'Monday 10:00 to 13:00'
  #      - 'Wednesday 09:00 to 10:00'
      # Choose a map provider in `params.yaml` to show a map from these coordinates
  #    coordinates:
  #      latitude: '37.4275'
  #      longitude: '-122.1697'  
  #    contact_links:
  #      - icon: twitter
  #        icon_pack: fab
  #        name: DM Me
  #        link: 'https://twitter.com/Twitter'
  #      - icon: skype
  #        icon_pack: fab
  #        name: Skype Me
  #        link: 'skype:echo123?call'
  #      - icon: video
  #        icon_pack: fas
  #        name: Zoom Me
  #        link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
  #    autolink: true
      # Email form provider
  #    form:
  #      provider: netlify
  #     formspree:
  #        id:
  #      netlify:
  #        # Enable CAPTCHA challenge to reduce spam?
  #        captcha: false
  #  design:
  #    columns: '2'
---
