# Sri Marattil Kottaram Temple Website Template

Static HTML/CSS/JS website for the 43rd All India Sreemad Bhagavatha Mahasathram.

Open `index.html` directly in a browser. No build process is required.

Before publishing:
1. Replace `assets/images/upi-qr-placeholder.png` with the verified temple UPI QR.
2. Update the placeholder UPI ID in `donations.html`.
3. Edit timetable content in `assets/app.js`.
4. Add daily photos to `assets/images/` and update the `gallery` array in `assets/app.js`. It is newest-first by design.
5. Replace the map placeholder in `contact.html` with an official Google Maps embed.


About page update: `assets/images/bhagavathy.png` is used to display the Bhagavathy image on the About page.

Header image update: `assets/images/temple-header.jpg` is displayed as a small header image on every page.

Hero title updated to: Akhilandia Sreemad Bhagavatha Sathram (one line, reduced text size).

Homepage hero title updated to two lines: "43RD" and "AKHILA BHARATHA SREEMAD BHAGAVATHA MAHASATHRAM" in uppercase.

Homepage hero title updated in Malayalam: 43-ാമത് / അഖിലഭാരത ശ്രീമദ് ഭാഗവത മഹാസത്രം.

Homepage updated: uploaded temple image is now the hero banner and the edition text is set to "43RD".

Homepage edition text updated to 43<sup>rd</sup> (superscript rd).

Header update: the Om symbol was replaced with `assets/images/header-bhagavathy.png` using the same circular size in the top brand area.

About page updated with the supplied temple history, deities, management details, Thalapoli / fireworks festival and Mudiyettu information.

Contact page update: embedded Google Maps location for Sri Marattil Kottaram Bhagavathy Temple.

Homepage About Mahasathram card updated with the supplied description of the Akhila Bharatha Srimad Bhagavatha Maha Sathram.

Homepage update: the separate welcome section was merged into the About Mahasathram card.

Homepage update: replaced the Programme and Gallery Highlights cards with a single About Mahasathram text-and-image section using `assets/images/mahasathram-about.jpg`.

Photos update: added visual photo sections to the About, Programme, Donations, Contact, Gallery and Home pages.


Final update: Gallery now contains a labelled event photo for every Day 1–Day 11. The website uses a warm cream, saffron and temple-maroon devotional palette, with Helvetica/Arial as the main font stack.

## General gallery tab
The Gallery page now has a **General** tab for committee formation, temple meetings, and other non-day-wise photos. Add images to `assets/images/` and add entries with `category:'general'` at the start of the `gallery` array in `assets/app.js`.

Update: removed the bottom/footer image sections from the website pages.

Headings updated: all main website headings now use an attractive uppercase Helvetica-style type system with a slightly reduced size.

Gallery refresh: all daily and General gallery images have been replaced with new devotional temple-themed visuals in assets/images/gallery-refresh/.


## Multilingual mode
Use the EN / മ buttons in the top navigation to switch between English and Malayalam. The choice is saved in the browser.

Full translation update: every visible website text, navigation, About, Donations, Contact, Gallery labels, Programme calendar and daily programme entries now switch between English and Malayalam.

Donation QR updated with UPI ID: boim-858011200072@boi and payee name Marattil Kottaram Bhagavathy Temple. The uploaded QR reference image is saved as assets/images/upi-qr-uploaded-reference.png.

WhatsApp update: site-wide WhatsApp links now use 9249062538 and the number is shown on the Contact page.

Updated all main headings to a smaller Calibre-style font stack across every page.

Bhagavathy Darshanam section updated to use the newly uploaded Bhagavathy photo.

Removed Bhagavathy Darshanam section and image from About page.

Home page hero updated with blended temple background, Krishna, Kottaram Bhagavathy and Poornathreyeesan images.

Hero updated: deity images are now equal, smaller circular images and the temple background is made more visible.

Hero updated to seamless blend the deity images into the temple background with no frames or separated shapes.

Adjusted home hero so Kottaram Bhagavathy and Poornathreyeesan are approximately the same height as Krishna.

Home hero updated: removed Krishna and Poornathreyeesan, added Guruvayoorappan with Kottaram Bhagavathy blended into the temple photo.

Gallery update: all day-wise gallery photos were removed from display. Only the General tab is shown, using the newly uploaded seven photos.

Photo captions removed from gallery and homepage photo cards.

Gallery update: General plus Day 1 to Day 11 tabs have been added. General contains the uploaded photos; each day tab is ready for adding photos later.

Gallery placeholder text updated: day-wise tabs now say photos will appear after the day's event.

Gallery lead text updated to remove the recent-day sentence.

Gallery tabs fixed: all day tabs are clickable and show 'Photos will appear after the day's event.'

Final gallery fix: tab selection now uses a load-time event delegation handler so General and Day 1–Day 11 tabs are selectable.

Gallery lead text updated to remove the newest-day sentence.

Repaired website from the last working styled ZIP. Restored CSS/JS, updated page header image, and updated About Our Temple section image.

Programme page text updated: removed the second placeholder sentence.
