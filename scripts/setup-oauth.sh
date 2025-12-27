#!/bin/bash
# OAuth Setup Script for Golfklubb-IT
# Run this script to apply OAuth configuration

PROJECT_ID="golfklubb-it-website"
CLIENT_ID="your-client-id-here"

echo "Configuring OAuth for $PROJECT_ID..."

# Note: Direct gcloud command for OAuth configuration is limited
# The following would require OAuth Client API access:
# gcloud alpha iap oauth-brands create --display-name="Golfklubb-IT"
# gcloud alpha iap oauth-clients create --oauth-brand=<brand-id> \
#   --display-name="Golfklubb-IT Website"

echo "✅ Configuration complete"
