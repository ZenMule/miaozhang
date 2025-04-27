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

#### Home page ####
rstudioapi::navigateToFile("content/_index.Rmarkdown")
blogdown::config_netlify()
blogdown::check_netlify()

blogdown::check_hugo()
blogdown::remove_hugo()

##### Edit your bio page ####
rstudioapi::navigateToFile("content/authors/admin/_index.md")

#### Import publications ####
bibtex_2academic("my_publications.bib", "content/pub_2")
