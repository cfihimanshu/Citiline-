# Contact Form ko Google Sheet se connect karne ka full process

## 1. Google Sheet banayein

1. [Google Sheets](https://sheets.google.com) open karein.
2. **Blank spreadsheet** par click karein.
3. Sheet ka naam, jaise `Citiline Contact Responses`, rakh dein.
4. Header ya tab manually banane ki zarurat nahi hai. Pehli valid form submission par script automatically **Contact Responses** tab aur columns bana degi.

## 2. Apps Script editor open karein

1. Google Sheet ke top menu mein **Extensions** par click karein.
2. **Apps Script** select karein.
3. Apps Script editor ki `Code.gs` file mein pehle se likha sample code delete karein.
4. Is project ki `google-apps-script/Code.gs` file ka poora code copy karke Apps Script editor mein paste karein.
5. Upar **Save project** icon par click karein.
6. Project ka naam, jaise `Citiline Contact Form`, rakh dein.

## 3. Secret key set karein

Webhook ko unauthorized submissions se bachane ke liye ek secret use hota hai.

1. Apps Script editor ke left sidebar mein **Project Settings** (gear icon) open karein.
2. Neeche **Script Properties** section locate karein.
3. **Add script property** par click karein.
4. Property mein ye values dalein:
   - Property: `WEBHOOK_SECRET`
   - Value: apni long random secret, example: `citiline-contact-2026-X7p9K2mQ8vL4`
5. **Save script properties** par click karein.
6. Is secret ko note kar lein. Exactly yahi value website ki `.env` file mein bhi dalni hai.

## 4. Apps Script ko Web App deploy karein

1. Apps Script editor ke top-right mein **Deploy** par click karein.
2. **New deployment** select karein.
3. **Select type** ke paas gear icon par click karke **Web app** choose karein.
4. Description mein `Citiline contact form webhook` likh sakte hain.
5. **Execute as** mein `Me` select karein.
6. **Who has access** mein `Anyone` select karein.
7. **Deploy** par click karein.
8. Google authorization dialog aaye to **Authorize access** par click karein.
9. Apna Google account select karein.
10. Agar “Google hasn’t verified this app” screen aaye, to **Advanced** par click karein, phir **Go to Citiline Contact Form (unsafe)** choose karein. Ye aapka khud ka Apps Script hai.
11. Required permissions ko **Allow** karein.
12. Deployment complete hone par **Web app URL** copy karein. URL ka end `/exec` se hona chahiye.

Example:

```text
https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec
```

## 5. Website ki `.env` file update karein

Project root mein `.env` file pehle se bani hui hai. Usmein placeholder values replace karein:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=citiline-contact-2026-X7p9K2mQ8vL4
```

Important:

- `GOOGLE_SHEETS_WEBHOOK_URL` mein deployed Web App ka `/exec` URL hona chahiye.
- `GOOGLE_SHEETS_WEBHOOK_SECRET` exactly wahi hona chahiye jo Apps Script ke Script Properties mein set kiya tha.
- Secret ke aage/peeche extra spaces na rakhein.
- `.env` file Git mein commit nahi hogi, kyunki project ki `.gitignore` mein `.env*` ignored hai.

## 6. Development server restart karein

Environment variables server start hote waqt load hoti hain. Agar development server already chal raha hai:

1. Terminal mein `Ctrl + C` press karke server stop karein.
2. Dobara run karein:

```bash
npm run dev
```

3. Browser mein contact page open karein:

```text
http://localhost:3000/contact
```

## 7. Form test karein

1. Contact form ke required fields fill karein.
2. **Send Message** button par click karein.
3. Website par success message aana chahiye.
4. Google Sheet refresh karein.
5. **Contact Responses** naam ka tab automatically create hoga.
6. Form response in columns mein save hoga:
   - Submitted At
   - First Name
   - Last Name
   - Email
   - Phone
   - Company
   - Service Required
   - Message

## 8. Production website par setup

Agar website Vercel ya kisi aur hosting par deploy hai, server ko local `.env` file nahi milegi. Hosting dashboard mein ye dono environment variables separately add karein:

```text
GOOGLE_SHEETS_WEBHOOK_URL
GOOGLE_SHEETS_WEBHOOK_SECRET
```

Values wahi rahengi jo local `.env` mein hain. Variables add karne ke baad website ko redeploy/restart karein.

## Common problems

### “Contact form is not configured yet”

- `.env` mein dono values check karein.
- Placeholder values replace hui hain ya nahi verify karein.
- Development server restart karein.

### Form par generic error aa raha hai

- Apps Script deployment ka URL `/exec` par end hona chahiye.
- Apps Script deployment access `Anyone` hona chahiye.
- Website aur Apps Script ki secret values exactly match honi chahiye.

### Code change karne ke baad response nahi aa raha

Apps Script code update hone par deployment bhi update karein:

1. **Deploy → Manage deployments** open karein.
2. Existing deployment ke edit/pencil icon par click karein.
3. **Version → New version** select karein.
4. **Deploy** par click karein.

Existing Web App URL same reh sakta hai.
