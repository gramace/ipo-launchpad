import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const smeIPOs = [
  { name: "TechVentures Ltd", issuePrice: "₹125", listPrice: "₹305", change: "+144%", status: "Listed", date: "15 Mar 2024" },
  { name: "GreenEnergy Sol.", issuePrice: "₹98", listPrice: "₹185", change: "+89%", status: "Listed", date: "22 Jan 2024" },
  { name: "HealthFirst Pharma", issuePrice: "₹145", listPrice: "₹387", change: "+167%", status: "Listed", date: "10 Nov 2023" },
  { name: "AgriGrow Industries", issuePrice: "₹78", listPrice: "₹154", change: "+97%", status: "Listed", date: "05 Sep 2023" },
  { name: "FinServ Capital", issuePrice: "₹210", listPrice: "₹636", change: "+203%", status: "Listed", date: "18 Jul 2023" },
  { name: "BuildRight Infra", issuePrice: "₹165", listPrice: "₹422", change: "+156%", status: "Listed", date: "02 May 2023" },
];

const ncdIPOs = [
  { name: "HDFC Ltd NCD", issueSize: "₹3000 Cr", coupon: "8.75%", tenure: "5 Years", rating: "AAA", date: "Jan 2024" },
  { name: "Bajaj Finance NCD", issueSize: "₹5000 Cr", coupon: "8.25%", tenure: "3 Years", rating: "AAA", date: "Dec 2023" },
  { name: "Muthoot Finance NCD", issueSize: "₹1500 Cr", coupon: "9.00%", tenure: "7 Years", rating: "AA+", date: "Nov 2023" },
  { name: "Tata Capital NCD", issueSize: "₹2500 Cr", coupon: "8.50%", tenure: "5 Years", rating: "AAA", date: "Oct 2023" },
  { name: "L&T Finance NCD", issueSize: "₹3500 Cr", coupon: "8.40%", tenure: "4 Years", rating: "AAA", date: "Sep 2023" },
];

const reitIPOs = [
  { name: "Embassy Office Parks", assetValue: "₹35,000 Cr", yield: "6.5%", area: "42.4M sqft", occupancy: "87%", date: "2019" },
  { name: "Mindspace REIT", assetValue: "₹21,500 Cr", yield: "6.8%", area: "31.8M sqft", occupancy: "90%", date: "2020" },
  { name: "Brookfield India REIT", assetValue: "₹12,000 Cr", yield: "7.2%", area: "18.6M sqft", occupancy: "92%", date: "2021" },
  { name: "Nexus Select Trust", assetValue: "₹16,000 Cr", yield: "6.0%", area: "9.8M sqft", occupancy: "95%", date: "2023" },
];

const otherIPOs = [
  { name: "XYZ InvIT", type: "InvIT", issueSize: "₹4,500 Cr", sector: "Infrastructure", status: "Upcoming", date: "Q2 2024" },
  { name: "ABC Power InvIT", type: "InvIT", issueSize: "₹3,200 Cr", sector: "Power", status: "Filed", date: "Q3 2024" },
  { name: "Tech Mainboard IPO", type: "Mainboard", issueSize: "₹8,000 Cr", sector: "Technology", status: "Draft", date: "Q4 2024" },
  { name: "Retail Giants Ltd", type: "Mainboard", issueSize: "₹5,500 Cr", sector: "Retail", status: "Upcoming", date: "Q2 2024" },
];

const getChangeIcon = (change: string) => {
  if (change.startsWith("+")) return <TrendingUp className="w-4 h-4 text-emerald-500" />;
  if (change.startsWith("-")) return <TrendingDown className="w-4 h-4 text-red-500" />;
  return <Minus className="w-4 h-4 text-muted-foreground" />;
};

const IPODataSection = () => {
  return (
    <section id="ipo-data" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Market Data</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            IPO Performance Dashboard
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Comprehensive data on various IPO categories including SME, NCDs, REITs, and more.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="sme" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-4 mb-8 bg-navy/5 border border-border">
            <TabsTrigger value="sme" className="data-[state=active]:bg-gold data-[state=active]:text-navy">
              SME IPO
            </TabsTrigger>
            <TabsTrigger value="ncd" className="data-[state=active]:bg-gold data-[state=active]:text-navy">
              NCD
            </TabsTrigger>
            <TabsTrigger value="reit" className="data-[state=active]:bg-gold data-[state=active]:text-navy">
              REIT
            </TabsTrigger>
            <TabsTrigger value="other" className="data-[state=active]:bg-gold data-[state=active]:text-navy">
              Others
            </TabsTrigger>
          </TabsList>

          {/* SME IPO Table */}
          <TabsContent value="sme">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <Table>
                <TableHeader>
                  <TableRow className="bg-navy/5 hover:bg-navy/5">
                    <TableHead className="font-semibold text-foreground">Company</TableHead>
                    <TableHead className="font-semibold text-foreground">Issue Price</TableHead>
                    <TableHead className="font-semibold text-foreground">Listing Price</TableHead>
                    <TableHead className="font-semibold text-foreground">Change</TableHead>
                    <TableHead className="font-semibold text-foreground">Status</TableHead>
                    <TableHead className="font-semibold text-foreground">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {smeIPOs.map((ipo, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{ipo.name}</TableCell>
                      <TableCell>{ipo.issuePrice}</TableCell>
                      <TableCell>{ipo.listPrice}</TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                          {getChangeIcon(ipo.change)} {ipo.change}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                          {ipo.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{ipo.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* NCD Table */}
          <TabsContent value="ncd">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <Table>
                <TableHeader>
                  <TableRow className="bg-navy/5 hover:bg-navy/5">
                    <TableHead className="font-semibold text-foreground">Issuer</TableHead>
                    <TableHead className="font-semibold text-foreground">Issue Size</TableHead>
                    <TableHead className="font-semibold text-foreground">Coupon Rate</TableHead>
                    <TableHead className="font-semibold text-foreground">Tenure</TableHead>
                    <TableHead className="font-semibold text-foreground">Rating</TableHead>
                    <TableHead className="font-semibold text-foreground">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ncdIPOs.map((ncd, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{ncd.name}</TableCell>
                      <TableCell>{ncd.issueSize}</TableCell>
                      <TableCell className="text-gold font-semibold">{ncd.coupon}</TableCell>
                      <TableCell>{ncd.tenure}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-navy/10 text-navy text-xs font-medium rounded-full">
                          {ncd.rating}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{ncd.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* REIT Table */}
          <TabsContent value="reit">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <Table>
                <TableHeader>
                  <TableRow className="bg-navy/5 hover:bg-navy/5">
                    <TableHead className="font-semibold text-foreground">REIT Name</TableHead>
                    <TableHead className="font-semibold text-foreground">Asset Value</TableHead>
                    <TableHead className="font-semibold text-foreground">Distribution Yield</TableHead>
                    <TableHead className="font-semibold text-foreground">Leasable Area</TableHead>
                    <TableHead className="font-semibold text-foreground">Occupancy</TableHead>
                    <TableHead className="font-semibold text-foreground">Listed</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reitIPOs.map((reit, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{reit.name}</TableCell>
                      <TableCell>{reit.assetValue}</TableCell>
                      <TableCell className="text-gold font-semibold">{reit.yield}</TableCell>
                      <TableCell>{reit.area}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                          {reit.occupancy}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{reit.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Other IPOs Table */}
          <TabsContent value="other">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <Table>
                <TableHeader>
                  <TableRow className="bg-navy/5 hover:bg-navy/5">
                    <TableHead className="font-semibold text-foreground">Name</TableHead>
                    <TableHead className="font-semibold text-foreground">Type</TableHead>
                    <TableHead className="font-semibold text-foreground">Issue Size</TableHead>
                    <TableHead className="font-semibold text-foreground">Sector</TableHead>
                    <TableHead className="font-semibold text-foreground">Status</TableHead>
                    <TableHead className="font-semibold text-foreground">Expected</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {otherIPOs.map((ipo, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{ipo.name}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 bg-navy/10 text-navy text-xs font-medium rounded-full">
                          {ipo.type}
                        </span>
                      </TableCell>
                      <TableCell>{ipo.issueSize}</TableCell>
                      <TableCell>{ipo.sector}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          ipo.status === "Upcoming" ? "bg-gold/20 text-gold-dark" :
                          ipo.status === "Filed" ? "bg-blue-100 text-blue-700" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          {ipo.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{ipo.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default IPODataSection;
