import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts Google Drive URL to direct image format
 * @param url Google Drive URL in format /file/d/FILE_ID/view?usp=sharing
 * @returns Converted URL for image display or original URL if not Google Drive
 */
export function convertGoogleDriveUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  
  // Check if it's a Google Drive URL
  const googleDriveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (googleDriveMatch) {
    const fileId = googleDriveMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  
  return url;
}