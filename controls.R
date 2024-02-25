library(blogdown)
#new_site(theme = "wowchemy/starter-academic")

#### Site ####
# Check the site
check_site()
# Create root index
blogdown:::create_index()
# Install new hugo
blogdown::install_hugo("0.123.3")

# Serve the cite in local host
blogdown::serve_site()
# Stop serving the cite
blogdown::stop_server()

blogdown::check_config()

blogdown::config_Rprofile()

file.edit(".gitignore")

blogdown::check_gitignore()
blogdown::check_content()

#### Content ####
# Create a new blog post
blogdown::new_post(title = "Dynamic seeding praat script bundle", 
                   kind = '.Rmarkdown', 
                   subdir = "blog/")

blogdown::new_content(path = "publication/this-one", kind = "2")

blogdown::hugo_build(local=TRUE)

rstudioapi::navigateToFile("config/_default/config.yaml", line = 3)
blogdown::config_netlify()
blogdown::check_netlify()

blogdown::check_hugo()
blogdown::remove_hugo()

#### Personalize color themes and fonts ####
rstudioapi::navigateToFile("config/_default/params.yaml")

##### Edit your bio page ####
rstudioapi::navigateToFile("content/authors/admin/_index.md")

#### Import publications ####

rstudioapi::navigateToFile("config/_default/params.yaml")
rstudioapi::navigateToFile("config/_default/menus.yaml")

rstudioapi::navigateToFile("config/_default/config.yaml")

file.create("config/_default/menu.toml")
dir.create("content/research")
file.create("content/research/index.md")
file.create("content/research/conferences.md")
file.create("content/conference/_index.md")

file.edit("content/research/conferences.md")

#### Import publications ####
bibtex_2academic("my_publications.bib", "content/pub_2")
