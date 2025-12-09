export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sme-ipo-complete-guide-2024",
    title: "Complete Guide to SME IPO in India 2024",
    excerpt: "Everything you need to know about launching your SME IPO - from eligibility criteria to listing requirements and beyond.",
    content: `<p>The SME IPO market in India has witnessed remarkable growth over the past few years, offering small and medium enterprises an excellent opportunity to raise capital and gain market visibility.</p>
    <h2>What is an SME IPO?</h2>
    <p>An SME IPO (Initial Public Offering) is when a small or medium-sized enterprise offers its shares to the public for the first time on the SME platform of stock exchanges like BSE SME or NSE Emerge.</p>
    <h2>Eligibility Criteria</h2>
    <ul>
      <li>Net tangible assets of at least ₹1 crore</li>
      <li>Net worth of at least ₹1 crore</li>
      <li>Track record of at least 3 years</li>
      <li>Positive operating cash flows for 2 out of 3 preceding years</li>
    </ul>
    <h2>Benefits of SME IPO</h2>
    <p>Listing on the SME platform provides access to capital, enhanced visibility, and improved credibility among stakeholders.</p>`,
    date: "December 5, 2024",
    category: "SME IPO",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
    author: "Mr. Saurabh Agarwal CS"
  },
  {
    slug: "benefits-of-listing-on-bse-sme",
    title: "Top 10 Benefits of Listing on BSE SME Platform",
    excerpt: "Discover how listing on BSE SME can transform your business growth trajectory and unlock new opportunities.",
    content: `<p>The BSE SME platform has emerged as a game-changer for small and medium enterprises looking to raise capital and gain market recognition.</p>
    <h2>Key Benefits</h2>
    <ol>
      <li><strong>Access to Capital:</strong> Raise funds for expansion without debt burden</li>
      <li><strong>Brand Visibility:</strong> Enhanced recognition in the market</li>
      <li><strong>Credibility:</strong> Listed companies enjoy higher trust among stakeholders</li>
      <li><strong>Liquidity:</strong> Shareholders get exit opportunities</li>
      <li><strong>Employee Retention:</strong> ESOPs become more attractive</li>
    </ol>`,
    date: "November 28, 2024",
    category: "SME IPO",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop",
    author: "Mr. Saurabh Agarwal CS"
  },
  {
    slug: "ncd-vs-equity-ipo",
    title: "NCD IPO vs Equity IPO: Which is Right for Your Company?",
    excerpt: "Understanding the key differences between NCD and equity offerings to make informed decisions for your business.",
    content: `<p>When planning to raise capital, companies often face the choice between Non-Convertible Debentures (NCDs) and Equity IPOs. Each has its own advantages and considerations.</p>
    <h2>What are NCDs?</h2>
    <p>Non-Convertible Debentures are fixed-income instruments that cannot be converted into equity shares. They offer fixed interest rates and have a defined maturity period.</p>
    <h2>Key Differences</h2>
    <ul>
      <li><strong>Ownership:</strong> Equity IPO dilutes ownership; NCDs don't</li>
      <li><strong>Returns:</strong> NCDs offer fixed returns; equity offers variable returns</li>
      <li><strong>Risk:</strong> NCDs are generally lower risk for investors</li>
    </ul>`,
    date: "November 20, 2024",
    category: "NCD",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
    author: "Mr. Saurabh Agarwal CS"
  },
  {
    slug: "reit-investment-opportunities",
    title: "REIT IPOs: Unlocking Real Estate Investment Opportunities",
    excerpt: "How REITs are democratizing real estate investment and what companies should know about REIT listings.",
    content: `<p>Real Estate Investment Trusts (REITs) have opened up new avenues for both investors and real estate companies in India.</p>
    <h2>What is a REIT?</h2>
    <p>A REIT is a company that owns, operates, or finances income-generating real estate. REITs provide investors with regular income streams and diversification.</p>
    <h2>REIT Listing Requirements</h2>
    <ul>
      <li>Minimum asset value of ₹500 crore</li>
      <li>At least 80% of assets must be completed and revenue-generating</li>
      <li>Mandatory distribution of 90% of net distributable cash flows</li>
    </ul>`,
    date: "November 15, 2024",
    category: "REIT",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    author: "Mr. Saurabh Agarwal CS"
  },
  {
    slug: "ipo-documentation-checklist",
    title: "Essential Documentation Checklist for Your IPO Journey",
    excerpt: "A comprehensive guide to all the documents you need to prepare before initiating your IPO process.",
    content: `<p>Proper documentation is crucial for a successful IPO. Missing or incomplete documents can delay your listing significantly.</p>
    <h2>Key Documents Required</h2>
    <ul>
      <li>Memorandum and Articles of Association</li>
      <li>Audited Financial Statements (3 years)</li>
      <li>Board Resolutions and Shareholder Approvals</li>
      <li>Due Diligence Reports</li>
      <li>Draft Red Herring Prospectus (DRHP)</li>
    </ul>
    <h2>Timeline Considerations</h2>
    <p>Start preparing documents at least 6-8 months before your planned IPO date to avoid last-minute rushes.</p>`,
    date: "November 8, 2024",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
    author: "Mr. Saurabh Agarwal CS"
  },
  {
    slug: "post-ipo-compliance-guide",
    title: "Navigating Post-IPO Compliance Requirements",
    excerpt: "What every newly listed company needs to know about ongoing compliance and reporting obligations.",
    content: `<p>Going public is just the beginning. Listed companies must adhere to strict compliance requirements to maintain their listing status.</p>
    <h2>Quarterly Requirements</h2>
    <ul>
      <li>Financial Results Declaration</li>
      <li>Shareholding Pattern Disclosure</li>
      <li>Corporate Governance Report</li>
    </ul>
    <h2>Annual Requirements</h2>
    <ul>
      <li>Annual Report with Audited Financials</li>
      <li>AGM Compliance</li>
      <li>Related Party Transaction Disclosures</li>
    </ul>`,
    date: "October 30, 2024",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop",
    author: "Mr. Saurabh Agarwal CS"
  }
];

export const getFeaturedPosts = (count: number = 3) => blogPosts.slice(0, count);
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);
