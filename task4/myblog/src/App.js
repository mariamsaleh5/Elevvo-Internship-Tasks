import Header from "./components/header";
import Searchbar from "./components/search";
import Category from "./components/category";
import Card from "./components/card";
import Home from "./components/home";
import reactImage from "./assests/images/react.png";
import sportImage from "./assests/images/sport.jpeg";
import healthImage from "./assests/images/health.jpeg";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: "React Basics", 
      category: "Tech",
      image: reactImage,
      description: "Learn the fundamentals of React including components, props, and state.",
      date: "2025-08-19"
    },
    { 
      id: 2, 
      title: "Football Updates", 
      category: "Sports",
      image: sportImage,
      description: "Latest updates from the world of football and upcoming matches.",
      date: "2025-08-18"
    },
    { 
      id: 3, 
      title: "Healthy Living Tips", 
      category: "Lifestyle",
      image: healthImage,
      description: "Simple tips for a healthier lifestyle and better daily habits.",
      date: "2025-08-15"
    },
    { 
      id: 4, 
      title: "Advanced React Hooks", 
      category: "Tech",
      image: reactImage,
      description: "Dive deep into custom hooks and advanced patterns in React.",
      date: "2025-08-10"
    },
    { 
      id: 5, 
      title: "World Cup Highlights", 
      category: "Sports",
      image: sportImage,
      description: "Relive the most exciting moments from the World Cup.",
      date: "2025-08-08"
    },
    { 
      id: 6, 
      title: "Nutrition Myths Busted", 
      category: "Lifestyle",
      image: healthImage,
      description: "Uncover the truth behind common nutrition myths.",
      date: "2025-08-07"
    },
    { 
      id: 7, 
      title: "React Router Guide", 
      category: "Tech",
      image: reactImage,
      description: "Learn how to navigate between pages in React using React Router.",
      date: "2025-08-05"
    },
    { 
      id: 8, 
      title: "Champions League Results", 
      category: "Sports",
      image: sportImage,
      description: "All the latest scores and results from the Champions League.",
      date: "2025-08-04"
    },
    { 
      id: 9, 
      title: "Mindfulness Practices", 
      category: "Lifestyle",
      image: healthImage,
      description: "Easy mindfulness techniques to improve your daily life.",
      date: "2025-08-02"
    },
    { 
      id: 10, 
      title: "React Performance Tips", 
      category: "Tech",
      image: reactImage,
      description: "Optimize your React applications for better speed and efficiency.",
      date: "2025-08-01"
    },
    { 
      id: 11, 
      title: "Premier League Transfers", 
      category: "Sports",
      image: sportImage,
      description: "Latest updates from the transfer market in the Premier League.",
      date: "2025-07-30"
    },
    { 
      id: 12, 
      title: "Fitness Routines at Home", 
      category: "Lifestyle",
      image: healthImage,
      description: "Stay fit with these simple home workout routines.",
      date: "2025-07-28"
    },
    { 
      id: 13, 
      title: "React State Management", 
      category: "Tech",
      image: reactImage,
      description: "Understand how to manage state in large React applications.",
      date: "2025-07-25"
    },
    { 
      id: 14, 
      title: "Olympic Games Preview", 
      category: "Sports",
      image: sportImage,
      description: "A look ahead at the upcoming Olympic Games events.",
      date: "2025-07-22"
    },
    { 
      id: 15, 
      title: "Healthy Sleep Habits", 
      category: "Lifestyle",
      image: healthImage,
      description: "Improve your sleep quality with these proven tips.",
      date: "2025-07-20"
    },
    { 
      id: 16, 
      title: "React Testing Library Intro", 
      category: "Tech",
      image: reactImage,
      description: "Get started with testing React components using RTL.",
      date: "2025-07-18"
    },
    { 
      id: 17, 
      title: "Tennis Grand Slam Updates", 
      category: "Sports",
      image: sportImage,
      description: "Catch up on the latest results from the tennis Grand Slams.",
      date: "2025-07-15"
    },
    { 
      id: 18, 
      title: "Balanced Diet Planning", 
      category: "Lifestyle",
      image: healthImage,
      description: "Create a balanced diet plan that works for your lifestyle.",
      date: "2025-07-12"
    }
  ]);

  return (
    <div>
      <Header />
      <Home posts={posts} />
    </div>
  );
}

export default App;
