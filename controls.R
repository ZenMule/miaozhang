library(blogdown)
new_site(theme = "yihui/hugo-xmin")

#### Check the site ####
blogdown::check_site()

# Install new hugo
#blogdown::install_hugo("0.123.3")


#### Serve the site ####
# start serving the site
blogdown::serve_site()

# Stop serving
blogdown::stop_server()

#### Build the site ####
blogdown::hugo_version()
blogdown::build_site()


file.edit(".gitignore")

#### Content ####
# Create a new blog post
blogdown::new_post(title = "Montreal Forced Aligner Tutorial (PAPPS)", 
                   kind = '.Rmarkdown', 
                   subdir = "event/",
                   author = getOption("blogdown.author"))

blogdown::new_content(path = "publication/this-one", kind = "2")

blogdown::hugo_build(local=TRUE)

rstudioapi::navigateToFile("content/_index.Rmarkdown", line = 3)
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
