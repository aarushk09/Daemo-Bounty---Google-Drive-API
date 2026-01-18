import "reflect-metadata";
import 'dotenv/config';
import { DaemoBuilder, DaemoHostedConnection } from 'daemo-engine';
import { DriveService } from './services/DriveFunctions';

async function main() {
  // Check for required environment variables
  const requiredEnvVars = [
    'DAEMO_AGENT_API_KEY',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'GOOGLE_REFRESH_TOKEN'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error(`❌ Error: Missing required environment variables: ${missingVars.join(', ')}`);
    console.error(`Please check your .env file.`);
    process.exit(1);
  }

  const driveService = new DriveService(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    process.env.GOOGLE_REFRESH_TOKEN!
  );

  const sessionData = new DaemoBuilder()
    .withServiceName("GoogleDriveKnowledgeAgent")
    .registerService(driveService)
    .build();

  const connection = new DaemoHostedConnection(
    { 
      agentApiKey: process.env.DAEMO_AGENT_API_KEY!, 
      daemoGatewayUrl: "https://engine.daemo.ai:50052/"
    },
    sessionData
  );

  await connection.start();
  console.log("🚀 Google Drive Knowledge Agent online!");
  console.log("📂 Ready to search, summarize, and organize your documents.");
}

main().catch(console.error);

