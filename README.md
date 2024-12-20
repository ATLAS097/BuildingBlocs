# Getting Started Guide

## Environment Setup
First, configure your environment variables:
- Ensure the `.env` file contains all required credentials:
  - Database connection details
  - API keys
  - Other necessary configuration variables

## Database Initialization
Initialize the database tables by running:
```bash
npm run init_tables
```

## Launch the Server
Start the development server:
```bash
npm run start
```

## Access the Website
You have two options to view the website:

### Option 1: Using Live Server
1. Install the Live Server VS Code extension if you haven't already
2. Click "Go Live" in the bottom right corner of VS Code
3. Your default browser will automatically open the website

### Option 2: Direct Access
Visit the hosted version at:
```
https://atlas097.github.io/BuildingBlocs/client/index.html
```

# About The Project

## Inspiration
The inspiration behind Santa's Bag comes from addressing two key challenges during the festive season:
- Many people want to give back to their communities but lack an easy, transparent way to contribute
- Donors often feel unrecognized for their efforts, which discourages continued participation in charitable giving
These challenges sparked the idea to create a platform that makes giving both simple and rewarding, while fostering a stronger sense of community during the holiday season.


## What it does
Santa's Bag is a user-friendly donation platform that combines ease of use with gamification elements:
- Provides a streamlined donation process where users can contribute items through a simple form-based interface
- Implements a points-based reward system where donors earn redeemable points for their contributions
- Features a dynamic leaderboard that showcases top donors and creates friendly competition
- Offers a point redemption system where users can exchange their earned points for exclusive gifts and discounts
- Displays a countdown timer to donation deadlines and tracks donation history


## How we built it
The platform was developed using a modern technology stack:
- Frontend: HTML, CSS, and Bootstrap 5 for creating a clean, responsive user interface
- Backend: JavaScript and Express for server-side logic and routing
- Database: MySQL2 for efficient data management and tracking of donations, points, and user information
- The website is structured with distinct pages for home, donations, and leaderboard, each serving specific functionalities while maintaining a cohesive user experience


## Challenges we ran into
Making the platform wasn’t easy work, there were some struggle we face along the way such as:
- Designing a fair and engaging point system that properly values different types of donations
- Implementing secure transaction handling for donations
- Managing database operations for real-time leaderboard updates
- Ensuring data consistency across different components when handling user donations and point calculations
-Linking the front-end with the back-end: While we had experience with front-end development (writing the website) and back-end systems like MySQL, we faced challenges integrating the two. Overcoming this involved learning new concepts and experimenting with ways to connect the user interface to the database seamlessly.


## Accomplishments that we're proud of
The team has created a comprehensive platform that:
- Successfully simplifies the donation process to make it accessible to everyone
- Implements a motivating reward system that encourages continued engagement
- Creates a competitive yet collaborative community through the leaderboard feature
- Develops a full-featured website with multiple integrated components working seamlessly together


## What we learned
Through this project, the team gained experience in:
- Full-stack web development using modern technologies
- Implementing gamification elements to encourage user engagement
- Creating systems that balance user experience with functional requirements
- Developing features that foster community involvement and social impact


## What's next for Santa's Bag
Future development possibilities include:
- Expanding the platform's reach to increase donations globally
- Enhancing the reward system with more diverse incentives
- Building additional community features to strengthen user connections
- Creating partnerships with organizations to expand the impact of donations
- Implementing additional features to track and celebrate the platform's impact on communities
