library(blogdown)
new_site(theme = "yihui/hugo-xmin")

#### Check the site ####
check_site()

#### Serve the site ####
# start serving the site
serve_site()

# Stop serving
stop_server()

#### Build the site ####
hugo_version()
build_site()


file.edit(".gitignore")

#### Content ####
# Create a new blog post
new_post(title = "Montreal Forced Aligner Tutorial", 
         ext = '.md', 
         date = "2025-4-28",
         subdir = "event/",
         author = "Miao Zhang",
         slug = "MFA-tutorial")

# Create new slides
new_post(title = "Montreal Forced Aligner Tutorial", 
         ext = '.Rmd', 
         date = "2025-04-28",
         subdir = "static/",
         author = "Miao Zhang",
         slug = "MFA-tutorial")

# Force render the slides
rmarkdown::render("content/static/2025-04-28-montreal-forced-aligner-tutorial/index.Rmd")



new_content(path = "publication/this-one", kind = "2")

hugo_build(local=TRUE)

#### Content editting ####
rstudioapi::navigateToFile("~/Documents/GitHub/miaozhang/content/event/2025-04-27-montreal-forced-aligner-tutorial-papps/index.Rmd")
config_netlify()
check_netlify()

check_hugo()
remove_hugo()

##### Edit your bio page ####
rstudioapi::navigateToFile("content/authors/admin/_index.md")

#### Import publications ####
bibtex_2academic("my_publications.bib", "content/pub_2")
