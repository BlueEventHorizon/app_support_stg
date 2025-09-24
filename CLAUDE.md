# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a static website repository for an app support center, providing documentation, support forms, terms of service, and privacy policies for mobile applications. The site is built with pure HTML/CSS without any build process or framework dependencies.

## Architecture

### Directory Structure
- `docs/` - Main website content served as static pages
  - `index.html` - Landing page with app showcase grid
  - `assets/css/style.css` - Shared stylesheet with responsive design
  - `apps/` - Individual app documentation directories
    - `contact-b/` - Example app with complete documentation set
      - `index.html` - App overview page
      - `support.html` - Support form integrated with Formspree
      - `terms.html` - Terms of service
      - `privacy.html` - Privacy policy

### Key Implementation Details

**Form Processing**: Support forms use Formspree.io for email delivery. Form ID must be configured in `support.html` (line 66).

**Styling System**: Uses CSS custom properties for theming with gradient backgrounds for visual appeal. App cards feature:
- Icon display (emoji, Font Awesome, or custom images)
- Gradient backgrounds with customizable colors
- Responsive grid layout
- Feature tags and action buttons

**No Build Process**: This is a static site that can be deployed directly to any web server or GitHub Pages without compilation.

## Common Development Tasks

### Adding a New App
1. Create directory: `docs/apps/[app-name]/`
2. Copy the 4 required HTML files from `contact-b/` as templates
3. Update app-specific content in each file
4. Add app card to `docs/index.html` following the existing pattern
5. Configure new Formspree form ID for the support page

### Customizing for Production
Key items that must be updated (see `docs/CUSTOMIZE.md` for details):
- Email addresses in support/privacy pages
- Formspree form ID in support.html
- Company/service information in footers
- Terms of service legal details
- Privacy policy specifics

### Modifying Icons
Three methods available (see `docs/ICON_CUSTOMIZATION.md`):
1. Emoji icons - Simple, no dependencies
2. Font Awesome - Professional icon library already included
3. Custom images - Place in `docs/assets/images/icons/`

## Important Notes

- **Japanese Language**: The site is primarily in Japanese. Maintain consistency in language use.
- **Email Configuration**: Replace all instances of placeholder emails (contact.btype@gmail.com, etc.) with actual addresses before deployment.
- **Legal Documents**: Review and customize terms.html and privacy.html for your specific jurisdiction and business requirements.
- **Responsive Design**: All pages use responsive CSS grid and flexbox. Test changes on mobile viewports.
- **Form Security**: Formspree handles form submission security, but ensure form IDs are kept private in production.