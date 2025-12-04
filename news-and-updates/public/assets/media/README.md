# Media Directory

This directory contains media files for the Media & Press component.

## Structure

```
public/assets/media/
├── articles/
│   ├── article1.jpg
│   ├── article2.jpg
│   ├── article3.jpg
│   └── [other-article-images].jpg
└── placeholder.jpg (fallback image)
```

## Usage

### Newspaper Articles

When adding a new article to `media.json`, include the `imageUrl` field:

```json
{
  "id": 7,
  "type": "article",
  "title": "Article Title",
  "newspaper": "The Hindu",
  "date": "2024-11-20",
  "imageUrl": "assets/media/articles/your-article.jpg",
  "articleUrl": "https://example.com/article",
  "excerpt": "Brief excerpt of the article..."
}
```

### YouTube Videos

For YouTube videos, you only need the video ID:

```json
{
  "id": 8,
  "type": "video",
  "title": "Video Title",
  "description": "Video description...",
  "date": "2024-11-18",
  "youtubeVideoId": "VIDEO_ID_HERE"
}
```

To get the YouTube video ID from a URL:
- Full URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID: `dQw4w9WgXcQ`
- Short URL: `https://youtu.be/dQw4w9WgXcQ` → ID: `dQw4w9WgXcQ`

## Image Requirements

- Format: JPG, PNG, or WebP
- Recommended size: 800x450 pixels (16:9 aspect ratio)
- Max file size: 500KB (for better performance)

