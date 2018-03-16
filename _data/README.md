Adding yourself to the members directory
----

1. Make sure you have Git installed on your system
    * On Windows: install Git Bash using https://git-scm.com/downloads
    * On Linux: You probably already have it installed, otherwise use your package manager to install `git`
    * On Mac:
      * Use Homebrew:
        * Get Homebrew at https://brew.sh
        * Then install with `brew install git`
      * Or install using https://git-scm.com/downloads
2. Create a GitHub account, then fork this repository by clicking the "Fork" button at the top of this page
3.  Paste or type this command into your Terminal or Git Bash window (Don't forget to fill in your username): `git clone https://github.com/<your_username>/acmatuc.github.io.git`
4. You should now have a folder `acmatuc.github.io`,  navigate to the subfolder `_data` using a file explorer or these commands:
    ```
    cd acmatuc.github.io
    cd _data
    ```
5. Create and checkout a branch called `add-[your name]` using `git checkout -b add-[your name]`
6. Open the YAML(.yml) file that corresponds to your graduation year
7. At the top of the file there is an example template to copy and paste (lines 2-6) at the end of the file
8. Remove the `#` from each line
9. Edit each line with your information!
   * You can omit every line but the name if you don't want to share that information
   * Try to write a bio that won't require updating, as you'll have to remember to create another pull request to update it. Recommended to avoid specifics like your current year or etc.
   * Your profile image must be a direct link to an image already hosted somewhere on the web
      * I would suggest going to your Github and right clicking your profile image to get a direct link, but can also use imgur or another social media site.
10. Once you are done adding your information, we need to commit and push your changes to your repo
    * Go to your terminal and run:
    ```
    git add .
    git commit -m "Added [your name] to directory"
    git push origin
    ```
11. Go to your Github repo either via the Github homepage or `https://github.com/<your_username>/acmatuc.github.io`
12. You should see a box that looks like this, click `Compare & Pull Request`
![](https://help.github.com/assets/images/help/repository/repo-actions-pullrequest.png)
13. Title and explain your pull request and click `Create Pull Request`
14. All done! Once your pull request is approved, your changes will be on the website!
 ### Example

 Here is an example of what my addition would be:

 ```
- name: Isiah Lloyd
   short_bio: I'm an ACM Member studying Computer Science. I'm also the webmaster for ACM@UC and help organize RevolutionUC
   image_url: https://avatars1.githubusercontent.com/u/885544?v=4&s=460
   github: isiah_lloyd
   website: https://www.isiah.me
```
### Want more help?
[Check out the first time we ran through this exercise as a workshop on git.](https://youtu.be/5akNrYN8K6w?t=5m4s)
