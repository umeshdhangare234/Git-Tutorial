# Git-Tutorial

This tutorial is all about git and git uses.

# Adding local repository(repo) to the remote repository.

$ git add .
# Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.

$ git commit -m "Initial Commit"
# Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add    # the file again.

$ git remote add origin <REMOTE_URL>
# Sets the new remote.

$ git push origin <branch_name>
# Pushes the changes in your local repository up to the remote repository you specified as the origin

