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

    loadStats();
  }, []);
//   useEffect(() => {}, [stats]);
  const StatCard = ({ icon: Icon, title, value, color, description }: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    value: string | number;
    color: string;
    description?: string;
  }) => (
    <motion.div
    //   variants={item}
      className={`bg-white rounded-lg p-6 shadow-lg border-l-4 ${color} hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full ${color.replace('border-', 'bg-').replace('-500', '-100')}`}>
          <Icon className={`${color.replace('border-', 'text-')}`} size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
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
        className="bg-white rounded-lg p-6 shadow-lg"
      >
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold text-gray-900">{label}</h4>
          <span className="text-sm font-medium text-gray-600">
            {solved} / {total}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <motion.div
            className={`h-3 rounded-full ${color}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <p className="text-sm text-gray-600">{percentage.toFixed(1)}% solved</p>
      </motion.div>
    );
  };

  return (
    <section id="leetcode" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 
            variants={item}
            className="text-4xl font-bold text-center text-gray-900 mb-4"
          >
            LeetCode Statistics
          </motion.h2>
          
          <motion.p
            variants={item}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            My coding journey and problem-solving achievements on LeetCode platform
          </motion.p>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : stats ? (
            <>
              {/* Main Stats */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <StatCard
                  icon={Code}
                  title="Total Solved"
                  value={stats.totalSolved}
                  color="border-blue-500"
                  description="Problems completed"
                />
                
                <StatCard
                  icon={Target}
                  title="Acceptance Rate"
                  value={`${stats.acceptanceRate.toFixed(1)}%`}
                  color="border-green-500"
                  description="Success rate"
                />
                
                <StatCard
                  icon={Trophy}
                  title="Easy Problems"
                  value={stats.easySolved}
                  color="border-yellow-500"
                  description="Beginner level"
                />
                
                <StatCard
                  icon={TrendingUp}
                  title="Medium Problems"
                  value={stats.mediumSolved}
                  color="border-orange-500"
                  description="Intermediate level"
                />
              </div>

              {/* Progress Bars */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <ProgressBar
                  label="Easy"
                  solved={stats.easySolved}
                  total={Math.ceil(stats.totalQuestions * 0.4)} // Estimate 40% easy
                  color="bg-green-500"
                />
                
                <ProgressBar
                  label="Medium"
                  solved={stats.mediumSolved}
                  total={Math.ceil(stats.totalQuestions * 0.45)} // Estimate 45% medium
                  color="bg-yellow-500"
                />
                
                <ProgressBar
                  label="Hard"
                  solved={stats.hardSolved}
                  total={Math.ceil(stats.totalQuestions * 0.15)} // Estimate 15% hard
                  color="bg-red-500"
                />
              </div>

              {/* Achievement Badge */}
              <motion.div
                variants={item}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-8 text-center text-white shadow-lg"
              >
                <Trophy size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">50 Days Badge </h3>
                <p className="text-lg opacity-90 mb-4">
                  Consistently solved problems for 50 consecutive days
                </p>
                <a
                  href={`https://leetcode.com/u/${personalInfo.leetcode}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span>View LeetCode Profile</span>
                  <ExternalLink size={18} />
                </a>
              </motion.div>
            </>
          ) : (
            <motion.div
              variants={item}
              className="text-center py-20"
            >
              <Code size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                LeetCode Stats Unavailable
              </h3>
              <p className="text-gray-500 mb-6">
                Unable to fetch live statistics, but here's what I've achieved:
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <Trophy className="text-yellow-500" size={16} />
                    <span>300+ problems solved</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Target className="text-green-500" size={16} />
                    <span>50 days badge earned</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Code className="text-blue-500" size={16} />
                    <span>Strong DSA foundation</span>
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
