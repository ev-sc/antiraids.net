"use client"

import React from "react"

type IconType =
  | "menu"
  | "close"
  | "warning"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up-right"
  | "arrow-down"
  | "people"
  | "wrench"
  | "book"
  | "search"
  | "chevron-down"
  | "minus"
  | "plus"
  | "envelope"
  | "facebook"
  | "twitter"
  | "instagram"
  | "diamond"
  | "ellipsis-vertical"
  | "link"

interface IconProps {
  type: IconType
  size?: number
  color?: string
  className?: string
}

export function Icon({ type, size = 24, color = "currentColor", className = "" }: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  }

  switch (type) {
    case "menu":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      )

    case "close":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )

    case "warning":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05l-8.47-14.14a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )

    case "arrow-left":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      )

    case "arrow-right":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )

    case "arrow-up-right":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      )

    case "arrow-down":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      )

    case "people":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill={color}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )

    case "wrench":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )

    case "book":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )

    case "search":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )

    case "chevron-down":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      )

    case "minus":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      )

    case "plus":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      )

    case "envelope":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )

    case "facebook":
      return (
        <svg {...commonProps} fill={color} viewBox="0 0 24 24" stroke="none">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )

    case "twitter":
      return (
        <svg {...commonProps} fill={color} viewBox="0 0 24 24" stroke="none">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )

    case "instagram":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
          <path
            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1.5" fill={color} />
        </svg>
      )

    case "diamond":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )

    case "ellipsis-vertical":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="1" fill={color} />
          <circle cx="12" cy="12" r="1" fill={color} />
          <circle cx="12" cy="19" r="1" fill={color} />
        </svg>
      )

    case "link":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )

    default:
      return null
  }
}
