# Personal Identification Verification Company — PIV ID Website

A responsive static company information website made with HTML, CSS, and vanilla JavaScript. No paid editor or build tool is required.

## Files
- `index.html` — page structure and PIV ID information
- `styles.css` — layout, colors, and responsive design
- `script.js` — mobile menu, current year, and contact email behavior

## Run locally in VS Code
1. Download and install VS Code: https://code.visualstudio.com/
2. Extract the ZIP to a folder.
3. In VS Code, choose **File → Open Folder** and select `piv-company-website`.
4. Open `index.html` in your browser. For easier editing, install the free **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.

## Publish for free with GitHub Pages
1. Create/sign in to a GitHub account: https://github.com/
2. Create a public repository, e.g. `piv-company-website`.
3. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/(root)`, then click **Save**.
6. Wait for deployment. GitHub Pages will show the website URL, often in the form `https://YOUR-USERNAME.github.io/piv-company-website/`.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Contact form and backend limitations
This website is static. The contact form uses a `mailto:` link, which opens the visitor's email application with a prepared message. It does not send mail directly, save messages to a database, or guarantee that an email application is configured.

For direct website submissions, you would need a form-processing service or a backend. Check its privacy terms, spam controls, free-tier limits, and costs before using it. A database is only needed if you want to store submissions or user records; it is not needed for this informational site.

## Before publishing
- Check all company descriptions and claims for accuracy.
- Add a real privacy policy that describes actual collection, retention, sharing, contact, and deletion practices before collecting personal data.
- Do not claim government authorization or affiliation with a dating platform unless you can verify it.
- Do not promise that identity verification guarantees a person's intentions or safety.
- Do not request ID scans, identity numbers, passwords, or payment details through this basic contact form.
- GitHub Pages sites are public. Never upload customer records, API keys, secrets, or private documents to the repository.
