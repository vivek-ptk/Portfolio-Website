'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchLeetCodeStats, LeetCodeStats } from '@/lib/leetcode';
import { personalInfo } from '@/data/resume';
import { Code, Trophy, Target, TrendingUp, ExternalLink } from 'lucide-react';

const container = {
//   hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
//   hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const leetCodeStats = await fetchLeetCodeStats(personalInfo.leetcode);
        setStats(leetCodeStats);
        setLoading(false);
        console.log(leetCodeStats)
      } catch (error) {
        console.error('Failed to load LeetCode stats:', error);
      } 
    };

    loadStats();  }, []);

  const StatCard = ({ icon: Icon, title, value, color, description }: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    value: string | number;
    color: string;
    description?: string;
  }) => (
    <motion.div
      className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300"
    >
      <div className="flex items-center space-x-4">
        <div className="border border-gray-700 p-3 rounded-full">
          <Icon className="text-white" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-light text-gray-400">{title}</h3>
          <p className="text-2xl font-light text-white">{value}</p>
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ProgressBar = ({ label, solved, total, color }: {
    label: string;
    solved: number;
    total: number;
    color: string;
  }) => {
    const percentage = total > 0 ? (solved / total) * 100 : 0;
    return (
      <motion.div
        variants={item}
        className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300"
      >
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-light text-white">{label}</h4>
          <span className="text-sm font-light text-gray-400">
            {solved} / {total}
          </span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
          <motion.div
            className={`h-2 rounded-full ${color}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <p className="text-sm text-gray-500">{percentage.toFixed(1)}% solved</p>
      </motion.div>
    );
  };
  return (
    <section id="leetcode" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Section Header */}
          <motion.div 
            variants={item}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">
              coding journey
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              My problem-solving achievements and coding consistency on LeetCode platform.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
            </div>
          ) : stats ? (
            <>
              {/* Main Stats */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <StatCard
                  icon={Code}
                  title="Total Solved"
                  value={stats.totalSolved}
                  color="text-white"
                  description="Problems completed"
                />
                
                <StatCard
                  icon={Target}
                  title="Acceptance Rate"
                  value={`${stats.acceptanceRate.toFixed(1)}%`}
                  color="text-white"
                  description="Success rate"
                />
                
                <StatCard
                  icon={Trophy}
                  title="Easy Problems"
                  value={stats.easySolved}
                  color="text-white"
                  description="Beginner level"
                />
                
                <StatCard
                  icon={TrendingUp}
                  title="Medium Problems"
                  value={stats.mediumSolved}
                  color="text-white"
                  description="Intermediate level"
                />
              </div>

              {/* Progress Bars */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <ProgressBar
                  label="Easy"
                  solved={stats.easySolved}
                  total={Math.ceil(stats.totalQuestions * 0.4)}
                  color="bg-green-600"
                />
                
                <ProgressBar
                  label="Medium"
                  solved={stats.mediumSolved}
                  total={Math.ceil(stats.totalQuestions * 0.45)}
                  color="bg-yellow-600"
                />
                
                <ProgressBar
                  label="Hard"
                  solved={stats.hardSolved}
                  total={Math.ceil(stats.totalQuestions * 0.15)}
                  color="bg-red-600"
                />
              </div>

              {/* Achievement Badge */}
              <motion.div
                variants={item}
                className="border border-gray-800 rounded-lg p-8 text-center hover:border-gray-700 transition-colors duration-300"
              >
                <Trophy size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl font-light tracking-tight mb-2 text-white">50 Days Badge</h3>
                <p className="text-gray-400 mb-6">
                  Consistently solved problems for 50 consecutive days
                </p>
                <a
                  href={`https://leetcode.com/u/${personalInfo.leetcode}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <span className="font-light tracking-wider">VIEW LEETCODE PROFILE</span>
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            </>
          ) : (
            <motion.div
              variants={item}
              className="text-center py-20"
            >
              <Code size={48} className="mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-light tracking-tight text-gray-400 mb-2">
                LeetCode Stats Unavailable
              </h3>
              <p className="text-gray-500 mb-8">
                Unable to fetch live statistics, but here's what I've achieved:
              </p>
              <div className="border border-gray-800 rounded-lg p-6 max-w-md mx-auto">
                <h4 className="text-lg font-light text-white mb-4">Achievements</h4>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-3">
                    <Trophy className="text-gray-400" size={16} />
                    <span className="text-gray-400">300+ problems solved</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Target className="text-gray-400" size={16} />
                    <span className="text-gray-400">50 days badge earned</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Code className="text-gray-400" size={16} />
                    <span className="text-gray-400">Strong DSA foundation</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
