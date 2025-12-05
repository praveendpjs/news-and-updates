# Announcements HTML Files

This directory contains HTML files that can be dynamically loaded and displayed in the Academy Announcements modal.

## Usage

To use an HTML file with an announcement:

1. **Place your HTML file** in this directory (`public/assets/announcements/`)

2. **Update the announcement JSON** in `src/app/Components/academy-announcements/announcements.json`:
   ```json
   {
     "id": 1,
     "title": "Your Announcement Title",
     "date": "2025-11-12",
     "category": "Batch",
     "description": "Brief description...",
     "fullContent": "Fallback text content...",
     "isNew": true,
     "htmlFile": "assets/announcements/your-file.html"
   }
   ```

3. **HTML File Guidelines:**
   - Place files in `public/assets/announcements/`
   - Use relative path: `assets/announcements/filename.html`
   - Write clean, well-structured HTML
   - The HTML content will be displayed within the modal

## HTML File Structure

Your HTML files should contain clean HTML content. The `<body>` content will be displayed in the modal. You don't need to include the full HTML document structure, but it's fine if you do - only the body content will be shown.

### Example HTML Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Title</title>
</head>
<body>
    <h1>Your Heading</h1>
    <p>Your content here...</p>
    <!-- More content -->
</body>
</html>
```

## Styling

The HTML content will inherit styles from the modal component. You can use inline styles or include a `<style>` tag in your HTML file for custom styling. The component provides base styles for:
- Headings (h1-h6)
- Paragraphs
- Lists (ul, ol)
- Tables
- Images
- Links
- Code blocks

## Notes

- If an HTML file is specified, the modal will display the HTML content instead of the `fullContent` text
- If the HTML file fails to load, an error message will be displayed
- The HTML content is sanitized for security
- Keep file sizes reasonable for better performance
- Ensure all paths (images, links) are relative or absolute URLs



