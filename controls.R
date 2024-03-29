library(blogdown)
#new_site(theme = "wowchemy/starter-academic")


#### Check the site ####
blogdown::check_site()

# Install new hugo
#blogdown::install_hugo("0.123.3")


#### Serve the cite ####
blogdown::serve_site()
# Stop serving the cite
blogdown::stop_server()


file.edit(".gitignore")

#### Content ####
# Create a new blog post
blogdown::new_post(title = "Preboundary vowel lengthening in Mandarin Chinese, English, and Japanese", 
                   kind = '.Rmarkdown', 
                   subdir = "slides/",
                   author = getOption("blogdown.author"),
                   slug = "PBVL")

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


file.create("R/build.R")
file.edit("R/build.R")

file.edit("content/research/conferences.md")

#### Import publications ####
bibtex_2academic("my_publications.bib", "content/pub_2")
