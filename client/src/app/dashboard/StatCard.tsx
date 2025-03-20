import { LucideIcon } from 'lucide-react';
import React from 'react'

type StatDetail = {
    title: string;
    amount: string;
    changePercentage: number;
    IconComponent: LucideIcon;
}

type StatCardProps = {
    title: string;
    primaryIcon: string;
    details: StatDetail[],
    dateRange: string;
}

const StatCard = ( {
    // title, primaryIcon, 
    // details, dateRange
} : StatCardProps) => {
    const formatPercentage = (value: number) => {
        const signal = value >= 0 ? "+" : "";
        return `${signal}${value.toFixed()}%`;
      };
  return (
    <div>StatCard</div>
  )
}

export default StatCard;
