library(blogdown)
new_site(theme = "wowchemy/starter-academic")
blogdown::serve_site()
blogdown::stop_site()

blogdown::new_post(title = "Dynamic seeding praat script bundle", 
                   ext = '.Rmarkdown', 
                   subdir = "blog/")

blogdown::new_content(title = "A compact tutorial on GAM in R", 
                   ext = '.Rmarkdown', 
                   subdir = "blog/")

blogdown::new_content()

blogdown::config_Rprofile()

file.edit(".gitignore")
blogdown::check_gitignore()
blogdown::check_content()

blogdown::hugo_build(local=TRUE)

rstudioapi::navigateToFile("config/_default/config.yaml", line = 3)
blogdown::config_netlify()
blogdown::check_netlify()

blogdown::check_hugo()
blogdown::remove_hugo()
rstudioapi::navigateToFile("config/_default/params.yaml")

blogdown::check_config()
rstudioapi::navigateToFile("content/authors/admin/_index.md")

rstudioapi::navigateToFile("content/home/demo-hero.md")
rstudioapi::navigateToFile("content/home/demo-links.md")
rstudioapi::navigateToFile("content/home/accomplishments.md")
rstudioapi::navigateToFile("content/home/experience.md")
rstudioapi::navigateToFile("content/home/contact.md")
rstudioapi::navigateToFile("content/home/featured.md")
rstudioapi::navigateToFile("content/home/projects.md")
rstudioapi::navigateToFile("content/home/gallery.md")
rstudioapi::navigateToFile("content/home/skills.md")
rstudioapi::navigateToFile("content/home/tags.md")
rstudioapi::navigateToFile("content/home/about.md")
rstudioapi::navigateToFile("content/authors/admin/_index.md")
rstudioapi::navigateToFile("config/_default/params.yaml")
rstudioapi::navigateToFile("config/_default/menus.yaml")
blogdown::check_site()

rstudioapi::navigateToFile("config/_default/config.yaml")

file.create("config/_default/menu.toml")
dir.create("content/research")
file.create("content/research/index.md")
