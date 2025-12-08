export const sendLeadNotification = functions.region("europe-west1").firestore
    .document("leads/{leadId}")
    .onCreate(async (snap, context) => {
        console.log("📧 Lead created:", snap.data());
        try {
            const gmailUser = functions.config().gmail.user;
            const gmailPassword = functions.config().gmail.password;
            console.log("Gmail user:", gmailUser);
            // ... rest av koden
        } catch (error) {
            console.error("❌ Error in sendLeadNotification:", error);
        }
    });