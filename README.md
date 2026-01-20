# Euphonious × Zyzzva '26 - Official Website

A stunning, feature-rich website for the annual cultural festival of Guru Nanak Institute of Technology (GNIT), featuring cutting-edge animations, 3D effects, and an immersive user experience.

## 🎨 Design Philosophy

This website showcases a **premium, graffiti-inspired aesthetic** with:
- **Custom Graffiti Fonts** - Multiple unique typefaces (GraffitiOne, GraffitiTwo, GraffitiThree, GraffitiFour, GraffitiYouth)
- **Vibrant Color Scheme** - Teal/green theme (#0cf0b4) with gold accents (#ffd700)
- **3D Transformations** - Perspective-based animations and depth effects
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Hard Shadows** - Bold, street-art inspired shadow effects
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices

---

## 📑 Table of Contents

1. [Pages Overview](#pages-overview)
2. [Features List](#features-list)
3. [Animation Effects](#animation-effects)
4. [Technical Stack](#technical-stack)
5. [Installation & Setup](#installation--setup)

---

## 📄 Pages Overview

### 1. **Home Page** (`/`)
**Purpose:** Landing page with intro video experience

**Features:**
- Dual video system (desktop & mobile optimized)
- Animated logo loader with pulsing effect
- Automatic navbar reveal after video completion
- Responsive video switching based on screen size
- Loading dots animation

**Key Elements:**
- Desktop video: `laptop2.mp4`
- Mobile video: `VN20251208_012531.mp4`
- Logo: Pulsing animation (0.4 → 1 → 0.4 opacity)
- Loading text with animated dots

---

### 2. **About Page** (`/about`)
**Purpose:** Information about GNIT, GNCC, Euphonious, and Zyzzva

**Features:**
- Media slider (images & videos)
- Sound effects on hover (spray paint sound)
- Smooth content transitions
- Embedded video player

**Content Sections:**
1. **About GNIT** - Institute overview and achievements
2. **About GNCC** - Campus information (28,328 sq meters, 25,000+ students)
3. **About Euphonious** - Inter-institutional cultural competition
4. **About Zyzzva** - Annual cultural fest (2-day event, 25,000+ visitors)

**Interactive Elements:**
- Story boxes with hover sound effects (`spray.mp3`)
- Auto-playing video background
- Image/video carousel navigation

---

### 3. **Events Page** (`/events`)
**Purpose:** Showcase all festival events with 3D carousel

**Features:**
- **3D Carousel Slider** - Perspective-based card rotation
- **14 Event Categories** with detailed information
- **Interactive Popup System** - Click to view full event details
- **Autoplay Functionality** - Auto-rotates every 3 seconds
- **Keyboard Navigation** - Arrow keys & spacebar controls
- **Touch/Swipe Support** - Mobile gesture controls
- **Registration Links** - Direct event registration

**Events List:**
1. **Collision** - Band Performance
2. **The Red Carpet** - Fashion Show
3. **Wings of Words** - Recitation
4. **Flash Talk** - Extempore
5. **Inkspire** - Creative Writing
6. **Gandhar** - Solo Singing
7. **Mudra** - Solo Dance
8. **Creative Strokes** - Drawing
9. **Prangan** - Drama
10. **Lenscape** - Photography
11. **Beyond the Canvas** - Painting Without Paper
12. **Rangreza** - Rangoli Making
13. **Mind in Motion** - Reel Making
14. **Intellectia** - Quiz

**Carousel Controls:**
- Previous/Next buttons
- Play/Pause autoplay toggle
- Navigation dots (14 dots for 14 events)
- Click event cards to view details

---

### 4. **Glimpses Page** (`/glimpses`)
**Purpose:** Photo gallery with 3D carousel effect

**Features:**
- **3D Reflection Carousel** - Images with mirror reflections
- **Auto-rotation** - 4-second intervals
- **Mouse Parallax** - Background responds to mouse movement
- **Hover Pause** - Stops autoplay on hover
- **Navigation Dots** - Direct slide selection

**Gallery Images:**
- Event Night
- Hackathon
- Cultural Fest
- Workshop
- Tech Talk

**Visual Effects:**
- `-webkit-box-reflect` for mirror effect
- Yellow tint on reflections (#ffd700)
- 3D rotation (45° on side images)
- Scale transformations (center: 1.1, sides: 0.8)
- Opacity overlays on side images

---

### 5. **Team Page** (`/team`)
**Purpose:** Display team structure and members

**Features:**
- **Two-View System:**
  - **Teams View** - Overview of all departments
  - **Members View** - Individual team member profiles
- **3D Carousel Navigation**
- **Auto-rotation** - 4-second intervals
- **Mouse Parallax Background**
- **Click-to-Drill-Down** - Click team to view members
- **Back Navigation** - Return to teams overview

**Team Structure:**
1. **Marketing** (4 members)
   - Icon: 📢
   - Gradient: `#0cf0b4 → #08a67d`

2. **Public Relations** (4 members)
   - Icon: 🎤
   - Gradient: `#0cf0b4 → #06d9a0`

3. **Media** (4 members)
   - Icon: 📸
   - Gradient: `#0cf0b4 → #04c9a3`

4. **Core** (6 members)
   - Icon: ⚙️
   - Gradient: `#0cf0b4 → #02b894`

**Navigation:**
- Radial gradient background responds to mouse position
- Smooth transitions between views
- Fixed back button with high z-index

---

### 6. **Sponsors Page** (`/sponsor`)
**Purpose:** Showcase event sponsors and partners

**Features:**
- **Tiered Sponsor System:**
  - Title Sponsor (featured card)
  - Partners (4 cards)
  - Gold Sponsors (3 cards)
  - Silver Sponsors (4 cards)
- **CTA Section** - "Become a Sponsor" with contact link
- **Hover Effects** on sponsor cards
- **Icon-based Design**

**Sponsor Tiers:**
- **Title Sponsor:** Premier Company 👑
- **Partners:** 4 strategic partners 🤝
- **Gold Sponsors:** 3 companies 🥇
- **Silver Sponsors:** 4 companies 🥈

---

### 7. **Contacts Page** (`/contacts`)
**Purpose:** Contact information and inquiry form

**Features:**
- **4 Contact Cards:**
  1. **Email** 📧 - `info@euphoniouszyzzva.com`
  2. **Phone** 📱 - `+91 98765 43210`
  3. **Location** 📍 - GNIT Kolkata, West Bengal
  4. **Social Media** 💬 - Instagram, Facebook, Twitter

- **Contact Form:**
  - Name field (required)
  - Email field (required)
  - Phone field (optional)
  - Message textarea (required, max 500 chars)
  - Character counter
  - Success animation on submit

**Card Effects:**
- Glowing borders on hover
- Animated glow elements
- Arrow icons on action links
- Social media icon buttons

**Form Features:**
- Floating labels (move up on focus)
- Input glow effects
- Success state animation (✓ Message Sent!)
- Form validation
- Auto-reset after submission

---

## 🎯 Features List

### Core Features

#### 1. **Navigation System**
- **Radial Menu** - Circular navigation overlay
- **6 Menu Items** positioned in orbit pattern
- **Glassmorphism Effect** - Frosted glass backdrop
- **Animated Hamburger Icon** - Morphs to X when open
- **Keyboard Accessible**
- **Mobile Optimized**

**Menu Animation:**
- Staggered entrance (0.1s - 0.6s delays)
- Scale from 0.6 to 1
- Opacity fade-in
- Hover scale to 1.08
- Glow effects on hover

#### 2. **Global Background**
- Fixed background image (`desktop1.png`)
- Dark overlay (rgba(0,0,0,0.4))
- Consistent across all pages
- No parallax (removed for performance)

#### 3. **Custom Cursor** (SprayCursor)
- Spray paint effect following cursor
- Particle system
- Color: Teal (#0cf0b4)
- Fade-out animation
- Desktop only (hidden on mobile)

#### 4. **Loading System**
- Logo pulse animation
- Animated loading dots
- 6-second timeout fallback
- Video preload optimization
- Smooth fade transitions

#### 5. **Responsive Design**
- **Breakpoints:**
  - Desktop: 1024px+
  - Tablet: 768px - 1023px
  - Mobile: 480px - 767px
  - Small Mobile: < 480px
  - Extra Small: < 360px
- **Landscape Mode** optimizations
- **Touch Gestures** on mobile
- **Reduced Motion** support

---

## 🎬 Animation Effects

### Global Animations

#### 1. **Pulse Animation**
```css
@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
```
**Used in:**
- Logo loader (1.5s infinite)
- Active navigation dots (2s infinite)

#### 2. **Dots Animation**
```css
@keyframes dots {
  0% { content: ""; }
  33% { content: "."; }
  66% { content: ".."; }
  100% { content: "..."; }
}
```
**Used in:**
- Loading text (3.5s infinite)

#### 3. **Float In Animation**
```css
@keyframes floatIn {
  0% { opacity: 0; transform: translateY(18px) scale(0.96); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
```
**Used in:**
- Radial menu (0.65s ease forwards)

#### 4. **Shimmer Animation**
```css
@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```
**Used in:**
- Page titles (gradient text effect)

#### 5. **Slide Down Animation**
```css
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
```
**Used in:**
- Event popup (0.4s cubic-bezier)

#### 6. **Fade In Animation**
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```
**Used in:**
- Glimpses carousel (0.8s ease-out)
- Navigation dots (1s with 0.3s delay)

---

### Page-Specific Animations

#### **Home Page**
1. **Video Fade-In**
   - Opacity: 0 → 1
   - Duration: 800ms after load

2. **Navbar Slide-Down**
   - Transform: `translateY(calc(100vh - 100% - 30px))` → `translateY(0)`
   - Duration: 0.8s
   - Easing: `cubic-bezier(0.22, 1, 0.36, 1)`
   - Trigger: Video end

3. **Logo Pulse**
   - Continuous pulsing during load
   - Opacity oscillation

---

#### **About Page**
1. **Story Box Hover**
   - Sound effect trigger (`spray.mp3`)
   - Volume: 0.5

2. **Media Slider**
   - Slide transition
   - Key-based re-render for smooth animation

---

#### **Events Page**
1. **3D Carousel Transform**
   ```css
   transform: translateX(${offset * 180}px) 
              translateZ(${Math.abs(offset) * -100}px) 
              rotateY(${offset * -15}deg) 
              scale(${1 - Math.abs(offset) * 0.2})
   ```
   - **Center Card:** scale(1), rotateY(0deg), translateZ(0)
   - **Side Cards:** scale(0.8), rotateY(±15deg), translateZ(-100px)
   - **Transition:** 0.5s cubic-bezier(0.4, 0, 0.2, 1)

2. **Card Hover Effects**
   - Scale: 1 → 1.02
   - TranslateZ: +20px
   - Shadow expansion
   - Image scale: 1 → 1.1
   - Brightness: 1 → 1.2

3. **Popup Animation**
   - Slide down from top (-20px → 0)
   - Opacity: 0 → 1
   - Duration: 0.4s
   - Auto-scroll to popup

4. **Control Button Hover**
   - Scale: 1 → 1.1
   - Background: transparent → #ffd700
   - Glow effect (20px blur)

5. **Navigation Dot Pulse**
   - Active dot has pulsing ring
   - Scale: 1 → 1.5
   - Opacity: 1 → 0
   - Duration: 2s infinite

6. **Autoplay System**
   - Interval: 3000ms
   - Pauses on user interaction
   - Resume on play button

---

#### **Glimpses Page**
1. **3D Reflection Carousel**
   ```css
   /* Center */
   transform: translateZ(0px) scale(1.1)
   
   /* Left */
   transform: translateX(-350px) rotateY(45deg) scale(0.8)
   
   /* Right */
   transform: translateX(350px) rotateY(-45deg) scale(0.8)
   ```

2. **Reflection Effect**
   - `-webkit-box-reflect: below 10px linear-gradient(...)`
   - Yellow tint: rgba(255, 215, 0, 0.1)

3. **Mouse Parallax**
   - Background gradient follows mouse
   - `radial-gradient(ellipse at ${x}% ${y}%, ...)`

4. **Image Title Fade**
   - Opacity: 0 → 1 on hover
   - Transition: 0.3s ease

5. **Auto-rotation**
   - Interval: 4000ms
   - Pauses on hover
   - Resumes on mouse leave

6. **Side Image Overlays**
   - Dark overlay: rgba(0, 0, 0, 0.6)
   - Opacity: 0.8

---

#### **Team Page**
1. **View Transition**
   - Teams → Members smooth fade
   - Index reset to 0
   - Carousel re-initialization

2. **Team Card Hover**
   - Scale increase
   - Glow effect
   - Border color change

3. **Back Button**
   - Fixed position
   - z-index: 99999
   - Hover scale effect

4. **Mouse Parallax Background**
   - Same as Glimpses page
   - Radial gradient follows cursor

5. **Member Card Display**
   - Same 3D carousel as teams
   - Image with overlay
   - Name and role labels

---

#### **Sponsors Page**
1. **Title Sponsor Card**
   - Background image
   - Large featured display
   - Badge overlay

2. **Partner Card Hover**
   - Border glow
   - Shadow expansion
   - Icon scale

3. **Tier Card Animations**
   - Gold: Yellow glow (#ffd700)
   - Silver: Silver glow
   - Hover lift effect

4. **CTA Button**
   - Background transition
   - Border glow
   - Scale on hover

---

#### **Contacts Page**
1. **Contact Card Animations**
   - **Card Glow Element:**
     - Animated background gradient
     - Blur effect
   
   - **Hover Effects:**
     - Border color change
     - Shadow expansion
     - Icon scale
     - Arrow slide animation

2. **Form Input Animations**
   - **Floating Labels:**
     - Transform: translateY(0) → translateY(-24px)
     - Font-size: 16px → 12px
     - Color change
   
   - **Input Glow:**
     - Bottom border glow on focus
     - Color: #0cf0b4
     - Box-shadow expansion

   - **Character Counter:**
     - Real-time update
     - Color change near limit

3. **Submit Button**
   - **Normal State:**
     - Gradient background
     - Border glow
   
   - **Hover State:**
     - Scale: 1.05
     - Shadow expansion
     - Brightness increase
   
   - **Success State:**
     - Background: green
     - Text: "✓ Message Sent!"
     - Duration: 2s
     - Auto-reset

4. **Social Link Hover**
   - Platform-specific colors:
     - Instagram: Pink gradient
     - Facebook: Blue
     - Twitter: Light blue
   - Icon scale
   - Glow effect

---

### Navigation Menu Animations

#### **Menu Button**
1. **Hamburger → X Transform**
   - Top line: rotateY(45deg)
   - Middle line: rotate(-90deg)
   - Bottom line: opacity 0, scaleX(0)
   - Duration: 0.32s ease

2. **Button Hover**
   - TranslateY: -2px
   - Scale: 1.02
   - Border glow (#0cf0b4)
   - Shadow expansion

#### **Menu Overlay**
1. **Backdrop Entrance**
   - Opacity: 0 → 1
   - Scale: 1.02 → 1
   - Duration: 0.45s
   - Delay: 0.5s (after navbar moves)
   - Blur: 18px

2. **Radial Menu**
   - Float in animation
   - Duration: 0.65s

3. **Orbit Items (Staggered)**
   - **Item 1:** 0.1s delay
   - **Item 2:** 0.2s delay
   - **Item 3:** 0.3s delay
   - **Item 4:** 0.4s delay
   - **Item 5:** 0.5s delay
   - **Item 6:** 0.6s delay
   
   - Transform: scale(0.6) → scale(1)
   - Opacity: 0 → 1
   - Position: Radial orbit pattern

4. **Orbit Item Hover**
   - Scale: 1.08
   - Glow effect (20px blur)
   - Border color: #0cf0b4
   - Color: rgb(11, 237, 173)

5. **Center Button**
   - Radial gradient background
   - Hover: TranslateY(-3px), scale(1.03)
   - Glow effect (22px blur)

---

## 🛠 Technical Stack

### Frontend Framework
- **Next.js 15.1.3** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.x** - Type safety

### Styling
- **CSS Modules** - Component-scoped styling
- **Custom CSS** - Global styles and animations
- **CSS Variables** - Theme consistency

### Fonts
- **headerFont** - Main header font (`header.otf`)
- **GraffitiOne** - Primary graffiti font (`graffiti1.otf`)
- **GraffitiTwo** - Secondary graffiti font (`graffiti2.ttf`)
- **GraffitiThree** - Tertiary graffiti font (`graffiti3.ttf`)
- **GraffitiFour** - Quaternary graffiti font (`graffiti4.ttf`)
- **GraffitiYouth** - Youth graffiti font (`graffitiyouth.otf`)
- **ProtestRevolution** - Subtitle font (`ProtestRevolution-Regular.ttf`)

### Key Technologies
- **3D Transforms** - CSS perspective and transform-style
- **Backdrop Filters** - Glassmorphism effects
- **CSS Animations** - Keyframe animations
- **React Hooks** - useState, useEffect, useRef, useCallback
- **Context API** - Global state (IntroContext)
- **Touch Events** - Mobile gesture support
- **Keyboard Events** - Accessibility navigation

### Performance Optimizations
- **Video Preloading** - `preload="auto"`
- **Lazy Loading** - Component-based code splitting
- **useCallback** - Memoized functions
- **CSS will-change** - GPU acceleration hints
- **Reduced Motion** - Accessibility support

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zyzzvawebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
zyzzvawebsite/
├── app/
│   ├── about/
│   │   ├── page.tsx
│   │   └── about.module.css
│   ├── components/
│   │   ├── GlobalBackground.tsx
│   │   ├── Navbar.tsx
│   │   ├── Providers.tsx
│   │   └── SprayCursor.tsx
│   ├── contacts/
│   │   ├── page.tsx
│   │   └── contacts.module.css
│   ├── context/
│   │   └── IntroContext.tsx
│   ├── events/
│   │   ├── page.tsx
│   │   └── events.module.css
│   ├── glimpses/
│   │   ├── page.tsx
│   │   └── glimpses.module.css
│   ├── sponsor/
│   │   ├── page.tsx
│   │   └── sponsor.module.css
│   ├── team/
│   │   ├── page.tsx
│   │   └── team.module.css
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── font/
│   │   ├── header.otf
│   │   ├── graffiti1.otf
│   │   ├── graffiti2.ttf
│   │   ├── graffiti3.ttf
│   │   ├── graffiti4.ttf
│   │   ├── graffitiyouth.otf
│   │   └── ProtestRevolution-Regular.ttf
│   ├── desktop1.png
│   ├── logo.png
│   ├── laptop2.mp4
│   ├── VN20251208_012531.mp4
│   ├── spray.mp3
│   ├── event_night.png
│   ├── hackathon.png
│   ├── cultural_fest.png
│   ├── slider1.jpg
│   └── slider2.jpg
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🎨 Color Palette

### Primary Colors
- **Teal/Green:** `#0cf0b4` (rgb(12, 240, 180))
- **Gold/Yellow:** `#ffd700` (rgb(255, 215, 0))
- **White:** `#ffffff`
- **Black:** `#000000`

### Gradients
- **Primary Gradient:** `linear-gradient(135deg, #0cf0b4, #08a67d)`
- **Button Gradient:** `linear-gradient(145deg, rgba(12, 240, 180, 0.2), rgba(0, 0, 0, 0.4))`
- **Radial Glow:** `radial-gradient(circle at 50% 20%, rgba(12, 240, 180, 0.18), transparent)`

### Opacity Variations
- **Overlay Dark:** `rgba(0, 0, 0, 0.4)` - Background overlay
- **Overlay Darker:** `rgba(0, 0, 0, 0.6)` - Side image overlay
- **Overlay Darkest:** `rgba(0, 0, 0, 0.85)` - Card backgrounds
- **Glow Effect:** `rgba(12, 240, 180, 0.35)` - Hover glow

---

## 🎯 Key Interactions

### Desktop
- **Hover Effects** - All interactive elements
- **Keyboard Navigation** - Arrow keys, spacebar
- **Click Events** - Card selection, navigation
- **Mouse Parallax** - Background movement
- **Custom Cursor** - Spray paint effect

### Mobile
- **Touch Gestures** - Swipe navigation
- **Tap Events** - Card selection
- **Responsive Scaling** - Optimized layouts
- **Touch-friendly Buttons** - Larger hit areas

### Accessibility
- **Keyboard Support** - Full navigation
- **ARIA Labels** - Screen reader support
- **Reduced Motion** - Respects user preferences
- **Focus States** - Visible focus indicators
- **Semantic HTML** - Proper heading hierarchy

---

## 🚀 Performance Features

1. **Video Optimization**
   - Separate desktop/mobile videos
   - Preload strategy
   - Fallback timeout (6s)
   - Muted autoplay

2. **Animation Performance**
   - GPU acceleration (`transform`, `opacity`)
   - `will-change` hints
   - CSS animations over JS
   - Debounced event handlers

3. **Code Splitting**
   - Page-based code splitting
   - Dynamic imports
   - CSS Modules per component

4. **Image Optimization**
   - Proper sizing
   - WebP format support
   - Lazy loading ready

---

## 📱 Responsive Breakpoints

| Device | Width | Key Changes |
|--------|-------|-------------|
| **Desktop** | 1024px+ | Full 3D effects, large carousels |
| **Tablet** | 768-1023px | Reduced carousel size, adjusted spacing |
| **Mobile** | 480-767px | Simplified 3D, larger touch targets |
| **Small Mobile** | 360-479px | Minimal 3D, optimized layouts |
| **Extra Small** | <360px | Essential features only |
| **Landscape** | Height <500px | Vertical optimization |

---

## 🎭 Event Categories

All events feature:
- Unique icons
- Detailed descriptions
- Registration links
- Tag system
- Image posters
- Popup details

---

## 🤝 Contributing

This is a festival website for GNIT. For contributions or updates, please contact the development team.

---

## 📞 Contact Information

- **Email:** info@euphoniouszyzzva.com
- **Phone:** +91 98765 43210
- **Location:** GNIT Kolkata, West Bengal, India
- **Social Media:** Instagram, Facebook, Twitter

---

## 📄 License

© 2026 Euphonious × Zyzzva - Guru Nanak Institute of Technology. All rights reserved.

---

## 🙏 Acknowledgments

- **GNIT** - Guru Nanak Institute of Technology
- **GNCC** - Guru Nanak College Campus
- **Development Team** - Core, Marketing, PR, and Media teams
- **Sponsors** - All our valued partners

---

**Built with ❤️ for Euphonious × Zyzzva '26**
