/**
 * GharBazaar Frontend - Hostinger Entry Point
 * This file is for Hostinger's Node.js selector (Shared/Business Hosting).
 * Points to the Next.js standalone server output.
 */

// Production check
process.env.NODE_ENV = "production";
process.env.PORT = process.env.PORT || 3000;
process.env.HOSTNAME = "0.0.0.0";

// Import the Next.js standalone server
require("./.next/standalone/server.js");
