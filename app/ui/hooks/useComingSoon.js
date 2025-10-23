// hooks/useComingSoon.js
"use client";
import { useToast } from './../Components/ToasterProvider';

export const useComingSoon = () => {
  const { showComingSoon } = useToast();

  const handleComingSoon = (e) => {
    if (e) e.preventDefault();
    showComingSoon();
  };

  return { handleComingSoon };
};