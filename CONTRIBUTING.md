# Contributing

We are happy to accept contributions from the community to improve this project.

## Editing using the Bitbucket Web Interface

1. Open the [Bitbucket site](https://bitbucket.trimble.tools/projects/TMDS/repos/modus-bootstrap-guide/browse) in your browser.
2. Navigate to the section and page you'd like to edit. The folder structure matches the site navigation. If you would like to edit a page in the Elements section for example, click on **content** > **components** and select the page you would like to edit.
3. To edit, first click the gray 'Show source' button in the top-right of the content preview pane.
4. Make your text changes. When you've finished, click the blue 'Commit' button in the bottom-right.
5. In the 'Commit file' popup modal, enter a descriptive title of the change you're making and check the 'Create a pull request for this change' checkbox (you don't need to change the branch name).
6. On the 'Create pull request' screen you can enter a description for the change (if needed).
7. The Documentation Team will review, merge and publish your request or contact you with any follow-up questions.

### Setup (for creating a build of the site locally)

1. Install dependencies with `npm install`
2. Run `npm run serve` to run local server. (If fails to run you may need to install Autoprefixer globally with `npm install -g autoprefixer`)
3. The site will be available at <http://localhost:4000/> and will auto update when you make any changes

### Images

- Filenames Requirements: Lowercase (not Mixed Case)
- Filenames Requirements: Separate words with dash/hyphen (not underscores or spaces)
- File formats: Icons or logos ideally SVG (minified). Use https://jakearchibald.github.io/svgomg/ for minifying a single image.
- File formats: Photos should never be in PNG24. A high quality JPEG is usually 1/4 of the size
- Always specify `alt=""` for improved accessibility
- Always specify `height` and `width` to images to improve page-rendering time (reduce repaints)
- Always add `loading="lazy"` to images below the fold for native lazy-loading (not needed for images less than 4 KB)
- Add the class `img-fluid` to images which are wider than 320 pixels so that they scale down on small screens such as iPhone 5/SE
- PNG Bitmap images should be losslessly optimized with https://squoosh.app/
- Image file size should never exceed 200 KB
- Tip: Don't hotlink to images on external sites - images on other sites maybe removed, renamed or changed and it means an extra TLD/DNS round-trip

## Pull Request Checklist

Before making a Pull Request please run `npm run test` to check all JS,HTML,CSS,Markdown and links for errors.
