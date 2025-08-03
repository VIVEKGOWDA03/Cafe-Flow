// // QR Scanner Component - JSX Version
// // Handles table scanning, customer details, and dashboard

// import React, { useState } from "react";
// import { Button } from "../ui/button";
// import { Card } from "../ui/card";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { QrCode, Smartphone, Users, ArrowRight } from "lucide-react";

// export const QRScanner = () => {
//   const [step, setStep] = useState('scan'); // 'scan' | 'details' | 'dashboard'
//   const [tableNumber, setTableNumber] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleScanSimulation = () => {
//     setTableNumber('Table 7');
//     setStep('details');
//   };

//   const handleSubmitDetails = () => {
//     if (customerName && phone) {
//       setStep('dashboard');
//     }
//   };

//   // QR Code Scanner View
//   if (step === 'scan') {
//     return (
//       <div className="max-w-md mx-auto">
//         <Card className="p-8 text-center glass">
//           <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
//             <QrCode className="w-10 h-10 text-white" />
//           </div>
          
//           <h2 className="text-2xl font-bold text-white mb-4">Scan QR Code</h2>
//           <p className="text-white/80 mb-8">
//             Point your camera at the QR code on your table to get started
//           </p>

//           <div className="relative mb-8">
//             <div className="w-48 h-48 mx-auto border-2 border-primary rounded-lg bg-card/20 flex items-center justify-center">
//               <div className="w-32 h-32 border-2 border-white/40 rounded-lg animate-pulse">
//                 <div className="w-full h-full bg-gradient-primary/20 rounded-lg flex items-center justify-center">
//                   <QrCode className="w-16 h-16 text-white/60" />
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-0 pointer-events-none">
//               <div className="w-full h-1 bg-primary/60 animate-pulse absolute top-1/2 transform -translate-y-1/2"></div>
//             </div>
//           </div>

//           <Button 
//             variant="hero" 
//             size="lg" 
//             onClick={handleScanSimulation}
//             className="w-full"
//           >
//             <Smartphone className="w-5 h-5" />
//             Simulate Scan
//           </Button>
//         </Card>
//       </div>
//     );
//   }

//   // Customer Details Form
//   if (step === 'details') {
//     return (
//       <div className="max-w-md mx-auto">
//         <Card className="p-8 glass">
//           <div className="text-center mb-6">
//             <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
//               <Users className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-white mb-2">Welcome to {tableNumber}</h2>
//             <p className="text-white/80">Please enter your details to continue</p>
//           </div>

//           <div className="space-y-6">
//             <div>
//               <Label htmlFor="name" className="text-white">Full Name</Label>
//               <Input
//                 id="name"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//                 placeholder="Enter your name"
//                 className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60"
//               />
//             </div>

//             <div>
//               <Label htmlFor="phone" className="text-white">Phone Number</Label>
//               <Input
//                 id="phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter your phone number"
//                 className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/60"
//               />
//             </div>

//             <Button 
//               variant="hero" 
//               size="lg" 
//               onClick={handleSubmitDetails}
//               className="w-full"
//               disabled={!customerName || !phone}
//             >
//               Continue to Dashboard
//               <ArrowRight className="w-5 h-5" />
//             </Button>
//           </div>
//         </Card>
//       </div>
//     );
//   }

//   // Customer Dashboard
//   return (
//     <div className="max-w-2xl mx-auto">
//       <Card className="p-8 glass">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-white mb-2">Welcome {customerName}!</h2>
//           <p className="text-white/80">You're seated at {tableNumber}</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Card className="p-6 bg-card/20 border-border/20">
//             <h3 className="text-xl font-semibold text-white mb-4">Current Bill</h3>
//             <div className="text-3xl font-bold text-secondary mb-2">₹1,247</div>
//             <p className="text-white/60 text-sm mb-4">3 items • 2 people</p>
//             <Button variant="cafe" size="sm" className="w-full">
//               View Full Bill
//             </Button>
//           </Card>

//           <Card className="p-6 bg-card/20 border-border/20">
//             <h3 className="text-xl font-semibold text-white mb-4">Music Credits</h3>
//             <div className="text-3xl font-bold text-primary mb-2">150 pts</div>
//             <p className="text-white/60 text-sm mb-4">Enough for 3 song requests</p>
//             <Button variant="music" size="sm" className="w-full">
//               Request Song
//             </Button>
//           </Card>
//         </div>

//         <div className="mt-8 grid grid-cols-2 gap-4">
//           <Button variant="outline" className="bg-white/5 border-white/20 text-white">
//             Order Food
//           </Button>
//           <Button variant="outline" className="bg-white/5 border-white/20 text-white">
//             Join Group
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// };