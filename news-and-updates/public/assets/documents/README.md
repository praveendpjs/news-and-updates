# Announcements Documents Directory

This directory contains Word documents and their page images for announcements.

## File Structure

```
public/assets/documents/
├── pages/
│   ├── upsc-2025-26-page-1.jpg
│   ├── upsc-2025-26-page-2.jpg
│   ├── upsc-2025-26-page-3.jpg
│   └── [document-name]-page-[number].jpg
└── [original-documents].docx (optional, for reference)
```

## Converting Word Documents to Images

To display Word documents in the modal, you need to convert each page of the document to an image file.

### Recommended Process:

1. **Open the Word document**
2. **Convert each page to an image** (JPG or PNG format)
   - You can use tools like:
     - Microsoft Word: File → Export → Change File Type → PNG/JPEG
     - Online converters
     - PDF conversion then PDF to images
     - Screenshot tools
3. **Name the images** following this pattern:
   - `[document-name]-page-1.jpg`
   - `[document-name]-page-2.jpg`
   - `[document-name]-page-3.jpg`
   - etc.
4. **Place images** in the `pages/` subdirectory

## JSON Configuration

When adding a new announcement to `announcements.json`, include the `documentPages` array:

```json
{
  "id": 6,
  "title": "Your Announcement Title",
  "date": "2025-11-15",
  "category": "Batch",
  "description": "Brief description",
  "fullContent": "Full content here...",
  "isNew": false,
  "documentPages": [
    "assets/documents/pages/your-document-page-1.jpg",
    "assets/documents/pages/your-document-page-2.jpg",
    "assets/documents/pages/your-document-page-3.jpg"
  ]
}
```

## Image Requirements

- **Format:** JPG or PNG
- **Recommended size:** 1200x1600 pixels (or maintain document aspect ratio)
- **Quality:** High quality for readability
- **File size:** Optimize images but maintain readability (aim for <500KB per page)
- **Naming:** Use lowercase with hyphens: `document-name-page-1.jpg`

## Image Conversion Tools

1. **Microsoft Word (Windows/Mac):**
   - Save As → Choose "Web Page, Filtered" then convert HTML to images
   - Or use "Export" feature

2. **Online Tools:**
   - Word to PDF converter, then PDF to images
   - CloudConvert, Zamzar, etc.

3. **Command Line:**
   - Use LibreOffice: `libreoffice --headless --convert-to pdf document.docx`
   - Then convert PDF pages to images using ImageMagick or similar tools

## Display Features

The modal will automatically:
- Display pages in a scrollable viewer
- Show page thumbnails at the bottom for quick navigation
- Allow navigation with Previous/Next buttons
- Show current page number (e.g., "Page 1 of 3")
