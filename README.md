# 100-Day Block-Building Challenge

## Project Goal

Welcome to my 100-day challenge! The goal of this project is to build ten common website blocks from scratch, dedicating ten days to each block. This challenge is designed to deepen my understanding of HTML, CSS, and JavaScript, focusing on both functionality and modern design principles.

Each block will be a self-contained component, and I'll be exploring how to replicate the features found in popular WordPress block plugins like Kadence, Genesis, and Stackable.

## Challenge Rules

To keep this challenge focused and ensure consistent progress, I've set the following rules for myself:

1. **One Block, Ten Days:** I will dedicate ten days to building each of the ten blocks on the list. I will not move on to the next block until I have successfully completed the core functionalities of the current one.

2. **Focus on Functionality First:** The primary goal is to make each block work correctly. After the functionality is solid, I will spend time on styling and design to make it look polished.

3. **Keep It Self-Contained:** Each block will be built in its own dedicated folder, with all necessary HTML, CSS, and JavaScript files included. This modular approach will make the code easy to review and reuse.

4. **Daily Progress:** I will commit my code and push my progress to this repository at least once a day, even if it's a small change. This ensures consistent progress and a detailed log of my journey.

5. **Document as I Go:** For each block, I will write a brief summary in its folder's README file explaining what I learned, any challenges I faced, and the key features I implemented.

6. **Seek Feedback:** I will share my progress on social media using the hashtag #100DaysOfCode and will be open to feedback and suggestions from the community. This will help me learn faster and improve my skills.

## The 10 Blocks

Here is the list of blocks I will be building, sorted from simplest to most complex, with a detailed 10-day functionality breakdown for each.

### **1. Icon Button** (Days 1-10)

A simple but essential component for adding visual flair and functionality.

* **Days 1-2:** Use Block Variations to Extend the button block.

* **Days 3-4:** Use a custom icon selector.

* **Days 5-6:** Add settings for the icon, color, size, gap.

* **Days 7-8:** Implement on frontend.

* **Days 9-10:** Create a way to add custom icons.

### **2. Countdown Block** (Days 11-20)

A dynamic block that creates urgency.

* **Days 11-12:** Build the basic HTML structure with separate elements for days, hours, minutes, and seconds.

* **Days 13-14:** Use JavaScript to set a target date and time. Learn to calculate the difference between the current time and the target time.

* **Days 15-16:** Display the calculated time difference in the correct elements. Implement a `setInterval` function to update the numbers every second.

* **Days 17-18:** Add styling to make the numbers and labels visually appealing. Use CSS to create a countdown box layout.

* **Days 19-20:** Add logic to display a custom message or hide the block once the countdown reaches zero.

### **3. Progress Bar** (Days 21-30)

A visual indicator of progress.

* **Days 21-22:** Create the HTML for the progress bar container and the inner "filled" bar.

* **Days 23-24:** Use CSS to style the bar with a background color and a different color for the filled portion.

* **Days 25-26:** Add a text element to display the percentage complete. Use JavaScript to dynamically update the percentage text.

* **Days 27-28:** Implement a function that changes the width of the filled bar based on a percentage value.

* **Days 29-30:** Add a smooth CSS **transition** to the width property, so the bar fills up with a subtle animation when the value changes.

### **4. Modal** (Days 31-40)

An interactive pop-up window.

* **Days 31-32:** Create the HTML for the modal popup and a button to trigger it. The modal should be hidden by default.

* **Days 33-34:** Use JavaScript to add and remove a CSS class that makes the modal visible when the button is clicked.

* **Days 35-36:** Add a "close" button (like an 'X') inside the modal. Implement the functionality to close the modal when this button is clicked.

* **Days 37-38:** Add an event listener to close the modal when the user clicks anywhere outside of its content area.

* **Days 39-40:** Implement a simple animation using CSS **`keyframes`** for a fade-in and fade-out effect when the modal opens and closes.

### **5. Accordion** (Days 41-50)

A collapsible content block.

* **Days 41-42:** Build the basic HTML structure for an accordion, with a list of "accordion headers" and hidden "accordion content" for each item.

* **Days 43-44:** Write JavaScript to toggle the visibility of the content panel when a header is clicked.

* **Days 45-46:** Add a visual indicator (e.g., a plus/minus icon) that changes state to show whether the panel is open or closed.

* **Days 47-48:** Implement a "single-open" functionality, so when a new accordion panel is opened, the previously open one automatically closes.

* **Days 49-50:** Use CSS transitions to animate the height of the content panel, so it expands and collapses smoothly.

### **6. Team Block** (Days 51-60)

A structured layout for showcasing team members.

* **Days 51-52:** Create the HTML and CSS for a single "team member card" with an image, name, and title.

* **Days 53-54:** Add social media icons to the card and style them to match the design.

* **Days 55-56:** Use a CSS grid or flexbox to create a responsive layout that displays multiple team member cards in a grid.

* **Days 57-58:** Implement a hover effect on the cards, such as a slight lift or a subtle overlay to make them interactive.

* **Days 59-60:** Practice creating a reusable JavaScript function or template to quickly generate new team member cards based on an array of data.

### **7. Tabs** (Days 61-70)

A space-saving component for organizing content.

* **Days 61-62:** Build the HTML for the tab navigation and the corresponding content panels.

* **Days 63-64:** Use JavaScript to handle the click events on the tabs. When a tab is clicked, add an "active" class to the tab and its content panel.

* **Days 65-66:** Use CSS to style the active tab differently from the inactive tabs (e.g., a different background color or an underlined border).

* **Days 67-68:** Add logic to ensure only one content panel is visible at a time.

* **Days 69-70:** Explore how to make the tabs responsive. For mobile, the tabs might stack vertically or be converted into a dropdown menu.

### **8. Pricing Table** (Days 71-80)

A complex layout block for displaying service plans.

* **Days 71-72:** Create the HTML and CSS for a single pricing column, including the price, features list, and a CTA button.

* **Days 73-74:** Use CSS Grid to create a multi-column pricing table. Ensure all columns are aligned and have consistent spacing.

* **Days 75-76:** Highlight a "popular" or "recommended" plan by applying different styling, such as a prominent background color or a special badge.

* **Days 77-78:** Practice using CSS variables to manage colors, fonts, and spacing across the pricing table for easy customization.

* **Days 79-80:** Make the pricing table responsive. When the screen is small, the columns should stack vertically instead of side-by-side.

### **9. Gallery** (Days 81-90)

A visually rich component for displaying images.

* **Days 81-82:** Create a basic HTML grid of thumbnail images.

* **Days 83-84:** Implement a lightbox feature. When a user clicks a thumbnail, a modal-like popup should appear with the larger image.

* **Days 85-86:** Add "next" and "previous" buttons to the lightbox so users can navigate through the gallery images without closing the popup.

* **Days 87-88:** Add a simple filtering or sorting feature using JavaScript, allowing users to view images based on a category.

* **Days 89-90:** Ensure the gallery and the lightbox are fully responsive, with images scaling correctly on all devices.

### **10. Slider (or Carousel)** (Days 91-100)

The final and most complex block.

* **Days 91-92:** Build the HTML structure for a slider, with a wrapper and a series of slides inside. Use CSS to hide all but one slide.

* **Days 93-94:** Add "next" and "previous" buttons. Use JavaScript to change which slide is visible when a button is clicked.

* **Days 95-96:** Add navigation dots at the bottom of the slider. Implement logic to show which slide is active and to navigate to a specific slide when a dot is clicked.

* **Days 97-98:** Implement a feature for **autoplay**, where the slider automatically advances to the next slide at a set interval. Add the ability to pause the autoplay on hover.

* **Days 99-100:** Add smooth CSS transitions or animations to the slides to create a professional sliding effect. Ensure the entire component is fully responsive.

## How I'm Tracking My Progress

Each block will be documented in its own folder, containing the HTML, CSS, and JavaScript files. I will also be sharing my progress and lessons learned on [Platform of your choice, e.g., Twitter, LinkedIn, a personal blog] using the hashtag #100DaysOfCode.

## Getting Started

To view my progress, simply clone this repository:
