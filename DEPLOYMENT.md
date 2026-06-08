# Deployment steps

This machine does not currently have `gh`, `npm`, or `vercel`, so the project is prepared for static deployment but not pushed/hosted from this environment.

## Option A - GitHub Pages

1. Create a new public GitHub repo named:

```text
seg3525-service-site
```

2. From this folder, run:

```bash
git remote add origin https://github.com/marctche/seg3525-service-site.git
git branch -M main
git add .
git commit -m "Build SEG3525 service site prototype"
git push -u origin main
```

3. In GitHub:

```text
Settings -> Pages -> Deploy from branch -> main -> /root
```

4. Public prototype URL:

```text
https://marctche.github.io/seg3525-service-site/
```

## Option B - Vercel

1. Import the GitHub repo into Vercel.
2. Framework preset: Other.
3. Build command: leave empty.
4. Output directory: leave empty or use `/`.
5. Deploy.

## Portfolio update

The Devoir 1 portfolio source has already been updated locally to link Design 1 to:

```text
https://marctche.github.io/seg3525-service-site/
```

After the portfolio repo is pushed/redeployed, the service prototype will be accessible through the portfolio as required.
