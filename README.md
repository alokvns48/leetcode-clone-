# LeetCode Clone

Welcome to the LeetCode Clone project! This is a web application that mimics the popular coding platform LeetCode, providing users with a collection of algorithmic challenges to solve. This application supports user authentication, problem solving, and various user interactions.

## Features

- **User Authentication**: Users can register, log in, and maintain their profiles.
- **Problem Solving**: Access a variety of coding problems and submit solutions.
- **Problem Interactions**: Like, dislike, and star problems.
- **Real-time Updates**: User progress and interactions are updated in real-time.

## Tech Stack

- **Frontend**: React, Next.js
- **State Management**: Recoil
- **Backend**: Firebase Firestore for database and authentication
- **Styling**: Tailwind CSS
- **Code Editor**: CodeMirror

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alokvns48/leetcode-clone.git
   cd leetcode-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project.
   - Enable Firestore and Authentication.
   - Replace the Firebase configuration in the project.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `src/components`: Contains all React components.
- `src/pages`: Next.js pages for routing.
- `src/utils`: Utility functions and problem definitions.
- `src/hooks`: Custom React hooks.
- `public`: Static assets.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by [LeetCode](https://leetcode.com/).

Feel free to explore, contribute, and use this project as a base for your own custom coding platform!
