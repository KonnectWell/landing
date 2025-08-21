import { AssetType, ExpertType } from './types'

import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import finance3 from '@/assets/images/landing/finance/img-3.jpg'
import finance4 from '@/assets/images/landing/finance/img-4.jpg'
import finance5 from '@/assets/images/landing/finance/img-5.jpg'

const experts: ExpertType[] = [
  {
    name: 'Sarah Mitchell',
    position: 'Certified Financial Planner (CFP®)',
    description:
      'Specializing in retirement planning and wealth management for over 15 years. Sarah has helped hundreds of families achieve their financial goals through personalized strategies and ongoing guidance. Her expertise includes tax-efficient investing, estate planning, and retirement income optimization.',
    image: avatar1,
  },
  {
    name: 'David Chen',
    position: 'Chartered Financial Analyst (CFA)',
    description:
      'David brings 12+ years of investment management experience with a focus on portfolio construction and risk management. He specializes in helping high-net-worth individuals and families build diversified investment portfolios that align with their long-term financial objectives and risk tolerance.',
    image: avatar3,
  },
]

const valuableAssets: AssetType[] = [
  {
    title: 'The Complete Guide to Financial Advisor Selection',
    description:
      'Learn the essential questions to ask, red flags to watch for, and criteria to consider when choosing your financial advisor. This comprehensive guide helps you make an informed decision.',
    image: finance3,
  },
  {
    title: 'Investment Strategy Fundamentals for Every Life Stage',
    description:
      'From early career to retirement, discover investment strategies tailored to your specific life stage and financial goals. Practical advice backed by financial planning best practices.',
    image: finance4,
  },
  {
    title: 'Tax-Efficient Wealth Building Strategies',
    description:
      'Maximize your wealth accumulation through smart tax planning. Learn about tax-advantaged accounts, harvesting strategies, and long-term tax optimization techniques.',
    image: finance5,
  },
]

export { experts, valuableAssets }
