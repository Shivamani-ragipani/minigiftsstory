"# Mini Gifts Story - Static Landing Page

A beautiful, responsive static landing page for Mini Gifts Story - a business specializing in custom fridge magnets, badges, and mini gifts.

## 🎨 Design Features

- **Soft Pastel Pink Aesthetic** - Inspired by the brand's visiting card
- **Watercolor Gradient Backgrounds** - Elegant and feminine design
- **Sacramento Font** - Handwritten script style for headings
- **Poppins Font** - Clean, modern sans-serif for body text
- **Smooth Animations** - Fade-in effects, hover states, and transitions
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices

## 📁 Project Structure

```
src/
├── App.js                    # Main application component
├── App.css                   # Global styles and CSS variables
├── index.css                 # Base styles and font imports
├── components/
│   ├── Header.jsx            # Sticky navigation header
│   ├── Header.css
│   ├── Hero.jsx              # Hero section with CTA
│   ├── Hero.css
│   ├── About.jsx             # About section with feature cards
│   ├── About.css
│   ├── Products.jsx          # Products showcase
│   ├── Products.css
│   ├── Contact.jsx           # Contact information & QR code
│   ├── Contact.css
│   ├── Footer.jsx            # Footer with social links
│   └── Footer.css
```

## 🎨 Color Palette

The color palette is defined in `src/App.css` using CSS variables:

```css
--primary-pink: #FFB6C1;      /* Light pink */
--soft-pink: #FFC0CB;          /* Soft pink */
--light-pink: #FFD4E5;         /* Very light pink */
--blush-pink: #FFF0F5;         /* Blush */
--rose-pink: #F8BBD0;          /* Rose */
--accent-pink: #E91E63;        /* Accent/CTA color */
--medium-pink: #F06292;        /* Medium pink */
--cream-white: #FFF5F7;        /* Cream background */
--pure-white: #FFFFFF;         /* Pure white */
```

## 🔧 Customization Guide

### 1. Changing Colors
Edit the CSS variables in `/app/frontend/src/App.css`:

```css
:root {
  --primary-pink: #YOUR_COLOR;
  --accent-pink: #YOUR_COLOR;
  /* ... other colors */
}
```

### 2. Adding Your QR Code
Replace the placeholder in `src/components/Contact.jsx`:
- The QR code placeholder is currently a styled div with a QR icon
- To add your actual QR code, save your QR code image in `public/` folder
- Update the placeholder section with an `<img>` tag

### 3. Adding Product Images
Replace the placeholder boxes in `src/components/Products.jsx`:
- Save product images in the `public/images/` folder
- Replace the `.product-image-placeholder` div with `<img>` tags

### 4. Updating Contact Information
Edit `src/components/Contact.jsx`:
- Phone: Line 18
- Email: Line 28
- Instagram: Line 38

### 5. Changing Fonts
The website uses Google Fonts (Sacramento & Poppins) imported in `src/index.css`.
To change fonts:
1. Update the Google Fonts import URL
2. Change the CSS variables in `src/App.css`:
   ```css
   --font-heading: 'YourFont', cursive;
   --font-body: 'YourFont', sans-serif;
   ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Running the Project

```bash
# Install dependencies
cd /app/frontend
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## 📝 Section Details

### Header
- Fixed position navigation bar
- Smooth scroll to sections
- Hover effects with underline animation

### Hero Section
- Large brand name with watercolor gradient background
- Animated entrance effects
- Prominent CTA button with heartbeat animation
- Tagline: \"Where Every Gift Tells a Story\"

### About Section
- Brand story and description
- Three feature cards:
  - Handcrafted with Love
  - Personalized for You
  - Perfect Gifting

### Products Section
- Three product cards with placeholder images:
  - Fridge Magnets
  - Badges
  - Mini Gifts
- Each card includes features and \"Order Now\" button

### Contact Section
- Phone, Email, Instagram information
- QR code placeholder for booking
- Clickable contact links

### Footer
- Brand name with \"Made with Love\" tagline
- Instagram social link
- Copyright information

## 🎯 Key Features

✅ Pure CSS styling (no Tailwind or Bootstrap)
✅ React functional components
✅ Smooth scroll navigation
✅ Hover animations and transitions
✅ Mobile-first responsive design
✅ Optimized for gifting business aesthetic
✅ Clean, readable, production-ready code
✅ Uses Lucide React icons (no emojis)

## 📞 Business Information

**Mini Gifts Story**
- Phone: +91 9347897675
- Email: minigiftsstory@gmail.com
- Instagram: @minigiftsstory

---

**Made with ❤️ for Mini Gifts Story**
"