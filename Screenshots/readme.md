# Image Search Engine

A simple and modern web application that allows users to search and explore high-quality images using the Unsplash API.  
Built with HTML, CSS, and JavaScript, the application fetches image results in real time and displays them in a responsive gallery layout.

## Features

- Search any keyword to find relevant images
- Fetches high-quality photos via Unsplash API
- Responsive grid layout (auto-fit)
- “Show More” button to load additional results
- Clean and modern UI design
- Minimal and easy-to-understand codebase

##  Technologies Used

- HTML5
- CSS3
- JavaScript 
- Unsplash API

##  How It Works

1. User enters a keyword in the search box
2. The app requests data from Unsplash API
3. Results are rendered as clickable image cards
4. User can fetch more results using “Show More”

##  API Integration

This project uses the Unsplash API:




##  Setup Instructions

1. Go to **https://unsplash.com/developers**
2. Create a new app & get your **Access Key**
3. Replace this part in `script.js`:

```js
const accessKey = "YOUR_UNSPLASH_API_KEY";