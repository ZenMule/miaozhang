---
title: 'Version Control for Linguists: A Practical Guide to Git'
author: Miao Zhang
date: 2025-04-28
slug: "Git-guide-linguists"
categories: []
tags: []
editor_options: 
  markdown: 
    wrap: 72
---



## Part 1: Why Git?

### Introduction

Version control is a system that records changes to a file or set of
files over time, allowing you to recall specific versions later. Git is
a popular and powerful version control system, and it's essential for
academic research, especially in collaborative and data-intensive fields
like linguistics.

## Pain Points in Linguistic Research (and how Git helps)

Linguistics PhD students often face challenges that Git can help solve:

-   **Managing multiple versions** of papers, theses, and data files:
    Git helps you avoid the "final_final_really_final.docx" problem by
    tracking every change.
-   **Collaborating** with supervisors or other researchers: Git
    facilitates seamless collaboration on shared documents or
    code.Tracking changes: Git provides a clear history of how your work
    has evolved.
-   **Experimenting** with different analyses: Create branches to
    explore new ideas without affecting your main work.Reverting to
    previous versions: Easily undo mistakes or return to an earlier
    state of your project.
-   **Backing up** your work: Remote repositories (like GitHub,
    BitBucket) provide secure backups.
-   **Managing** code: Git is crucial for managing scripts for corpus
    analysis, statistical modeling, or other computational tasks.

Analogy: Think of Git as a way to track the evolution of a linguistic
theory. You can see how the theory developed over time, which changes
were made at each stage, and who made them. Or, consider the stages of
corpus annotation; Git can track each layer of annotation and who
contributed it.

## Part 2: Getting Started with Git

### Installation

Git has a comprehensive user guide
<a href="https://git-scm.com/" target="_blank">here</a>. You can
download Git from the official website: <https://git-scm.com/>. Follow
the instructions for your operating system (Windows, macOS, or Linux).

### Basic Concepts

- **Repository (Repo)**: A directory that Git tracks. You initialize a
    repo with git init. (The product that you are going to make)

- **Working Directory**: The files you are currently working on. (Your factory where the product is manufactured)

- **Staging Area (Index)**: A place to prepare changes for a commit. You
    add files to the staging area with `git add`. (Take your products to the port)

- **Commit**: A snapshot of your changes. You create a commit with
    `git commit -m <Your descriptive commit message>`. (Ship your products out)

### Your First Commit

1. Create a new directory for your project:


``` bash
mkdir <path/to/my_project>
cd <path/to/my_project>
```

2. Initialize a Git repository in that directory


``` bash
git init
```

The output will look something like this:


``` bash
Initialized empty Git repository in /path/to/your/my_project/.git/
```

3. Create a file (e.g., `README.md`):


``` bash
echo "\# My Linguistics Project" \> README.md
```

4. Add the file to the staging area:


``` bash
git add README.md
```

5. Commit the changes:


``` bash
git commit -m "Initial commit: Added README"
```

The output will look something like this:


``` bash
[main (root-commit) 8f42b21] Initial commit: Added README 1 file changed, 1 insertion(+) create mode 100644 README.md
```

## Part 3: Essential Git Operations

### Checking the Status

Use git status to see the state of your working directory and staging area:


``` bash
git status
```

If you've just created the repo and added the README, the output will look something like:


``` bash
On branch main
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```

### Viewing History 

Use `git log` to see the commit history

### Useful options:

- `git log --oneline`: Displays each commit in a single line.
- `git log --graph`: Shows the commit history as a graph, which is helpful for visualizing branches
- `git log --author="Your Name"`: Filters the log to show commits by a specific author.git log --author="Your Name"

### Ignoring Files

Create a `.gitignore` file to tell Git which files to ignore. This is useful for temporary files, build outputs, and large data files. 

Example `.gitignore` (for a LaTeX project):


``` bash
*.aux
*.log 
*.pdf
*.blg
*.bbl
```

### Making Changes and Committing Again

1. Modify a file (e.g., edit `README.md` - add a line).
2. Add the changes to the staging area: `git add README.md` 
3. Commit the changes: `git commit -m`"Update README with more details" 

### Comparing changes

- `git diff`: Shows the differences between the working directory and the staging area.
- `git diff --cached`: Shows the differences between the staging area and the last commit.

## Part 4: Branching and Merging (Collaboration and Experimentation)

### Branches

Branches are independent lines of development. They are useful for: 

- Working on new features without affecting the main
work.
- Collaborating on different aspects of a project.
- Experimenting with different versions of a paper.

### Basic Branch Operations

- List branches:


``` bash
git branch
```

- Switch to a branch:


``` bash
git checkout main \# or master
```

- Create and switch to a new branch:


``` bash
git checkout -b new_branch_name
```

- Merging

Combine changes from one branch into another:


``` bash
git checkout main
git merge new_branch_name
```


- Merge Conflicts

Merge conflicts occur when Git cannot automatically combine changes. You'll need to manually resolve these conflicts.

## Part 5: Remote Repositories (Collaboration and Backup)

### Introduction to Remote Repositories

Platforms like <a href="https://github.com/" target="_blank">GitHub</a>
, <a href="https://gitlab.com/" target="_blank">GitLab</a>, and <a href="https://bitbucket.org/" target="_blank">Bitbucket</a> provide remote repositories for collaboration and backup.

### Creating a Remote Repository

1. Create an account on a platform like GitHub.
2. Create a new repository on the platform.

### Connecting Local and Remote Repositories

1. Add the remote repository as an origin:


``` bash
git remote add origin <repository_url>
```

2. Push your changes to the remote repository:


``` bash
git push -u origin main \# or master. The -u sets up tracking.
```

3. Pull changes from the remote repository (that are missing on your local machine):


``` bash
git pull origin main
```


4. Clone an existing repository:


``` bash
git clone <repository_url>
```

## Part 6: Git for Linguistics-Specific Tasks

###Managing Linguistic Data

- Use `.gitignore` to exclude large data files from version control (if necessary).
- Consider Git LFS (Large File Storage) for managing large binary files.
  - Example: Tracking changes in a corpus of annotated speech recordings.

### Collaborating on Papers and Theses

- Use branches for different sections or versions of a document.
- Use pull requests to review changes before merging them into
the main branch.
  - Example: Multiple authors working on a LaTeX document.

### Tracking Code for Analysis

- Store your R, Python, PRAAT, or other scripts in a Git repository.
- Use commits to track changes to your analysis code.
  - Example: Managing scripts for statistical analysis of linguistic data.
  
### Version Control for Linguistic Resources

- Manage grammars, dictionaries, or other linguistic resources with Git.
  - Example: Tracking changes to a set of fieldwork notes in FLEx.

### Using Git with LaTeX 

- Ignore auxiliary files (e.g., .aux, .log, .pdf) using `.gitignore` as demonstrated above .
- Keep your LaTeX source files (e.g., .tex) under version control.

## Part 7: Best Practices and Further Learning

### Best Practices

- Write meaningful commit messages: Explain why you made the changes, not just what you
changed.
- Commit frequently: Make small, logical commits.
- Keep branches focused: Each branch should have a specific purpose.
- Communicate with collaborators: Coordinate your work with others.

## Further Resources

- Official Git Documentation: <https://git-scm.com/docGitHub>
- Learning Resources on Github: <https://docs.github.com/en/github/getting-started-with-githubGitLab>
- Documentation of Gitlab: <https://docs.gitlab.com/Atlassian> 
- Git Tutorials on W3schools: <https://www.w3schools.com/git/>

Git is a powerful managing tool when your project grows bigger, involves many collaborators, and carries on for a long time.
