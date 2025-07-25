import React, { useState, useEffect } from "react";
import "./FooterMarquee.css";

const FooterMarquee = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [location, setLocation] = useState("Detecting...");

  // Cập nhật thời gian mỗi giây
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const timeStr = now.toLocaleTimeString("en-US");
      setCurrentTime(`${dateStr} at ${timeStr}`);
    };

    updateClock(); // lần đầu
    const interval = setInterval(updateClock, 1000); // cập nhật mỗi giây
    return () => clearInterval(interval);
  }, []);

  // Lấy vị trí từ trình duyệt
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E`);
        },
        (error) => {
          setLocation("Permission denied");
        }
      );
    } else {
      setLocation("Not supported");
    }
  }, []);

  return (
    <footer className="marquee-footer">
      <div className="marquee-text">
        📅 {currentTime} ⎯ 📍 Your Location: {location} ⎯ 🌊 Welcome to BeachBlog - Discover Paradise 🌊 ⎯ ✈️ Book your dream beach vacation today! ✈️
      </div>
    </footer>
  );
};

export default FooterMarquee;
