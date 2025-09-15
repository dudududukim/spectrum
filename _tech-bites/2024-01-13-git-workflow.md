---
title: "Git Workflow: Feature Branches and Clean History"
date: 2024-01-13
categories: ["Git", "Development"]
tags: ["git", "workflow", "branches", "commits", "history"]
description: "Best practices for maintaining a clean Git history and effective feature branch workflow."
reading_time: 6
---

A clean Git history is like good documentation - it makes your project more maintainable and helps your team understand the evolution of your codebase. Here's how to achieve it.

## Feature Branch Workflow

### 1. Start with a Fresh Branch

Always create a new branch for each feature or bugfix:

```bash
# Create and switch to a new branch
git checkout -b feature/user-authentication

# Or using the newer syntax
git switch -c feature/user-authentication
```

### 2. Make Atomic Commits

Each commit should represent a single logical change:

```bash
# Good: Single, focused commit
git add src/auth/login.js
git commit -m "Add user login validation"

# Bad: Multiple unrelated changes
git add .
git commit -m "Fix login, update styles, and refactor API"
```

### 3. Write Descriptive Commit Messages

Use the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Examples:
- `feat(auth): add password reset functionality`
- `fix(api): handle null response in user service`
- `docs(readme): update installation instructions`

## Cleaning Up Your History

### Interactive Rebase

Use interactive rebase to clean up your commits before merging:

```bash
# Rebase the last 3 commits
git rebase -i HEAD~3

# Or rebase from a specific commit
git rebase -i <commit-hash>
```

Common rebase commands:
- `pick`: Use the commit as-is
- `reword`: Change the commit message
- `edit`: Stop to amend the commit
- `squash`: Combine with the previous commit
- `drop`: Remove the commit entirely

### Squashing Commits

Combine multiple small commits into one:

```bash
# During interactive rebase, change 'pick' to 'squash' for commits you want to combine
pick abc1234 Initial commit
squash def5678 Fix typo
squash ghi9012 Add tests
```

## Branch Management

### Keep Branches Focused

Each branch should have a single purpose:
- `feature/user-dashboard`
- `bugfix/login-validation`
- `hotfix/security-patch`

### Regular Rebasing

Keep your feature branch up to date with the main branch:

```bash
# Fetch latest changes
git fetch origin

# Rebase your feature branch onto main
git rebase origin/main
```

### Clean Merge Strategy

When merging, use `--no-ff` to preserve branch history:

```bash
git checkout main
git merge --no-ff feature/user-authentication
```

## Useful Git Aliases

Add these to your `.gitconfig` for faster workflow:

```bash
[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = !gitk
    lg = log --oneline --graph --decorate --all
    cleanup = "!git branch --merged | grep -v '\\*\\|main\\|develop' | xargs -n 1 git branch -d"
```

## Handling Mistakes

### Amend the Last Commit

```bash
# Add changes to the last commit
git add .
git commit --amend

# Or just change the message
git commit --amend -m "New commit message"
```

### Reset to a Previous State

```bash
# Soft reset (keeps changes in working directory)
git reset --soft HEAD~1

# Hard reset (discards all changes)
git reset --hard HEAD~1
```

### Revert a Commit

```bash
# Create a new commit that undoes a previous commit
git revert <commit-hash>
```

## Best Practices

1. **Commit often, push regularly**: Small, frequent commits are easier to review and debug
2. **Write meaningful messages**: Your future self will thank you
3. **Use branches liberally**: Don't work directly on main
4. **Review before merging**: Always review your changes before merging
5. **Keep history linear**: Use rebase instead of merge when possible

A clean Git history is an investment in your project's future. The time you spend maintaining it will pay dividends when debugging, reviewing, or onboarding new team members.
