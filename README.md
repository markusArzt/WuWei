# WuWei — Philosophy Podcast Website

A GitHub Pages site for the WuWei podcast. Each episode links to its Spotify page and a downloadable PDF of the lecture notes.

## Structure

```
wuwei-site/
├── index.html        ← main page (edit this to add episodes)
├── pdfs/             ← put your PDF lecture notes here
│   ├── ep01-daoism-intro.pdf
│   ├── ep02-absurdism-camus.pdf
│   └── ...
└── README.md
```

## How to add a new episode

1. Drop the PDF into the `pdfs/` folder.
2. Open `index.html` and copy one of the existing `.episode` blocks.
3. Update the episode number, date, title, description, PDF filename, and Spotify episode link.
4. Commit and push — the site updates automatically.

## Deploying to GitHub Pages

1. Create a new repo on GitHub (e.g. `wuwei` or `wuwei-podcast`)
2. Push this folder to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to repo **Settings → Pages → Source** and set it to `main` branch, `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO`

## Updating the Spotify links

Replace `YOUR_SHOW_ID` and `YOUR_EPISODE_ID` in `index.html` with your actual Spotify IDs.
You can find them in the Spotify for Creators dashboard or by right-clicking an episode on Spotify → Share → Copy link.
