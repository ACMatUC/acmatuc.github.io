# How to add yourself to the ACM@UC Member Directory

If you haven't already cloned the repository, please follow the instructions to
do so found in the [README file](../../README.md)

## Adding yourself to your class

In this same folder, find the year you're expected to graduate. For example, if
you started in 2025, you would find [`2030.yaml`](./2030.yaml) Below is a list of
the current years:

* [2026](./2026.yaml)
* [2027](./2027.yaml)
* [2028](./2028.yaml)
* [2029](./2029.yaml)
* [2030](./2030.yaml)

If you've already graduated (your class year is before 2025), add your name to
the correct file in the `alumni` folder.

## What information can you add?

There is a format you can copy-paste at the start of each file, however the
general format is:

* **Name** *required* - Your name
* **Bio** - Short, 2-3 sentence description of yourself
* **Image** - Optional link to a photo of yourself.
  * If you don't provide a specific photo link, we'll attempt to use your
    GitHub profile photo. If you want to add a photo, you can upload it
    to your own website (e.g. `github_username.github.io/profile_photo.jpeg`)
    and add the link here.
* **Email** - If you want to be found by other members or others online, you
  can add your email address here
* **Website** - Put any link here: show off your personal portfolio, blog, or
  project!
* **GitHub** - You can put your GitHub username here so others can find you
  and your code.
* **LinkedIn** - You can put your LinkedIn here and connect others to your
  professional profile!

Copy and paste the below format to the correct file, replacing anything in
`<angle brackets>`:

```yml
- name: <Your name here>
  # Not required, but optional:
  github: <Your github username here>
  email: <your email address here>
  website: <your website URL here>
  linkedin: <your linkedin username here>
  short_bio: <your bio here>
  # if needed, you can add a link to a photo here:
  image: <image URL here>
```

## Opening a pull request with your change

If you followed the guide to cloning the repository, you should have a fork of
the repository that you can push your commit to.

If you're using Visual Studio Code, click the fork-looking icon on the left-hand
side of your screen (or, press Control+Shift+G). Then, you can add your changes,
add a message above, and click "Commit". You may need to sync your commits,
Visual Studio Code should ask you if you want to: click yes.

Lastly, go back to the GitHub website, and to your fork of the repository. You
should see a button saying "Contribute"; click that and follow the steps to open
a pull request. Congratulations, you've made your first contribution!
