// Lectern website settings. Fill these in from Supabase → Project Settings → API.
// The anon (publishable) key is meant to be public; row-level security protects the data.
window.LECTERN_CONFIG = {
  supabaseUrl: "https://padlmhugvnatwerntbeu.supabase.co",
  supabaseAnonKey: "sb_publishable_C07upywS4UOZ26rJWTt1tQ_I83hMH4x",
  // Google Cloud → Clients → the Web client's ID. When set, the page uses Google's own button, which
  // shows this website instead of the Supabase address. Empty = Supabase's Google sign-in.
  googleClientId: "",
  // iCloud for web Lectern (CloudKit JS). Needs the Apple Developer account:
  // CloudKit Console → iCloud.lecternapp.lectern → Tokens & Keys → new API token (sign-in callback: post message).
  cloudKit: {
    containerIdentifier: "iCloud.lecternapp.lectern",
    apiToken: "",
    environment: "development"   // "production" once the schema is deployed and the app is on the App Store
  }
};
