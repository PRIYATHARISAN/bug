1) Initializing and Setting Up a Repository 
Scenario: You are starting a new project called "BudgetPlanner" to help users manage 
finances. Set up a local repository, create initial files, and push them to the cloud for 
collaboration. 
Tasks: 
1. Create a folder named BudgetPlanner and initialize it as a Git repository. 
2. Add files index.html, style.css, and script.js to the folder. 
3. Check the status of the repository and confirm all files are untracked. 
4. Stage all files for the first commit. 
5. Commit the staged files with the message "Initial commit: Added project base 
files." 
6. Create a remote repository on GitHub and link your local repository to it. 
7. Push the local repository to the remote repository. 
8. Clone the remote repository onto a teammate's machine for collaborative 
development. 
9. Pull updates from the remote repository after a teammate adds new files. 
10. Check the log to verify changes pushed by your teammate. 
2) 
Analyzing Contribution History 
Scenario: Your manager has requested a detailed analysis of contributions made by 
each team member for a project milestone. Use Git to analyze the history. 
Tasks: 
1. Use git log to view the entire commit history of the repository. 
2. Filter the log by a specific contributor to see their commits. 
3. Generate a list of all authors and their contributions using git shortlog. 
4. Check the most recent commit made by a specific contributor. 
5. Identify the files modified by a particular commit using git show. 
6. Create a summary report showing which team members worked on which 
files. 
7. Compare two branches (main and development) to identify 
contributor-specific changes. 
8. Verify changes made to specific files like task.js across all commits. 
9. Export the commit history into a text file for documentation purposes. 
10. Discuss how analyzing contribution history supports effective team 
management. 
3) 
Staging Selected Changes 
Scenario: While working on multiple files, you need to selectively stage only some 
changes for committing. Perform selective staging effectively. 
Tasks: 
1. Modify three files: header.html, footer.html, and script.js. 
2. Use git status to view changes in the working directory. 
3. Stage only header.html for the next commit using git add. 
4. View the staged changes using git diff --staged. 
5. Commit the changes to header.html with the message "Updated header 
structure." 
6. Stage footer.html for a separate commit and leave script.js unchanged. 
7. Commit footer.html with the message "Refined footer design." 
8. Verify that script.js changes remain unstaged. 
9. Push all committed changes to the remote repository. 
10. Test selective commits by cloning the repository to a new location. 
4) Branch Comparisons for QA 
Scenario: The QA team has requested a comparison between two branches (main and 
feature-testing) to verify changes made for testing purposes. 
Tasks: 
1. Switch to the main branch in your local repository. 
2. Use git diff to compare changes between main and feature-testing. 
3. Identify the specific files modified in feature-testing. 
4. Test the modified files (test.js and config.js) for discrepancies. 
5. Merge feature-testing into a QA-specific branch named qa-testing. 
6. Stage and commit changes in qa-testing after QA feedback. 
7. Push the updated qa-testing branch to the remote repository. 
8. Test the merged branch locally to confirm QA requirements are met. 
9. Document the differences identified in the branch comparison. 
10. Explain how Git diff helps maintain code quality. 
5)Collaborating on Pull Requests 
Scenario: Your team uses pull requests for collaboration. Implement and review a 
pull request workflow effectively. 
Tasks: 
1. Create a branch named feature-comments to add a new feature. 
2. Modify comments.js to enable the feature and stage changes. 
3. Commit the staged changes with a message referencing Issue #45. 
4. Push the feature-comments branch to the remote repository. 
5. Create a pull request to merge feature-comments into main. 
6. Assign the pull request to a teammate for review. 
7. Resolve feedback comments from the reviewer and update the branch. 
8. Approve and merge the pull request after all issues are addressed. 
9. Verify the merged changes in the main branch. 
10. Close Issue #45 after confirming the feature implementation 
6 ) Setting Up Backup Branches 
Scenario: You want to preserve the current state of your repository before testing 
experimental changes. Set up backup branches to ensure safety. 
Tasks: 
1. Switch to the main branch in your local repository. 
2. Create a branch named backup-main to preserve the repository state. 
3. Push the backup-main branch to the cloud repository. 
4. Switch back to the main branch for testing. 
5. Modify the index.js file with experimental changes. 
6. Commit the experimental changes with a message. 
7. Merge the backup-main branch into a new branch named restore-main. 
8. Push the restore-main branch to the cloud repository. 
9. Test the restore-main branch locally to ensure the backup is intact. 
10. Explain the importance of setting up backup branches during development. 
