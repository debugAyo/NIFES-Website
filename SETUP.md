# NIFES FUTMinna — Setup Guide

This document lists everything you need to configure to make the site fully functional. Complete these steps at your own pace.

---

## 1. Formspree (Connect Form)

The connect form on the Join Us page sends submissions via Formspree.

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click **"New Form"** and give it a name (e.g. "NIFES Connect Form")
3. Copy the form endpoint URL (looks like `https://formspree.io/f/xpwzkgbn`)
4. Open `join.html` and find line 86:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID
6. Done — every submission will be emailed to you and visible in your Formspree dashboard

---

## 2. Firebase (Admin Dashboard + Events)

The admin page and events page pull live data from Firebase Realtime Database.

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a project (e.g. `nifes-futminna`)
3. Add a Web App to the project
4. Enable **Realtime Database** (start in test mode)
5. Copy the Firebase config object
6. Open `config.js` and replace the placeholder values:
   ```js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

---

## 3. Leader Contact Numbers (Contact Page)

The contact page has placeholder leader data.

1. Open `contact.html`
2. Find each `<a href="tel:+234XXXXXXXXXX" class="leader-contact">` block
3. Replace:
   - Placeholder phone numbers (`+234 XXX XXX XXXX`) with real numbers
   - Placeholder names (e.g. "John Doe") with real names
   - The `href="tel:..."` values with real phone numbers
4. Also update the WhatsApp links (`href="#"`) with the actual WhatsApp group link

---

## 4. WhatsApp Links (Multiple Pages)

Several WhatsApp links are placeholders (`href="#"`). Update them across the site:

- `index.html` — footer WhatsApp icon + CTA "Chat on WhatsApp" button
- `contact.html` — General Enquiries card + Prayer Requests card
- `join.html` — "Join Our WhatsApp Group" card

Replace `href="#"` with your actual WhatsApp group invite link.

---

## 5. Email Address (Contact Page)

The "Partnership & Media" card on the contact page uses a placeholder email.

1. Open `contact.html`
2. Find `mailto:nifesfutminna@email.com`
3. Replace with your actual fellowship email address

---

## 6. Admin Account (Admin Dashboard)

The admin page uses Firebase Authentication.

1. Go to Firebase Console > your project > **Authentication**
2. Enable **Email/Password** sign-in provider
3. Go to **Users** tab and click **Add User**
4. Create an admin account (email + password)
5. Use those credentials to log in at `admin.html`

---

## 7. Social Media Links (Footer)

Some social links use placeholder `href="#"`. Check and update on all pages:

- WhatsApp (`#`) — replace with group invite link
- Twitter (`#`) — replace with actual Twitter/X profile URL

Already correct: Facebook, Instagram, TikTok, YouTube links.

---

## 8. Firebase Database Structure

For the admin dashboard and events page to work, your Firebase Realtime Database needs this structure:

```json
{
  "nifes_data": {
    "weekly": [
      {
        "title": "Sunday Service",
        "desc": "A time of corporate worship...",
        "time": "2:30 PM"
      },
      {
        "title": "Prayer Meeting / Bible Study",
        "desc": "Join us as we seek God's face...",
        "time": "7:00 PM"
      }
    ]
  }
}
```

You can add/edit this data through the admin dashboard once Firebase is configured.

---

## Summary Checklist

| # | Task | Status |
|---|------|--------|
| 1 | Set up Formspree + paste form ID in `join.html` | [ ] |
| 2 | Set up Firebase + paste config in `config.js` | [ ] |
| 3 | Fill in leader names + phone numbers in `contact.html` | [ ] |
| 4 | Replace WhatsApp placeholder links across all pages | [ ] |
| 5 | Replace email placeholder in `contact.html` | [ ] |
| 6 | Create Firebase admin account for `admin.html` | [ ] |
| 7 | Update Twitter link in footers | [ ] |
| 8 | Set up Firebase database structure | [ ] |
