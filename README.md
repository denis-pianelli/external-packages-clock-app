# Timezone Webpage

This project is a simple webpage that displays the current time and date for a selected timezone. Users can open a modal to choose their preferred timezone and see the updated time and date accordingly. Additionally, the webpage features a random quote fetched from the Quotable API and dynamically changes its background based on the time of day.

## Table of Contents

- [Timezone Webpage](#timezone-webpage)
	- [Table of Contents](#table-of-contents)
	- [Overview](#overview)
		- [Functionality](#functionality)
		- [Screenshots](#screenshots)
	- [My process](#my-process)
		- [Built with](#built-with)
		- [What I Learned](#what-i-learned)
	- [Usage](#usage)
		- [Installation](#installation)
		- [Run the Application](#run-the-application)

## Overview

### Functionality

- Users can open a modal to choose their preferred timezone.
- The webpage displays the current time and date for the selected timezone.
- The background dynamically changes based on the time of day (day or night).
- A random quote is fetched from the Quotable API and displayed on the page.

### Screenshots

![Desktop screenshot](<assets/images/Screenshot 2023-12-19 at 11-33-29 Clock app.png>)

![Desktop screenshot](<assets/images/Screenshot 2023-12-19 at 11-33-58 Clock app.png>)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- [dayjs](https://day.js.org/) - A minimalist JavaScript library for parsing, validating, manipulating, and formatting dates.
- [Quotable API](https://api.quotable.io/) - A free, open API for quotations.
- [MicroModal](https://micromodal.now.sh/) - A lightweight, configurable, and accessible modal library.

### What I Learned

During the development of this project, I gained insights into:

- Integrating and using the `dayjs` library for handling and formatting dates in JavaScript.
- Utilizing external APIs, such as the Quotable API, to fetch and display dynamic content on the webpage.
- Implementing a modal using the `MicroModal` library for an enhanced user experience.
- Dynamically adjusting the background based on the time of day, providing a visually appealing interface.

## Usage

### Installation

1. Clone the repository:
	 ```bash
	 git clone https://github.com/denis-pianelli/external-packages-clock-app.git
	 ```

2. Navigate to the project directory:
	 ```bash
	 cd your repo
	 ```

3. Install dependencies:
   ```bash
	 npm install
	 ```

### Run the Application
Open the index.html file in your preferred web browser.
