#!/bin/sh

# The path to this repository
repo_path="$1"
# The number of the revision just committed
rev="$2"
# The name of the transaction that has become rev
transaction_name="$3"

# See http://svnbook.red-bean.com/en/1.7/svn.ref.svnlook.c.author.html
commit_author="$(svnlook author --revision $rev $repo_path)"
# The UUID of the repository, something like e3b3abdb-82c2-419e-a100-60b1d0727d12
repo_uuid=$(svnlook uuid $repo_path)

# Which files were changed, added, or deleted. For example:
# U   src/main/java/com/bullbytes/MyProgram.java
what_has_changed=$(svnlook changed --revision $rev $repo_path)

log_file=/tmp/post_commit.log

echo "Post-commit hook of revision $rev committed by $commit_author to repo at $repo_path with ID $repo_uuid was run on $(date). Transaction name: $transaction_name. User $(whoami) executed this script. This has changed: $what_has_changed" >> $log_file

# Name of the Jenkins build job
#yourJob="propad"
yourJob="ProPad-UI"

# You defined this in Jenkins' build job
build_token="propadsecret"

jenkins_address_with_port="l92.168.51.25:9090"
#jenkins_address_with_port="localhost:8080"

curl $jenkins_address_with_port/job/$yourJob/build?token="$build_token"